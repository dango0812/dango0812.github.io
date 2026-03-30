'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';

function formatTime(sec: number): string {
  if (!isFinite(sec) || isNaN(sec)) {
    return '00:00:00';
  }
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

interface VideoPlayerProps {
  src: string;
  poster?: string;
  onAspectRatio?: (ar: number) => void;
}

export default function VideoPlayer({ src, poster, onAspectRatio }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPointerOverVideo, setIsPointerOverVideo] = useState(false);
  const [displayTime, setDisplayTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rippleKey, setRippleKey] = useState(0);
  const [rippleActive, setRippleActive] = useState(false);
  // true = 재생하는 방향으로 클릭, false = 정지하는 방향으로 클릭
  const [rippleIsPlay, setRippleIsPlay] = useState(true);
  /** 영상의 자연 가로세로 비율 (videoWidth / videoHeight) */
  const [videoAR, setVideoAR] = useState<number | null>(null);

  // ── RAF-based smooth progress ─────────────────────────────────────
  const startRAF = useCallback(() => {
    const tick = () => {
      const video = videoRef.current;
      if (!video) {
        return;
      }
      setDisplayTime(video.currentTime);
      if (!video.paused && !video.ended) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopRAF = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    // iOS Safari 구형 대응
    video.setAttribute('webkit-playsinline', '');
    // Android WebView(텐센트 X5) 인라인 재생 대응
    video.setAttribute('x5-playsinline', '');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'false');

    const onPlay = () => {
      setIsPlaying(true);
      startRAF();
    };
    const onPause = () => {
      setIsPlaying(false);
      stopRAF();
      setDisplayTime(video.currentTime);
    };
    const onEnded = () => {
      setIsPlaying(false);
      stopRAF();
      setDisplayTime(video.currentTime);
    };
    const onLoadedMetadata = () => {
      setDuration(video.duration);
      if (video.videoWidth && video.videoHeight) {
        const ar = video.videoWidth / video.videoHeight;
        setVideoAR(ar);
        onAspectRatio?.(ar);
      }
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      stopRAF();
    };
  }, [startRAF, stopRAF, onAspectRatio]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // ── Video content area calculation ────────────────────────────────
  /** 16:9 컨테이너 내 실제 영상 픽셀이 표시되는 영역을 계산 */
  const getContentOffset = useCallback((): { x: number; y: number; w: number; h: number } | null => {
    const container = containerRef.current;
    if (!container || videoAR === null) {
      return null;
    }
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const containerAR = cw / ch;

    if (videoAR < containerAR) {
      // 세로 영상 → 좌우 pillarbox
      const w = ch * videoAR;
      return { x: (cw - w) / 2, y: 0, w, h: ch };
    }
    // 가로/정사각 영상 → 상하 letterbox
    const h = cw / videoAR;
    return { x: 0, y: (ch - h) / 2, w: cw, h };
  }, [videoAR]);

  const checkInVideoArea = useCallback(
    (clientX: number, clientY: number): boolean => {
      const container = containerRef.current;
      if (!container) {
        return false;
      }
      if (videoAR === null) {
        return true; // 메타데이터 로드 전 — 전체 영역 허용
      }
      const offset = getContentOffset();
      if (!offset) {
        return true;
      }
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      return x >= offset.x && x <= offset.x + offset.w && y >= offset.y && y <= offset.y + offset.h;
    },
    [videoAR, getContentOffset]
  );

  // ── Interactions ──────────────────────────────────────────────────
  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    const willPlay = video.paused || video.ended;
    setRippleIsPlay(willPlay);
    setRippleKey(k => k + 1);
    setRippleActive(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setRippleActive(false), 520);
    if (willPlay) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsPointerOverVideo(checkInVideoArea(e.clientX, e.clientY));
    },
    [checkInVideoArea]
  );

  const handleMouseLeave = useCallback(() => setIsPointerOverVideo(false), []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!checkInVideoArea(e.clientX, e.clientY)) {
        return;
      }
      togglePlayback();
    },
    [checkInVideoArea, togglePlayback]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePlayback();
      }
    },
    [togglePlayback]
  );

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video || !duration) {
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = ratio * duration;
      setDisplayTime(ratio * duration);
    },
    [duration]
  );

  // ── Derived values ────────────────────────────────────────────────
  const contentOffset = getContentOffset();
  const progress = duration > 0 ? (displayTime / duration) * 100 : 0;
  // 정지 상태: 항상 Play 아이콘 / 재생 중 hover: Pause 아이콘
  const showCenterIcon = !rippleActive && (!isPlaying || isPointerOverVideo);
  const showControls = !isPlaying || isPointerOverVideo;

  return (
    <div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-label={isPlaying ? '일시 정지' : '재생'}
      className="relative w-full h-full overflow-hidden bg-transparent select-none outline-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {/* video — playsInline 으로 iOS 인라인 재생 보장 */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={poster}
        playsInline
        preload="metadata"
        style={{ pointerEvents: 'none' }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* 실제 영상 픽셀 영역에만 오버레이 렌더링 */}
      <div
        className="absolute overflow-hidden"
        style={
          contentOffset
            ? { left: contentOffset.x, top: contentOffset.y, width: contentOffset.w, height: contentOffset.h }
            : { inset: 0 }
        }
      >
        {/* 중앙 아이콘: 정지 시 Play, 재생 중 hover 시 Pause */}
        <AnimatePresence>
          {showCenterIcon && (
            <m.div
              key={isPlaying ? 'icon-pause' : 'icon-play'}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isPointerOverVideo && <div className="absolute inset-0 bg-black/25" />}
              <span
                className={`relative flex h-20 w-20 items-center justify-center rounded-full text-white transition-all duration-200 ${isPointerOverVideo ? 'scale-110 bg-black/55 shadow-2xl backdrop-blur-sm' : 'scale-100 bg-black/40'}`}
              >
                {isPlaying ? (
                  <Pause size={34} fill="currentColor" />
                ) : (
                  <Play size={34} fill="currentColor" className="ml-1" />
                )}
              </span>
            </m.div>
          )}
        </AnimatePresence>

        {/* 클릭 ripple — 가운데 아이콘 펄스 */}
        {rippleActive && (
          <m.div
            key={`icon-${rippleKey}`}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <m.span
              className="flex h-20 w-20 items-center justify-center rounded-full bg-black/40 text-white"
              initial={{ scale: 0.85, opacity: 1 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 0.44, ease: 'easeOut' }}
            >
              {rippleIsPlay ? (
                <Play size={34} fill="currentColor" className="ml-1" />
              ) : (
                <Pause size={34} fill="currentColor" />
              )}
            </m.span>
          </m.div>
        )}

        {/* 하단 컨트롤: 제목 + 진행 바 + 시간 */}
        <AnimatePresence>
          {showControls && (
            <m.div
              key="controls"
              className="absolute bottom-0 left-0 right-0 pb-3 pt-12 px-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* 시간 표시 */}
              <div className="mb-1.5 flex ">
                <span className="tabular-nums text-sm font-medium text-white/90 drop-shadow">
                  {formatTime(displayTime)} / {formatTime(duration)}
                </span>
              </div>
              {/* 진행 바 */}
              <div
                role="slider"
                aria-label="재생 위치"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                className="h-1 w-full cursor-pointer rounded-full bg-white/30 hover:h-2 transition-all duration-100 pointer-events-auto overflow-hidden"
                onClick={e => {
                  e.stopPropagation();
                  handleSeek(e);
                }}
              >
                <div className="h-full rounded-full bg-white" style={{ width: `${progress}%` }} />
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
