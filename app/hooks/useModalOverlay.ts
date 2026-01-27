'use client';

import { useEffect } from 'react';

/**
 * useModalOverlay
 *
 * 모달이 열려 있는 동안 body 스크롤 비활성화
 *
 * @param isOpen 모달 열림 여부
 *
 * @example
 * function CareerDetailModal({ isOpen }: { isOpen: boolean }) {
 *   useModalOverlay(isOpen);
 *
 *   return <div>Modal Content</div>;
 * }
 */
export function useModalOverlay(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { style } = document.body;
    const previous = style.overflow;

    style.overflow = 'hidden';

    return () => {
      style.overflow = previous;
    };
  }, [isOpen]);
}
