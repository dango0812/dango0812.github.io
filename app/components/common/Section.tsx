import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/tailwind';
interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, ...props }, ref) => {
  return (
    <section ref={ref} className={cn('relative min-h-screen flex items-center', className)} {...props}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
