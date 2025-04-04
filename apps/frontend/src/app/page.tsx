import type { Metadata } from 'next';
import { HeroSection } from './_landing-sections/hero-section';
import { FeatureGrid } from './_landing-sections/feature-grid';
import { CallToAction } from './_landing-sections/call-to-action';

export const metadata: Metadata = {
  title: 'EditAI - Transform Your Videos with AI',
  description: 'Edit, enhance, and create stunning videos with the power of artificial intelligence.',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="container px-4 py-24 mx-auto">
        <HeroSection />
        <FeatureGrid />
        <CallToAction />
      </div>
    </main>
  );
} 