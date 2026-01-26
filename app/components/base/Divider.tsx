import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

const LEFT_LINE = "before:content-[''] before:flex-1 before:h-px";
const RIGHT_LINE = "after:content-[''] after:flex-1 after:h-px";

const dividerVariants = cva('flex flex-row items-center self-stretch', {
  variants: {
    variant: {
      primary:
        'before:bg-gradient-to-r before:from-indigo-600/0 before:to-indigo-600/20 after:bg-gradient-to-r after:from-indigo-600/20 after:to-indigo-600/0',
      gray: 'before:bg-gradient-to-r before:from-gray-300/0 before:to-gray-300 after:bg-gradient-to-r after:from-gray-300 after:to-gray-300/0',
      light:
        'before:bg-gradient-to-r before:from-gray-200/0 before:to-gray-200 after:bg-gradient-to-r after:from-gray-200 after:to-gray-200/0',
    },
    align: {
      left: RIGHT_LINE,
      center: `${LEFT_LINE} ${RIGHT_LINE}`,
      right: LEFT_LINE,
    },
    hasContent: {
      true: 'gap-4',
      false: 'gap-0',
    },
  },
  defaultVariants: {
    variant: 'gray',
    align: 'center',
    hasContent: false,
  },
});

export interface DividerProps {
  /** 내부에 렌더링할 자식 요소 */
  children?: React.ReactNode;
  /** 추가적인 스타일 클래스 이름 */
  className?: string;
  /** 구분선 스타일 */
  variant?: NonNullable<VariantProps<typeof dividerVariants>['variant']>;
  /** 구분선 정렬 */
  align?: NonNullable<VariantProps<typeof dividerVariants>['align']>;
}

/**
 * Divider 컴포넌트
 *
 * @param {React.ReactNode} props.children -  내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {string} props.variant - 구분선 스타일
 * @param {string} props.align - 구분선 정렬
 *
 * @example
 * <Divider variant="gray" align="left" />
 *
 * <Divider variant="primary" align="center">
 *   OR
 * </Divider>
 */
export function Divider({ children, className, variant = 'gray', align = 'center', ...props }: DividerProps) {
  const hasContent = Boolean(children);

  return (
    <div className={cn(dividerVariants({ variant, align, hasContent }), className)} {...props}>
      {children}
    </div>
  );
}
