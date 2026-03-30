'use client';

import { useCallback, useEffect, useState } from 'react';

import VideoPlayer from '../bottom-sheet/components/VideoPlayer';

interface DemoVideoPageProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function DemoVideoPage({ src, title, subtitle }: DemoVideoPageProps) {
  const [videoAR, setVideoAR] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const isPortrait = videoAR !== null && videoAR < 1;

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
    if (videoAR === null) {
      setShowTitle(false);
      return;
    }
    const breakpoint = videoAR < 1 ? 1024 : 1440;
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setShowTitle(mql.matches);
    update();
    mql.addEventListener('change', update);
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={containerClass} style={containerStyle}>
          <VideoPlayer src={src} onAspectRatio={handleAspectRatio} />
        </div>
      </div>

      {showTitle && (
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
