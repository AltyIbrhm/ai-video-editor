import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';
import { sendVerificationEmail } from '@/lib/email';
import crypto from 'crypto';

// Get the base URL for the application
function getBaseUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || 
    (typeof window !== 'undefined' && window.location.origin) || 
    'https://www.editai.app';
}

// This will help identify if we're in production
const isProduction = process.env.NODE_ENV === 'production';

export async function POST(request: Request) {
  let userData = null;
  let inputData = null;

  try {
    // Parse request
    try {
      inputData = await request.json();
      const { name, email, password } = inputData;
      console.log('Signup attempt for:', { name, email, isProduction });

      // Validate input
      if (!name || !email || !password) {
        console.log('Missing required fields');
        return NextResponse.json(
          { message: 'Missing required fields' },
          { status: 400 }
        );
      }
    } catch (parseError: any) {
      console.error('Error parsing request:', parseError);
      return NextResponse.json(
        { message: 'Invalid request format', error: parseError.message },
        { status: 400 }
      );
    }

    const { name, email, password } = inputData;

    // Check database connection
    try {
      await prisma.$queryRaw`SELECT 1`;
      console.log('Database connection verified');
    } catch (dbError: any) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { message: 'Database connection error', error: dbError.message },
        { status: 500 }
      );
    }

    // Check if user already exists
    console.log('Checking for existing user...');
    let existingUser = null;
    try {
      existingUser = await prisma.user.findUnique({
        where: { email },
      });
    } catch (findError: any) {
      console.error('Error checking for existing user:', findError);
      return NextResponse.json(
        { message: 'Error checking for existing user', error: findError.message },
        { status: 500 }
      );
    }

    if (existingUser) {
      console.log('User already exists:', email);
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    console.log('Hashing password...');
    let hashedPassword;
    try {
      hashedPassword = await hashPassword(password);
    } catch (hashError: any) {
      console.error('Error hashing password:', hashError);
      return NextResponse.json(
        { message: 'Error hashing password', error: hashError.message },
        { status: 500 }
      );
    }

    // Create user
    console.log('Creating new user...');
    let user;
    try {
      user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      userData = user;
      console.log('User created:', { userId: user.id });
    } catch (createUserError: any) {
      console.error('Error creating user:', createUserError);
      return NextResponse.json(
        { 
          message: 'Error creating user in database', 
          error: createUserError.message,
          code: createUserError.code
        },
        { status: 500 }
      );
    }

    // Generate verification token
    console.log('Generating verification token...');
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create verification token
    let verificationToken;
    try {
      console.log('Creating verification token in database...');
      verificationToken = await prisma.verificationToken.create({
        data: {
          token,
          expires,
          userId: user.id,
        },
      });
      console.log('Verification token created:', { tokenId: verificationToken.id });
    } catch (tokenError: any) {
      console.error('Error creating verification token:', tokenError);
      // Don't fail the whole process, just log it and continue
      // We already created the user, so we can still proceed
    }

    // Try to send verification email, but don't fail if it fails
    const baseUrl = getBaseUrl();
    console.log('Using base URL for emails:', baseUrl);
    
    const verificationUrl = `/auth/verify-email?token=${token}`;
    console.log('Verification URL (relative):', verificationUrl);
    
    // Generate absolute URL for logging
    const absoluteUrl = `${baseUrl}${verificationUrl.startsWith('/') ? '' : '/'}${verificationUrl}`;
    console.log('Verification URL (absolute):', absoluteUrl);

    let emailSent = false;
    try {
      // The email library will convert this to an absolute URL
      await sendVerificationEmail(email, verificationUrl);
      emailSent = true;
      console.log('Verification email sent successfully');
    } catch (emailError: any) {
      console.error('Error sending verification email:', emailError);
      // Don't fail the signup process if email sending fails
      console.log('Continuing despite email error');
    }

    console.log('Signup process completed successfully');
    return NextResponse.json(
      {
        message: emailSent 
          ? 'User created successfully. Please check your email for verification.' 
          : 'User created successfully, but there was an issue sending the verification email. Please contact support.',
        success: true,
        emailSent,
        // Always include debugging info in the response for now
        debug: { 
          verificationUrl: absoluteUrl,
          email,
          userId: user.id,
          tokenId: verificationToken?.id
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup error (outer catch):', error);
    
    // Log detailed error information
    const errorData: any = { 
      message: 'Unexpected error during signup',
      success: false,
    };
    
    // Always include debugging info for now to help troubleshoot
    errorData.debug = {
      errorMessage: error.message || 'Unknown error',
      errorName: error.name || 'Unknown',
      errorCode: error.code,
      userData: userData ? { id: userData.id, email: userData.email } : null,
      inputData: inputData ? { ...inputData, password: '[REDACTED]' } : null
    };
    
    if (error.stack) {
      errorData.debug.stack = error.stack.split('\n').slice(0, 5).join('\n');
    }
    
    return NextResponse.json(errorData, { status: 500 });
  }
} 