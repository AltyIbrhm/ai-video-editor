'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$9',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 10 videos per month',
      'Basic AI editing features',
      '720p export quality',
      'Email support',
      '5GB storage'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for content creators and small teams',
    features: [
      'Unlimited videos',
      'Advanced AI features',
      '4K export quality',
      'Priority support',
      '50GB storage',
      'Team collaboration',
      'Custom branding'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom AI training',
      'Unlimited storage',
      'API access',
      'SSO & advanced security',
      'Custom integrations'
    ]
  }
];

export function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center opacity-0 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Choose the perfect plan for your video editing needs
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`opacity-0 animate-fade-in [animation-delay:${index * 200}ms] relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="ml-1 text-xl font-semibold text-gray-600">/mo</span>}
              </div>
              <p className="mt-6 text-gray-600">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-lg shadow ${
                  plan.name === 'Pro'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } font-medium transition-colors duration-200`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 