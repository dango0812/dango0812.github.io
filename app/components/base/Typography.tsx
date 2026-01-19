import { createElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@libs/tailwind';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'em' | 'strong' | 'del' | 'ins' | 'pre';

const typographyVariants = cva('antialiased', {
  variants: {
    /** 폰트 크기 */
    size: {
      xs: 'text-xs', // 12px
      sm: 'text-sm', // 14px
      base: 'text-base', // 16px
      lg: 'text-lg', // 18px
      xl: 'text-xl', // 20px
      '2xl': 'text-2xl', // 24px
      '3xl': 'text-3xl', // 30px
      '4xl': 'text-4xl', // 36px
      '5xl': 'text-5xl', // 48px
    },
    /** 폰트 굵기 */
    weight: {
      thin: 'font-thin', // 100
      extralight: 'font-extralight', // 200
      light: 'font-light', // 300
      normal: 'font-normal', // 400
      medium: 'font-medium', // 500
      semibold: 'font-semibold', // 600
      bold: 'font-bold', // 700
      extrabold: 'font-extrabold', // 800
    },
    /** 텍스트 색상 */
    color: {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      black: 'text-gray-900',
      white: 'text-white',
      muted: 'text-gray-400',
      danger: 'text-red-500',
      success: 'text-green-500',
    },
    /** 텍스트 정렬 */
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'black',
  },
});

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  /**
   * 렌더링할 HTML 태그
   * @default 'p'
   */
  as?: TypographyTag;
  /** 한 줄로 표시하고 넘치면 말줄임(...) 처리 */
  truncate?: boolean;
}

/**
 * Typography 컴포넌트
 *
 * @description 일관된 텍스트 스타일링을 위한 컴포넌트
 *
 * @example
 * ```tsx
 * <Typography as="h1" size="4xl" weight="bold">
 *   제목입니다
 * </Typography>
 *
 * <Typography as="p" color="muted" truncate>
 *   긴 텍스트는 말줄임 처리됩니다...
 * </Typography>
 * ```
 */
export function Typography({
  as = 'p',
  children,
  className,
  size,
  weight,
  color,
  align,
  truncate = false,
  ...props
}: TypographyProps) {
  return createElement(
    as,
    {
      className: cn(typographyVariants({ size, weight, color, align }), truncate && 'truncate', className),
      ...props,
    },
    children
  );
}
