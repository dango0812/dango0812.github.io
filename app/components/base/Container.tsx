import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

const containerVariants = cva('w-full mx-auto', {
  variants: {
    /** 최대 너비 설정 */
    maxWidth: {
      /** 672px */
      xs: 'max-w-2xl',
      /** 768px */
      sm: 'max-w-3xl',
      /** 896px */
      md: 'max-w-4xl',
      /** 1024px */
      lg: 'max-w-5xl',
      /** 1280px */
      xl: 'max-w-7xl',
      /** 100% */
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    maxWidth: 'md',
  },
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

/**
 * Container 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {string} props.maxWidth - 최대 너비 설정
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <p>중앙에 배치</p>
 * </Container>
 * ```
 */
export function Container({ children, className, maxWidth, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ maxWidth }), className)} {...props}>
      {children}
    </div>
  );
}
