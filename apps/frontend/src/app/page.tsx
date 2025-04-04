import type { Metadata } from 'next';
import { HeroSection } from './_landing-sections/hero-section';
import { FeatureGrid } from './_landing-sections/feature-grid';
import { Testimonials } from './_landing-sections/testimonials';
import { Pricing } from './_landing-sections/pricing';
import { FAQ } from './_landing-sections/faq';
import { CallToAction } from './_landing-sections/cta';

export const metadata: Metadata = {
  title: 'EditAI - Transform Your Videos with AI',
  description: 'Experience the future of video editing. Create professional-quality videos effortlessly with AI-powered tools for seamless editing, automatic enhancements, and quick exports.',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureGrid />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CallToAction />
        </div>
      </div>
    </main>
  );
} 