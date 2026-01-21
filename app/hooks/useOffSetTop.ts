'use client';

import { useScroll, useMotionValueEvent } from 'motion/react';
import { useCallback, useState } from 'react';

interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: React.RefObject<HTMLElement>;
  target?: React.RefObject<HTMLElement>;
}

/**
 * useOffSetTop
 *
 * 스크롤 위치가 상단이면 true, 아니라면 false 반환
 *
 * @param top 스크롤 위치 기준 값 (기본값: 0)
 * @param options 스크롤 옵션 (container, target 등)
 * @returns {boolean} 스크롤 위치가 상단인지 여부
 *
 * @example
 * const isOffsetTop = useOffSetTop();
 *
 * // 특정 오차 범위를 주고 싶을 때 (예: 20px까지는 상단으로 간주)
 * const isOffsetTop = useOffSetTop(20);
 *
 * // 특정 컨테이너를 기준으로 할 때
 * const isOffsetTop = useOffSetTop(0, { container: ref });
 */
export function useOffSetTop(top = 0, options?: UseScrollOptions): boolean {
  const { scrollY } = useScroll(options);
  const [isAtTop, setIsAtTop] = useState(() => scrollY.get() <= top);

  useMotionValueEvent(
    scrollY,
    'change',
    useCallback(
      (scrollHeight: number) => {
        setIsAtTop(scrollHeight <= top);
      },
      [top]
    )
  );

  return isAtTop;
}
