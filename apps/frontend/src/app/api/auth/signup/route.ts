import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { sendVerificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Generate verification token
    const verificationToken = await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: Math.random().toString(36).substring(2),
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      },
    });

    try {
      // Try to send verification email
      await sendVerificationEmail(user.email, verificationToken.token);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      // During development, return the verification token in the response
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json(
          {
            message: 'User created successfully. Email service not configured.',
            debug: {
              verificationToken: verificationToken.token,
              verificationUrl: `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email?token=${verificationToken.token}`
            }
          },
          { status: 201 }
        );
      }
    }

    return NextResponse.json(
      { message: 'User created successfully. Please check your email for verification.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
} 