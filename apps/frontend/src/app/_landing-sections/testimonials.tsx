'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    content: 'This AI video editor has completely transformed my workflow. What used to take hours now takes minutes, and the results are consistently professional.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The automated enhancements and transitions are incredible. Our team has seen a 3x increase in video production speed since adopting this tool.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'YouTuber',
    content: 'As a full-time content creator, this tool is a game-changer. The AI suggestions are spot-on, and it saves me countless hours of editing time.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center opacity-0 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Loved by creators worldwide
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          See what our users have to say about their experience
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`opacity-0 animate-fade-in [animation-delay:${index * 200}ms] relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-gray-600 mb-6">
              "{testimonial.content}"
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <div className="font-medium text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 