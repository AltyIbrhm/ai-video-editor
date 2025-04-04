import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.redirect(new URL('/auth/login', 'http://localhost:3000'), {
      status: 302
    });

    // Clear the token cookie
    response.cookies.delete('token');

    console.log('Logout: Token cookie cleared, redirecting to login');
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Error during logout' },
      { status: 500 }
    );
  }
} 