import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">AI Video Editor</h1>
      
      <div className="space-y-4">
        <p className="text-lg">Welcome to the AI Video Editor platform.</p>
        
        <div className="flex space-x-4">
          <Link 
            href="/test-api" 
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Test API Connection
          </Link>
        </div>
      </div>
    </main>
  );
} 