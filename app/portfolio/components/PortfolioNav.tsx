'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/tailwind';

const NAV_ITEMS = [{ label: '김동규', href: '/' }];

export default function PortfolioNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-6">
        {NAV_ITEMS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-sm font-medium transition-colors duration-200',
              pathname === href ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
