import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-200"
            >
              EditAI
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 