'use client';

import { cn } from '@/lib/tailwind';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-10', className)}>
      {children}
    </h2>
  );
}
