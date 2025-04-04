'use client';

import Link from 'next/link';
import { Video } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Video className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EditAI</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/features"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-4">
              <Link
                href="/auth/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 