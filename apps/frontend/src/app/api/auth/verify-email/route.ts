import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    console.log('Verification attempt with token:', token);

    if (!token) {
      console.log('No token provided');
      return NextResponse.json(
        { message: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Find the verification token
    console.log('Looking up verification token in database...');
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
      include: { user: true },
    });

    console.log('Verification token lookup result:', verificationToken);

    if (!verificationToken) {
      console.log('Token not found in database');
      return NextResponse.json(
        { message: 'Invalid verification token' },
        { status: 400 }
      );
    }

    // Check if token has expired
    if (verificationToken.expires < new Date()) {
      console.log('Token has expired:', {
        tokenExpiry: verificationToken.expires,
        currentTime: new Date(),
      });
      
      // Delete expired token
      await prisma.verificationToken.delete({
        where: { id: verificationToken.id },
      });

      return NextResponse.json(
        { message: 'Verification token has expired' },
        { status: 400 }
      );
    }

    console.log('Updating user verification status...');
    // Update user's email verification status
    await prisma.user.update({
      where: { id: verificationToken.userId },
      data: { emailVerified: true },
    });

    console.log('Deleting used verification token...');
    // Delete the used token
    await prisma.verificationToken.delete({
      where: { id: verificationToken.id },
    });

    console.log('Verification successful, redirecting to login...');
    
    // Instead of redirecting, return a success response
    // The frontend will handle the redirect
    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
    });
  } catch (error) {
    console.error('Email verification error:', error);
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    }
    return NextResponse.json(
      { message: 'Error verifying email' },
      { status: 500 }
    );
  }
} 