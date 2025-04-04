'use client';

import { Wand2, Zap, Share2, Clock, Palette, Video } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const features: Feature[] = [
  {
    title: 'Smart Editing',
    description: 'AI-powered tools for seamless video editing with intelligent content analysis',
    icon: Wand2,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Auto Enhancement',
    description: 'Automatic color correction, stabilization, and quality improvement',
    icon: Palette,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Quick Export',
    description: 'Fast rendering and support for multiple formats and resolutions',
    icon: Share2,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Real-time Preview',
    description: 'See changes instantly with our powerful real-time preview engine',
    icon: Video,
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Time-Saving',
    description: 'Reduce editing time by up to 90% with AI-assisted workflows',
    icon: Clock,
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Instant Results',
    description: 'Get professional results in minutes with one-click presets',
    icon: Zap,
    color: 'from-yellow-500 to-yellow-600'
  }
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={`opacity-0 group relative p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:${index * 200}ms]`}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
          
          {/* Content */}
          <div className="relative">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 