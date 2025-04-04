'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the AI video editing work?',
    answer: 'Our AI analyzes your video content and automatically suggests edits, transitions, and enhancements. It uses advanced machine learning algorithms to understand context, timing, and visual elements to create professional-looking videos.'
  },
  {
    question: 'What video formats are supported?',
    answer: 'We support all major video formats including MP4, MOV, AVI, and more. Our platform can handle high-resolution footage up to 4K, ensuring your videos maintain their quality throughout the editing process.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial period.'
  },
  {
    question: 'Can I use it for commercial projects?',
    answer: 'Absolutely! Our platform is suitable for both personal and commercial use. Many businesses, content creators, and marketing teams use our tool for their professional video production needs.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="opacity-0 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-8">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`opacity-0 animate-fade-in [animation-delay:${index * 100}ms]`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-[max-height,opacity] duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 