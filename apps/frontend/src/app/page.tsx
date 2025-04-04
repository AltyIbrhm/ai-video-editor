import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { PRICING_TIERS } from '@/constants/config';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              EditAI
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your videos with the power of AI
            </p>
            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Smart Editing</h3>
              <p className="text-gray-400">
                AI-powered tools that make video editing faster and more intuitive
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Auto Enhancement</h3>
              <p className="text-gray-400">
                Automatically enhance video quality, color, and sound
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Quick Export</h3>
              <p className="text-gray-400">
                Export in multiple formats optimized for any platform
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-16">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.values(PRICING_TIERS).map((tier) => (
                <div key={tier.name} className="p-8 rounded-lg bg-gray-800/50 backdrop-blur">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">
                      {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                    </span>
                    {typeof tier.price === 'number' && <span className="text-gray-400">/month</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.name === 'Pro' ? 'primary' : 'outline'}>
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 