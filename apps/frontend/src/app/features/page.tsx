'use client';

import { Video, Wand2, Zap, Clock, Star, Shield } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Editing',
    description: 'Our advanced AI algorithms automatically enhance your videos, adjusting color, lighting, and composition.',
    icon: Wand2,
  },
  {
    name: 'Lightning Fast',
    description: 'Process and edit videos up to 10x faster than traditional editing methods.',
    icon: Zap,
  },
  {
    name: 'Time-Saving',
    description: 'Automate repetitive tasks and focus on the creative aspects of your video editing.',
    icon: Clock,
  },
  {
    name: 'Professional Quality',
    description: 'Achieve professional-grade results with our state-of-the-art video processing technology.',
    icon: Star,
  },
  {
    name: 'Secure Storage',
    description: 'Your videos are encrypted and securely stored in our cloud infrastructure.',
    icon: Shield,
  },
  {
    name: 'Video Templates',
    description: 'Access a library of professional templates to kickstart your video projects.',
    icon: Video,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create amazing videos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform provides all the tools you need to create stunning videos quickly and efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 