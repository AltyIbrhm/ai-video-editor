'use client';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">About EditAI</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Revolutionizing Video Editing with AI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            EditAI is on a mission to make professional video editing accessible to everyone through the power of artificial intelligence.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Our Mission</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We believe that everyone should have access to professional-quality video editing tools. Our AI-powered platform 
                makes it possible to create stunning videos in minutes, not hours, democratizing video content creation for creators worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Our Technology</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Using cutting-edge artificial intelligence and machine learning algorithms, we've developed a platform that 
                understands video content and can automatically enhance it to professional standards. Our technology continues 
                to evolve and improve, bringing new capabilities to our users.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Our Vision</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We envision a future where creating high-quality video content is as simple as writing a text message. 
                By combining AI with intuitive design, we're making this future a reality, enabling creators to focus on 
                their creativity rather than technical details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Our Commitment</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We're committed to providing the best possible experience for our users. This means continuous improvement 
                of our platform, regular updates with new features, and maintaining the highest standards of security and 
                privacy for our users' content.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/auth/signup"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Join us today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 