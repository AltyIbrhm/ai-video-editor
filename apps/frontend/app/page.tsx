import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Get Started
              </button>
              <button className="border border-blue-600 hover:bg-blue-600/10 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
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
      </div>
    </main>
  );
} 