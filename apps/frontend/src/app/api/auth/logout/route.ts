import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const isProduction = process.env.NODE_ENV === 'production';
  console.log('Logout API: Environment:', isProduction ? 'production' : 'development');
  console.log('Logout API: Request URL:', request.url);

  try {
    // Get domain from request URL
    const requestUrl = new URL(request.url);
    const domain = isProduction ? '.editai.app' : requestUrl.hostname;
    console.log('Logout API: Using domain:', domain);

    const response = NextResponse.json(
      { 
        success: true,
        redirectTo: '/auth/login'
      },
      { status: 200 }
    );

    // Clear the token cookie with proper domain settings
    console.log('Logout API: Clearing cookie with settings:', {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      domain: domain,
      maxAge: 0
    });

    response.cookies.delete({
      name: 'token',
      path: '/',
      domain: domain
    });

    console.log('Logout API: Cookie cleared successfully');
    return response;
  } catch (error) {
    console.error('Logout API: Error during logout:', error);
    return NextResponse.json(
      { message: 'Error during logout' },
      { status: 500 }
    );
  }
} 