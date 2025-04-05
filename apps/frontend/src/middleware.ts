import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-key';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Middleware: Processing request for path:', pathname);

  // Only protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    console.log('Middleware: Checking dashboard access');
    
    const token = request.cookies.get('token')?.value;
    console.log('Middleware: Token found:', token ? 'yes' : 'no');
    console.log('Middleware: All cookies:', request.cookies.getAll().map(c => `${c.name}=${c.value.substring(0, 10)}...`));

    if (!token) {
      console.log('Middleware: No token found, redirecting to login');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    try {
      const encoder = new TextEncoder();
      const secretKey = encoder.encode(JWT_SECRET);
      
      const { payload } = await jwtVerify(token, secretKey);
      console.log('Middleware: Token verified successfully, payload:', payload);

      // Allow access to dashboard
      const response = NextResponse.next();

      // Ensure token cookie is set with correct options
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 // 1 hour
      });

      return response;
    } catch (error) {
      console.error('Middleware: Token verification failed:', error);
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
}; 