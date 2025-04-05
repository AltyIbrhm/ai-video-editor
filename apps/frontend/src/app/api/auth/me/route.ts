import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

export async function GET() {
  console.log('/api/auth/me: Processing request');
  
  try {
    // Get token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    console.log('/api/auth/me: Token present:', !!token);

    if (!token) {
      console.log('/api/auth/me: No token found');
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Verify token
    const payload = await verifyToken(token);
    console.log('/api/auth/me: Token verification result:', payload ? 'success' : 'failed');

    if (!payload || !payload.userId) {
      console.log('/api/auth/me: Invalid token payload');
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Get user from database
    console.log('/api/auth/me: Looking up user:', payload.userId);
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    if (!user) {
      console.log('/api/auth/me: User not found in database');
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    console.log('/api/auth/me: Successfully retrieved user data');
    const response = NextResponse.json({ user });

    // Ensure cookie is set with correct domain in production
    if (process.env.NODE_ENV === 'production') {
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        domain: '.editai.app',
        maxAge: 60 * 60 // 1 hour
      });
    }

    return response;
  } catch (error) {
    console.error('/api/auth/me error:', error);
    return NextResponse.json(
      { message: 'Not authenticated' },
      { status: 401 }
    );
  }
} 