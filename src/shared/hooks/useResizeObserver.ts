import { type RefObject, useEffect, useRef } from 'react';

type ResizeCallback = (entry: ResizeObserverEntry) => void;

/**
 * DOM 요소의 크기(너비와 높이) 변화를 감지하고 반응하기 위한 커스텀 훅
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
 *
 * @param ref - 관찰할 DOM 요소에 대한 React ref 객체
 * @param callback - 크기 변화가 감지될 때마다 호출되는 콜백 함수
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * useResizeObserver(containerRef, entry => {
 *   const { width, height } = entry.contentRect;
 *   // 크기 변화에 따른 로직 처리
 * });
 * ```
 */
export function useResizeObserver<T extends Element>(ref: RefObject<T | null>, callback: ResizeCallback): void {
  const callbackRef = useRef<ResizeCallback>(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      callbackRef.current(entry);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);
}
