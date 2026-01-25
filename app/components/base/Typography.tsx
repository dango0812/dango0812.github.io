import { createElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

const typographyVariants = cva('', {
  variants: {
    /** 태그별 기본 스타일 */
    as: {
      /** 48px, 700, 1.25 */
      h1: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
      /** 36px, 700, 1.25 */
      h2: 'text-2xl sm:text-3xl md:text-4xl font-bold leading-tight',
      /** 30px, 600, 1.375 */
      h3: 'text-2xl md:text-3xl font-semibold leading-snug',
      /** 24px, 600, 1.375 */
      h4: 'text-2xl font-semibold leading-snug',
      /** 20px, 500, 1.5 */
      h5: 'text-xl font-medium leading-normal',
      /** 18px, 500, 1.5 */
      h6: 'text-lg font-medium leading-normal',
      /** 16px, 400, 1.625 */
      p: 'text-base font-normal leading-relaxed',
      /** 16px, 400, 1.5 */
      span: 'text-base font-normal leading-normal',
      strong: 'text-base font-semibold leading-normal',
      em: 'text-base font-normal italic leading-normal',
    },
    /** 텍스트 크기 */
    size: {
      /** 12px */
      xs: 'text-xs',
      /** 14px */
      sm: 'text-sm',
      /** 16px */
      base: 'text-base',
      /** 18px */
      lg: 'text-lg',
      /** 20px */
      xl: 'text-xl',
      /** 24px */
      '2xl': 'text-2xl',
      /** 30px */
      '3xl': 'text-3xl',
      /** 36px */
      '4xl': 'text-4xl',
      /** 48px */
      '5xl': 'text-5xl',
      /** 60px */
      '6xl': 'text-6xl',
    },
    /** 텍스트 굵기 */
    weight: {
      /** 100 (thin) */
      100: 'font-thin',
      /** 200 (extra light) */
      200: 'font-extralight',
      /** 300 (light) */
      300: 'font-light',
      /** 400 (normal) */
      400: 'font-normal',
      /** 500 (medium) */
      500: 'font-medium',
      /** 600 (semi bold) */
      600: 'font-semibold',
      /** 700 (bold) */
      700: 'font-bold',
    },
    /** 텍스트 행간 */
    leading: {
      /** 1 */
      none: 'leading-none',
      /** 1.25 */
      tight: 'leading-tight',
      /** 1.375 */
      snug: 'leading-snug',
      /** 1.5 */
      normal: 'leading-normal',
      /** 1.625 */
      relaxed: 'leading-relaxed',
      /** 2 */
      loose: 'leading-loose',
    },
    /** 색상 */
    color: {
      inherit: 'text-inherit',
      black: 'text-neutral-900',
      blue: 'text-blue-600',
      green: 'text-green-600',
      red: 'text-red-600',
      purple: 'text-indigo-600',
      orange: 'text-orange-600',
      gray: 'text-gray-600',
    },
    /** 정렬 */
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    as: 'p',
    color: 'black',
  },
});

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em';

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    Omit<VariantProps<typeof typographyVariants>, 'as'> {
  as?: TypographyTag;
  truncate?: boolean;
}

/**
 * Typography 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 CSS 클래스
 * @param {TypographyTag} [props.as='p'] - 렌더링할 HTML 태그
 * @param {string} props.size - 텍스트 크기
 * @param {string} props.weight - 텍스트 굵기
 * @param {string} props.leading - 텍스트 행간
 * @param {string} props.color - 텍스트 색상
 * @param {string} props.align - 텍스트 정렬
 * @param {boolean} [props.truncate=false] - 텍스트가 넘칠 경우 말줄임표 처리 여부
 *
 * @example
 * // 기본 사용 (h1 → text-5xl font-bold leading-tight 자동)
 * <Typography as="h1">제목</Typography>
 *
 * // size만 오버라이드
 * <Typography as="h1" size="3xl">작은 제목</Typography>
 *
 * // 전체 커스텀
 * <Typography as="p" size="lg" weight="medium" leading="relaxed">
 *   본문 텍스트
 * </Typography>
 */
export function Typography({
  as = 'p',
  size,
  weight,
  leading,
  color,
  align,
  truncate = false,
  className,
  children,
  ...props
}: TypographyProps) {
  return createElement(
    as,
    {
      className: cn(typographyVariants({ as, size, weight, leading, color, align }), truncate && 'truncate', className),
      ...props,
    },
    children
  );
}
