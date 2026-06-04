import { useEffect, useRef, useState } from 'react';

export interface VideoPlayer {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isReady: boolean;
  onLoadedMetadata: () => void;
}

/**
 * video 요소의 메타데이터 로딩 완료를 감지하는 커스텀 훅
 *
 * @example
 * ```tsx
 * const { videoRef, isReady, onLoadedMetadata } = useVideoMetadata();
 * <video ref={videoRef} onLoadedMetadata={onLoadedMetadata} src="..." />
 * ```
 */
export function useVideoMetadata(): VideoPlayer {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    // video error는 non-bubbling이라 React 합성 이벤트로 전달되지 않으므로 네이티브로 등록
    const handleError = () => setIsReady(true);
    video.addEventListener('error', handleError);

    // 네트워크 이슈 등으로 아무 이벤트도 오지 않을 경우 폴백
    const timeout = setTimeout(() => setIsReady(true), 5000);

    return () => {
      video.removeEventListener('error', handleError);
      clearTimeout(timeout);
    };
  }, []);

  const onLoadedMetadata = () => setIsReady(true);

  return { videoRef, isReady, onLoadedMetadata };
}
