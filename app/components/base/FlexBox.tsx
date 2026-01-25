import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

const flexBoxVariants = cva('flex', {
  variants: {
    /** flex-wrap 속성 */
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      reverse: 'flex-wrap-reverse',
    },
    /** align-items 속성 */
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    /** justify-content 속성 */
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    align: 'stretch',
    justify: 'start',
  },
});

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexBoxVariants> {}

/**
 * 가로 방향 Flex 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {string} props.wrap - flex-wrap 속성 설정
 * @param {string} props.align - align-items 속성 설정
 * @param {string} props.justify - justify-content 속성 설정
 *
 * @example
 * ```tsx
 * <RowFlex justify="between" align="center">
 *   <div>Left</div>
 *   <div>Right</div>
 * </RowFlex>
 * ```
 */
export const RowFlex = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, className, wrap, align, justify, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(flexBoxVariants({ wrap, align, justify }), 'flex-row', className)} {...props}>
        {children}
      </div>
    );
  }
);
RowFlex.displayName = 'RowFlex';

/**
 * 세로 방향 Flex 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {string} props.wrap - flex-wrap 속성 설정
 * @param {string} props.align - align-items 속성 설정
 * @param {string} props.justify - justify-content 속성 설정
 *
 * @example
 * ```tsx
 * <ColumnFlex align="center">
 *   <div>Top</div>
 *   <div>Bottom</div>
 * </ColumnFlex>
 * ```
 */
export const ColumnFlex = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, className, wrap, align, justify, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(flexBoxVariants({ wrap, align, justify }), 'flex-col', className)} {...props}>
        {children}
      </div>
    );
  }
);
ColumnFlex.displayName = 'ColumnFlex';
