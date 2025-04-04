'use client';

import { useState, useEffect } from 'react';

export default function TestApi() {
  const [status, setStatus] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Test the backend API
    fetch('http://localhost:3002/api/v1/status')
      .then(response => response.json())
      .then(data => {
        setStatus(JSON.stringify(data, null, 2));
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">API Testt Page</h1>
      {error ? (
        <div className="text-red-500 p-4 bg-red-50 rounded">
          Error: {error}
        </div>
      ) : (
        <pre className="bg-gray-100 p-4 rounded">
          {status}
        </pre>
      )}
    </div>
  );
} 