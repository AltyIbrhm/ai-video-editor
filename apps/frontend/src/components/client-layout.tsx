'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';

const publicPaths = ['/'];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicPath = publicPaths.includes(pathname);

  return (
    <div className="min-h-full">
      {isPublicPath && <Navbar />}
      {children}
    </div>
  );
} 