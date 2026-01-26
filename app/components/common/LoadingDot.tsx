import { cn } from '@/lib/tailwind';

import { RowFlex } from '../base';

const DOT_CONFIG = [
  { color: 'bg-indigo-200', delay: '-0.3s' },
  { color: 'bg-indigo-400', delay: '-0.15s' },
  { color: 'bg-indigo-600', delay: '0s' },
] as const;

interface LoadingDotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
} as const;

export default function LoadingDot({ className, size = 'sm' }: LoadingDotProps) {
  return (
    <RowFlex align={'center'} justify={'center'} className={cn('space-x-2', className)}>
      {DOT_CONFIG.map(({ color, delay }, idx) => (
        <div
          key={idx}
          className={cn(color, SIZE_MAP[size], 'rounded-full animate-bounce')}
          style={{ animationDelay: delay }}
        />
      ))}
    </RowFlex>
  );
}
