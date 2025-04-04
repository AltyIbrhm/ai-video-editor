import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Attempt a simple database query
    await prisma.$queryRaw`SELECT 1`;
    
    // Count users
    const userCount = await prisma.user.count();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
      stats: {
        userCount,
        dbUrl: process.env.DATABASE_URL ? 
          process.env.DATABASE_URL.substring(0, process.env.DATABASE_URL.indexOf('://') + 3) + '...' : 
          'Not configured'
      }
    });
  } catch (error: any) {
    console.error('Database connection test failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
      errorCode: error.code,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
} 