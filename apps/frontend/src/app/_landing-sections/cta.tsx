'use client';

import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-80" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">Ready to transform your videos?</span>
            <span className="block text-blue-600">Start editing with AI today.</span>
          </h2>
        </div>
        
        <div className="opacity-0 animate-fade-in [animation-delay:200ms]">
          <p className="mt-4 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Join thousands of creators who are already using our AI-powered tools to create stunning videos in minutes.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in [animation-delay:400ms]">
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Get started
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 