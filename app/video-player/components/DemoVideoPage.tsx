'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import VideoPlayer from '../bottom-sheet/components/VideoPlayer';

interface DemoVideoPageProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function DemoVideoPage({ src, title, subtitle }: DemoVideoPageProps) {
  const [videoAR, setVideoAR] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [showTitle, setShowTitle] = useState<boolean | null>(null);

  // 모든 레이아웃 계산이 끝난 뒤에만 true
  const isReady = videoAR !== null && isDesktop !== null;

  const isPortrait = videoAR !== null && videoAR < 1;

  // showTitle 미디어 쿼리 정리용
  const titleMqlRef = useRef<MediaQueryList | null>(null);
  const titleHandlerRef = useRef<(() => void) | null>(null);

  const handleAspectRatio = useCallback((ar: number) => {
    setVideoAR(ar);
  }, []);

  // 768px 이상이면 데스크탑 모드
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // 제목 표시 여부: 세로 영상 → 1024px+, 가로 영상 → 1440px+
  useEffect(() => {
    // 이전 리스너 정리
    if (titleMqlRef.current && titleHandlerRef.current) {
      titleMqlRef.current.removeEventListener('change', titleHandlerRef.current);
    }

    if (videoAR === null) {
      setShowTitle(null);
      return;
    }
    const breakpoint = videoAR < 1 ? 1024 : 1440;
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setShowTitle(mql.matches);
    update();
    mql.addEventListener('change', update);
    titleMqlRef.current = mql;
    titleHandlerRef.current = update;

    return () => mql.removeEventListener('change', update);
  }, [videoAR]);

  // 컨테이너 스타일 계산
  const containerStyle: React.CSSProperties | undefined =
    isDesktop && videoAR !== null
      ? isPortrait
        ? { aspectRatio: videoAR, maxWidth: 600 }
        : { aspectRatio: videoAR, maxWidth: 1000 }
      : undefined;

  const containerClass =
    !isDesktop || videoAR === null ? 'h-full w-full' : isPortrait ? 'h-full w-auto' : 'h-auto w-full';

  return (
    <main className="relative h-dvh overflow-hidden bg-black md:bg-white">
      {/* 로딩 화면 — 모든 레이아웃 계산 완료 전 표시 */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black transition-opacity duration-500 md:bg-white ${
          isReady ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-neutral-600 border-t-neutral-300 md:border-neutral-300 md:border-t-neutral-600" />
        </div>
      </div>

      {/* 비디오 영역 — 항상 마운트, 로딩 중에는 뒤에서 준비 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={containerClass} style={containerStyle}>
          <VideoPlayer src={src} onAspectRatio={handleAspectRatio} />
        </div>
      </div>

      {/* 타이틀 — 로딩 완료 후에만 렌더링 */}
      {isReady && showTitle && (
        <div className="absolute left-8 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-0.5">
          <span className="text-base uppercase tracking-widest text-gray-400">Demo</span>
          <p className="text-2xl font-semibold leading-snug text-gray-700">
            {title}
            <br />
            {subtitle}
          </p>
        </div>
      )}
    </main>
  );
}
