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

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    console.log('Signup attempt for:', { name, email });

    // Validate input
    if (!name || !email || !password) {
      console.log('Missing required fields');
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log('Checking for existing user...');
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('User already exists:', email);
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    console.log('Hashing password...');
    const hashedPassword = await hashPassword(password);

    // Create user
    console.log('Creating new user...');
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log('User created:', { userId: user.id });

    // Generate verification token
    console.log('Generating verification token...');
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    console.log('Creating verification token in database...');
    const verificationToken = await prisma.verificationToken.create({
      data: {
        token,
        expires,
        userId: user.id,
      },
    });
    console.log('Verification token created:', { tokenId: verificationToken.id });

    // Send verification email
    const baseUrl = getBaseUrl();
    console.log('Using base URL:', baseUrl);
    
    const verificationUrl = `/auth/verify-email?token=${token}`;
    console.log('Sending verification email with relative URL:', verificationUrl);

    // The email library will convert this to an absolute URL
    await sendVerificationEmail(email, verificationUrl);

    console.log('Signup process completed successfully');
    return NextResponse.json(
      {
        message: 'User created successfully. Please check your email for verification.',
        debug: process.env.NODE_ENV === 'development' 
          ? { 
              verificationUrl: `${baseUrl}${verificationUrl.startsWith('/') ? '' : '/'}${verificationUrl}`,
              email,
              tokenUsed: token 
            } 
          : undefined,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup error:', error);
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    }
    
    // Return a more detailed error in development
    const errorData: any = { 
      message: 'Error creating user',
    };
    
    if (process.env.NODE_ENV === 'development') {
      errorData.debug = {
        errorMessage: error.message,
        errorName: error.name,
      };
      
      if (error.stack) {
        errorData.debug.stack = error.stack.split('\n').slice(0, 3).join('\n');
      }
    }
    
    return NextResponse.json(
      errorData,
      { status: 500 }
    );
  }
} 