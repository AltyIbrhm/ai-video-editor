import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EditAI - Transform Your Videos with AI',
  description: 'Edit, enhance, and create stunning videos with the power of artificial intelligence.',
};

export default function RootPage() {
  if (typeof window !== 'undefined') {
    redirect('/home');
  }
  return null;
} 