import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className="relative min-h-screen flex items-center">{children}</section>;
}
