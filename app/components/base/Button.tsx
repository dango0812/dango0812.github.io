import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-3 font-semibold transition-all duration-200 cursor-pointer',
    'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-neutral-400 disabled:opacity-85 disabled:shadow-none',
  ],
  {
    variants: {
      /** 버튼 스타일 */
      variant: {
        primary: 'text-white shadow-lg',
        outline: 'bg-white border shadow-sm hover:bg-gray-50',
      },
      /** 버튼 크기 */
      size: {
        sm: 'py-2.5 px-3.5 text-sm rounded-lg',
        md: 'px-4 py-3 text-base rounded-xl',
        lg: 'px-6 py-3 text-lg rounded-2xl',
      },
      /** 버튼 색상 (compoundVariants에서 조합별로 적용) */
      color: {
        black: '',
        blue: '',
        green: '',
        red: '',
        orange: '',
        gray: '',
      },
    },
    compoundVariants: [
      // Primary Variants
      {
        variant: 'primary',
        color: 'black',
        class: 'bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-800 shadow-neutral-900/25',
      },
      {
        variant: 'primary',
        color: 'blue',
        class: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-700 shadow-blue-500/25',
      },
      {
        variant: 'primary',
        color: 'green',
        class: 'bg-green-600 hover:bg-green-700 active:bg-green-700 shadow-green-500/25',
      },
      {
        variant: 'primary',
        color: 'red',
        class: 'bg-red-600 hover:bg-red-700 active:bg-red-700 shadow-red-500/25',
      },
      {
        variant: 'primary',
        color: 'orange',
        class: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-600 shadow-orange-500/25',
      },
      {
        variant: 'primary',
        color: 'gray',
        class: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-600 shadow-gray-500/25',
      },
      // Outline Variants
      {
        variant: 'outline',
        color: 'black',
        class: 'text-black border-black hover:bg-neutral-100 active:bg-neutral-100',
      },
      {
        variant: 'outline',
        color: 'blue',
        class: 'text-blue-600 border-blue-300 hover:bg-blue-100 active:bg-blue-100',
      },
      {
        variant: 'outline',
        color: 'green',
        class: 'text-green-600 border-green-300 hover:bg-green-100 active:bg-green-100',
      },
      {
        variant: 'outline',
        color: 'red',
        class: 'text-red-600 border-red-300 hover:bg-red-100 active:bg-red-100',
      },
      {
        variant: 'outline',
        color: 'orange',
        class: 'text-orange-600 border-orange-300 hover:bg-orange-100 active:bg-orange-100',
      },
      {
        variant: 'outline',
        color: 'gray',
        class: 'text-gray-900 border-gray-300 hover:bg-gray-100 active:bg-gray-100',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      color: 'blue',
    },
  }
);

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {}

/**
 * Button 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {string} props.variant - 버튼 스타일
 * @param {string} props.size - 버튼 크기
 * @param {string} props.color - 버튼 색상
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" color="gray">
 *   Primary 버튼
 * </Button>
 *
 * <Button variant="outline" size="md">
 *   Outline 버튼
 * </Button>
 *
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, color, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, color }), className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
