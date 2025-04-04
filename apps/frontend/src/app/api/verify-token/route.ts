import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-key';

export async function GET() {
  console.log('Verify Token API: Starting verification');

  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    console.log('Verify Token API: Token from cookies:', token ? `${token.substring(0, 10)}...` : 'none');

    if (!token) {
      console.log('Verify Token API: No token found');
      return NextResponse.json({ valid: false, message: 'No token found' });
    }

    if (!JWT_SECRET) {
      console.error('Verify Token API: JWT_SECRET is not set');
      return NextResponse.json({ valid: false, message: 'JWT_SECRET not configured' });
    }

    try {
      console.log('Verify Token API: Attempting to verify token');
      const decoded = verify(token, JWT_SECRET);
      console.log('Verify Token API: Token verified successfully:', decoded);

      return NextResponse.json({
        valid: true,
        message: 'Token is valid',
        debug: {
          decoded,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Verify Token API: Token verification failed:', error);
      return NextResponse.json({
        valid: false,
        message: 'Invalid token',
        error: error instanceof Error ? error.message : String(error)
      });
    }
  } catch (error) {
    console.error('Verify Token API Error:', error);
    return NextResponse.json({
      valid: false,
      message: 'Error verifying token',
      error: error instanceof Error ? error.message : String(error)
    });
  }
} 