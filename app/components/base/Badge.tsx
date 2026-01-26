import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

const badgeVariants = cva('inline-flex items-center rounded-full font-semibold', {
  variants: {
    /** 뱃지 색상 */
    color: {
      black: 'bg-black/10 text-white',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-emerald-50 text-emerald-600',
      red: 'bg-red-100 text-red-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-indigo-100 text-indigo-600',
      gray: 'bg-blue-50 text-blue-600',
    },
    /** 뱃지 크기 */
    size: {
      sm: 'px-3 py-1 text-xs',
      md: 'px-4 py-1.5 text-sm',
      lg: 'px-4 py-1.5 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'blue',
  },
});

interface BadgeProps {
  /** 내부에 렌더링할 자식 요소 */
  children: React.ReactNode;
  /** 추가적인 스타일 클래스 이름 */
  className?: string;
  /** 뱃지 색상 */
  color?: NonNullable<VariantProps<typeof badgeVariants>['color']>;
  /** 뱃지 크기 */
  size?: NonNullable<VariantProps<typeof badgeVariants>['size']>;
}
/**
 * Badge 컴포넌트
 *
 * @param {React.ReactNode} props.children -  내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {string} props.color - 뱃지 색상
 * @param {string} props.size - 뱃지 크기
 *
 * @example
 * <Badge color="success" children="완료" />
 * <Badge color="warning" size="xs" label="진행중" />
 */
export function Badge({ children, className, color, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color, size }), className)} {...props}>
      {children}
    </span>
  );
}
