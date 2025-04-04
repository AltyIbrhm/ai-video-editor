'use client';

import { Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-80" />
      
      {/* Content */}
      <div className="relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Video Editing
            </div>
          </div>

          {/* Heading */}
          <div className="opacity-0 animate-fade-in [animation-delay:200ms]">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900">
              Transform Your Videos <br className="hidden sm:block" />
              with AI Magic
            </h1>
          </div>

          {/* Description */}
          <div className="opacity-0 animate-fade-in [animation-delay:400ms]">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Edit, enhance, and create stunning videos effortlessly. Our AI-powered tools help you achieve professional results in minutes, not hours.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            {[
              { value: '10x', label: 'Faster Editing' },
              { value: '1M+', label: 'Videos Created' },
              { value: '99%', label: 'Happy Users' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`opacity-0 animate-fade-in space-y-2 [animation-delay:${600 + index * 200}ms]`}
              >
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-in [animation-delay:1200ms] flex gap-4 justify-center mt-8">
            <a
              href="#"
              data-testid="hero-cta"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              data-testid="hero-learn-more"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-200 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 