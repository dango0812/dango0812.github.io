import { cn } from '@shared/lib/tailwind';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return <div aria-hidden="true" className={cn(`animate-pulse rounded bg-gray-200`, className)} />;
}
