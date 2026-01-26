import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind';

type SpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** 반응형 span 설정 */
type ResponsiveSpan = Partial<Record<Breakpoint, SpanValue>>;

/** span prop 타입: 단일 값 또는 반응형 객체 */
type SpanProp = SpanValue | ResponsiveSpan;

/** Tailwind 브레이크포인트 접두사 매핑 */
const BREAKPOINT_PREFIX: Record<Breakpoint, string> = {
  xs: '',
  sm: 'sm:',
  md: 'md:',
  lg: 'lg:',
  xl: 'xl:',
  '2xl': '2xl:',
};

/** span 값에 대한 Tailwind 클래스 */
const SPAN_CLASSES: Record<SpanValue, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  full: 'col-span-full',
};

/**
 * span prop을 Tailwind 클래스 문자열로 변환
 *
 * @param span - 단일 값 또는 반응형 객체
 * @returns Tailwind 클래스 문자열
 *
 * @example
 * getSpanClasses(6) // "col-span-6"
 * getSpanClasses({ xs: 12, md: 6 }) // "col-span-12 md:col-span-6"
 */
function getSpanClasses(span: SpanProp | undefined): string {
  if (span === undefined) {
    return SPAN_CLASSES[1];
  }

  // 단일 값인 경우
  if (typeof span === 'number' || span === 'full') {
    return SPAN_CLASSES[span];
  }

  // 반응형 객체인 경우
  return (Object.keys(span) as Breakpoint[])
    .map(breakpoint => {
      const value = span[breakpoint];
      if (value === undefined) {
        return '';
      }
      const prefix = BREAKPOINT_PREFIX[breakpoint];
      const spanClass = SPAN_CLASSES[value];
      return `${prefix}${spanClass}`;
    })
    .filter(Boolean)
    .join(' ');
}

const gridVariants = cva('grid w-full', {
  variants: {
    /** 컬럼 개수 */
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    },
    /** 컬럼 간격 */
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
    },
    /** 세로 정렬 */
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    cols: 2,
    gap: 4,
    align: 'stretch',
  },
});

interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {}

/**
 * Grid 컨테이너 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {number} props.cols - 컬럼 개수
 * @param {number} props.gap - 간격
 * @param {string} props.align - 세로 정렬 (start, center, end, stretch)
 *
 * @example
 * ```tsx
 * <Grid cols={2} gap={6}>
 *   <Grid.Col>Left</Grid.Col>
 *   <Grid.Col>Right</Grid.Col>
 * </Grid>
 * ```
 */
function Grid({ children, className, cols, gap, align, ...props }: GridProps) {
  return (
    <div className={cn(gridVariants({ cols, gap, align }), className)} {...props}>
      {children}
    </div>
  );
}

interface GridColProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 차지할 컬럼 수 (단일 값 또는 반응형 객체) */
  span?: SpanProp;
}

/**
 * Grid 컬럼 컴포넌트
 *
 * @param {React.ReactNode} props.children - 내부에 렌더링할 자식 요소
 * @param {string} props.className - 추가적인 스타일 클래스 이름
 * @param {SpanProp} props.span - 차지할 컬럼 수 (단일 값 또는 반응형 객체)
 *
 * @example
 * // 단일 값
 * <Grid.Col span={6}>6칸 차지</Grid.Col>
 *
 * @example
 * // 반응형
 * <Grid.Col span={{ xs: 12, md: 6, lg: 4 }}>
 *   모바일: 12칸, 태블릿: 6칸, 데스크탑: 4칸
 * </Grid.Col>
 */
function GridCol({ children, className, span, ...props }: GridColProps) {
  return (
    <div className={cn(getSpanClasses(span), className)} {...props}>
      {children}
    </div>
  );
}

Grid.Col = GridCol;

export { Grid };
