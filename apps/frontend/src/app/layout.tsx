import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | EditAI',
    default: 'EditAI - AI-Powered Video Editor',
  },
  description: 'Transform your videos with the power of AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 