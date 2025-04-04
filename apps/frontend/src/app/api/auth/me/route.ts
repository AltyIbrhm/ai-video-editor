import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-key';

export async function GET() {
  try {
    // Get token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      console.log('/api/auth/me: No token found');
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Verify token
    const encoder = new TextEncoder();
    const secretKey = encoder.encode(JWT_SECRET);
    
    const { payload } = await jwtVerify(token, secretKey);
    console.log('/api/auth/me: Token verified, payload:', payload);

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: payload.userId as string },
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

    return NextResponse.json({ user });
  } catch (error) {
    console.error('/api/auth/me error:', error);
    return NextResponse.json(
      { message: 'Not authenticated' },
      { status: 401 }
    );
  }
} 