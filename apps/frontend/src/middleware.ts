import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-key';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Middleware: Processing request for path:', pathname);
  console.log('Middleware: Available cookies:', request.cookies.getAll().map(c => c.name));

  // Allow test-redirect routes without authentication
  if (pathname.startsWith('/test-redirect')) {
    console.log('Middleware: Allowing test-redirect route');
    return NextResponse.next();
  }

  // Only protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    console.log('Middleware: Checking dashboard access');
    
    // Get all cookies and log them
    const allCookies = request.cookies.getAll();
    console.log('Middleware: All cookies:', allCookies);
    
    const token = request.cookies.get('token')?.value;
    console.log('Middleware: Token found:', token ? 'yes' : 'no');

    if (!token) {
      console.log('Middleware: No token found, redirecting to login');
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      // Add cache control headers to prevent caching
      response.headers.set('Cache-Control', 'no-store, max-age=0');
      return response;
    }

    try {
      console.log('Middleware: Using JWT_SECRET:', JWT_SECRET === 'development-secret-key' ? '(default)' : '(from env)');
      console.log('Middleware: Token to verify:', token.substring(0, 20) + '...');
      
      const encoder = new TextEncoder();
      const secretKey = encoder.encode(JWT_SECRET);
      
      const { payload } = await jwtVerify(token, secretKey);
      console.log('Middleware: Token verified successfully');

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

      // Add cache control headers
      response.headers.set('Cache-Control', 'no-store, max-age=0');
      return response;
    } catch (error) {
      console.error('Middleware: Token verification failed:', error);
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.headers.set('Cache-Control', 'no-store, max-age=0');
      return response;
    }
  }

  console.log('Middleware: Allowing non-protected route:', pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/test-redirect/:path*']
}; 