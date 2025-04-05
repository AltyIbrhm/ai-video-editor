import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, generateToken } from '@/lib/auth';
import { cookies } from 'next/headers';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || 'https://www.editai.app';
}

export async function POST(request: Request) {
  console.log('Login API: Received request');
  
  try {
    // Parse request body
    let email, password;
    try {
      const body = await request.json();
      email = body.email?.trim();
      password = body.password;
      console.log('Login API: Received login attempt for email:', email);
    } catch (e) {
      console.error('Login API: Failed to parse request body:', e);
      return NextResponse.json(
        { message: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate input
    if (!email || !password) {
      console.log('Login API: Missing email or password');
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    console.log('Login API: Looking up user');
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log('Login API: User not found');
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    console.log('Login API: Verifying password');
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      console.log('Login API: Invalid password');
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check if email is verified
    if (!user.emailVerified) {
      console.log('Login API: Email not verified');
      return NextResponse.json(
        { message: 'Please verify your email before logging in' },
        { status: 403 }
      );
    }

    // Generate JWT token
    console.log('Login API: Generating token');
    const token = await generateToken({
      userId: user.id,
      email: user.email,
    });

    // Create response
    const response = NextResponse.json(
      { 
        success: true,
        redirectTo: '/dashboard',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        }
      }
    );

    // Set cookie
    console.log('Login API: Setting token cookie');
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 // 1 hour
    });

    console.log('Login API: Login successful');
    return response;
  } catch (error) {
    console.error('Login API: Error during login:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred during login' },
      { status: 500 }
    );
  }
} 