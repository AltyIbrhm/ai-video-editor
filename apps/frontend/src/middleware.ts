import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

const PUBLIC_PATHS = [
  '/auth/login',
  '/auth/signup',
  '/auth/verify-email',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/',
  '/api/auth/login',
  '/api/auth/signup',
  '/api/auth/verify-email',
  '/api/auth/forgot-password',
  '/api/auth/reset-password',
  '/api/auth/me',
];

export async function middleware(request: NextRequest) {
  const isProduction = process.env.NODE_ENV === 'production';
  const { pathname } = request.nextUrl;
  console.log('Middleware: Processing request for path:', pathname);
  console.log('Middleware: Environment:', isProduction ? 'production' : 'development');
  console.log('Middleware: Request URL:', request.url);

  // Get domain from request URL
  const requestUrl = new URL(request.url);
  const domain = isProduction ? '.editai.app' : requestUrl.hostname;
  console.log('Middleware: Using domain:', domain);

  // Check if the path is public
  const isPublicPath = PUBLIC_PATHS.some(path => pathname.startsWith(path));
  if (isPublicPath) {
    console.log('Middleware: Public path, allowing access');
    return NextResponse.next();
  }

  // Get token from cookies
  const token = request.cookies.get('token')?.value;
  console.log('Middleware: Token present:', !!token);
  console.log('Middleware: All cookies:', request.cookies.getAll().map(c => `${c.name}=${c.value.substring(0, 10)}...`));

  if (!token) {
    console.log('Middleware: No token found, redirecting to login');
    const loginUrl = new URL('/auth/login', request.url);
    const response = NextResponse.redirect(loginUrl);
    
    // Clear any existing invalid cookies
    response.cookies.delete({
      name: 'token',
      path: '/',
      domain: domain
    });
    
    return response;
  }

  try {
    // Verify token
    const payload = await verifyToken(token);
    console.log('Middleware: Token verified for user:', payload?.email);
    
    // Token is valid, proceed
    const response = NextResponse.next();
    
    // Ensure cookie is set with correct domain
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      domain: domain,
      maxAge: 60 * 60 // 1 hour
    });
    
    return response;
  } catch (error) {
    console.error('Middleware: Token verification failed:', error);
    
    // Token is invalid, redirect to login
    const loginUrl = new URL('/auth/login', request.url);
    const response = NextResponse.redirect(loginUrl);
    
    // Clear invalid token
    response.cookies.delete({
      name: 'token',
      path: '/',
      domain: domain
    });
    
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 