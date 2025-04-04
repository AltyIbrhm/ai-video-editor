import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EditAI - Transform Your Videos with AI',
  description: 'Edit, enhance, and create stunning videos with the power of artificial intelligence.',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Transform Your Videos <br className="hidden sm:block" />
            with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Edit, enhance, and create stunning videos with the power of artificial intelligence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">Smart Editing</h3>
              <p className="text-gray-600 mt-2">AI-powered tools for seamless video editing</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">Auto Enhancement</h3>
              <p className="text-gray-600 mt-2">Automatic color correction and quality improvement</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">Quick Export</h3>
              <p className="text-gray-600 mt-2">Fast rendering and multiple format support</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg"
            >
              Get started
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 group"
            >
              Learn more 
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 