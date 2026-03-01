'use client';

import { useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

import { useModalOverlay } from '@/hooks/useModalOverlay';

interface ImageModalProps {
  /** 이미지 소스 경로 */
  src: string;
  /** 이미지 alt 텍스트 */
  alt: string;
  /** 이미지 캡션 */
  caption?: string;
  /** 모달 열림 여부 */
  isOpen: boolean;
  /** 모달 닫기 콜백 */
  onClose: () => void;
}

export default function ImageModal({ src, alt, caption, isOpen, onClose }: ImageModalProps) {
  useModalOverlay(isOpen);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
        >
          {/* 닫기 버튼 */}
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <X size={20} className="text-white" />
          </button>

          {/* 이미지 */}
          <m.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-w-[60vw] max-h-[100dvh]"
          >
            <div className="relative overflow-hidden rounded-2xl bg-transparent flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={1200}
                className="w-auto h-auto max-w-full max-h-[80vh]"
                priority
              />
            </div>

            {/* 캡션 */}
            {caption && (
              <m.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="mt-3 text-center text-sm text-white"
              >
                {caption}
              </m.p>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
