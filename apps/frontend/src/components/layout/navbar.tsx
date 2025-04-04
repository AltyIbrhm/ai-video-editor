import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/50 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          EditAI
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
            Docs
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
} 