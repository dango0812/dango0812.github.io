import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@libs/tailwind';

const containerVariants = cva('w-full mx-auto', {
  variants: {
    maxWidth: {
      xs: 'max-w-2xl', // 672px
      sm: 'max-w-3xl', // 768px
      md: 'max-w-4xl', // 896px
      lg: 'max-w-5xl', // 1024px
      xl: 'max-w-7xl', // 1280px
      full: 'max-w-full', // 100%
    },
  },
  defaultVariants: {
    maxWidth: 'md',
  },
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

/**
 * Container 컴포넌트
 * @description 콘텐츠의 최대 너비를 제한하고 화면 중앙에 배치
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
