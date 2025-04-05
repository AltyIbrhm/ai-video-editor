'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmailSent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      router.replace('/auth/signup');
    }
  }, [email, router]);

  if (!email) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Mail className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Check your email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We've sent a verification link to{' '}
          <span className="font-medium text-blue-600">{email}</span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Next steps:</h3>
              <div className="mt-2 space-y-4 text-sm text-gray-600">
                <p>1. Check your email inbox for the verification link</p>
                <p>2. Click the link to verify your email address</p>
                <p>3. Once verified, you can log in to your account</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    The verification link will expire in 24 hours. If you don't see the email, please check your spam folder.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/auth/login"
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Link>
              <button
                onClick={() => router.refresh()}
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Resend verification email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 