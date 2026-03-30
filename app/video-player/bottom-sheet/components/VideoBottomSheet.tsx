'use client';

import { AnimatePresence, m, useDragControls, useMotionValue, useTransform } from 'motion/react';
import type { PointerEvent } from 'react';
import { createPortal } from 'react-dom';

import { useModalOverlay } from '@/hooks/useModalOverlay';

import VideoPlayer from './VideoPlayer';

export interface VideoItem {
  id: string;
  title: string;
  src: string;
  poster?: string;
  description?: string;
}

interface VideoBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoItem | null;
}

/**
 * VideoBottomSheet
 *
 * - motion drag 로 핸들 영역에서만 드래그 → 동영상 조작과 충돌 없음
 * - 100px 이상 아래로 드래그하면 시트 닫힘
 * - createPortal 로 document.body 에 렌더링 → z-index 안전
 */
export default function VideoBottomSheet({ isOpen, onClose, video }: VideoBottomSheetProps) {
  useModalOverlay(isOpen);

  const dragControls = useDragControls();
  const y = useMotionValue(0);
  // 드래그에 따라 백드롭 opacity 0.6 → 0 으로 변화
  const backdropOpacity = useTransform(y, [0, 300], [0.6, 0]);

  const handleDragEnd = (_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
    // 100px 이상 아래로 드래그하거나 빠른 속도로 내리면 닫기
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  if (typeof window === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && video && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ opacity: backdropOpacity }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black backdrop-blur-sm"
          />

          {/* Bottom Sheet */}
          <m.div
            key={video.id}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0 }}
            dragElastic={{ top: 0.05, bottom: 0.3 }}
            onDragEnd={handleDragEnd}
            style={{ y }}
            className="fixed bottom-0 left-0 right-0 z-[101] bg-white rounded-t-3xl shadow-2xl flex flex-col max-h-[90dvh]"
          >
            {/* 드래그 핸들 영역 */}
            <div
              onPointerDown={(e: PointerEvent<HTMLDivElement>) => dragControls.start(e)}
              className="flex flex-col items-center pt-3 pb-2 cursor-grab active:cursor-grabbing select-none shrink-0"
            >
              <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* 비디오 플레이어 */}
            <div className="px-5 pb-8 overflow-y-auto">
              <VideoPlayer src={video.src} poster={video.poster} />
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
