import { NextResponse } from 'next/server';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || 'https://www.editai.app';
}

export async function POST() {
  try {
    const baseUrl = getBaseUrl();
    const response = NextResponse.json(
      { 
        success: true,
        redirectTo: '/auth/login'
      },
      { status: 200 }
    );

    // Clear the token cookie
    response.cookies.set('token', '', {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Error during logout' },
      { status: 500 }
    );
  }
} 