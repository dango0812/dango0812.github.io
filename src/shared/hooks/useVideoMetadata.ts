import { useEffect, useRef, useState } from 'react';

export interface VideoPlayer {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isReady: boolean;
}

export function useVideoMetadata(onReady?: () => void): VideoPlayer {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const handleReady = () => {
      setIsReady(true);
      onReadyRef.current?.();
    };

    // video error는 non-bubbling이라 React 합성 이벤트로 전달되지 않으므로 네이티브로 등록
    video.addEventListener('loadedmetadata', handleReady);
    video.addEventListener('error', handleReady);

    return () => {
      video.removeEventListener('loadedmetadata', handleReady);
      video.removeEventListener('error', handleReady);
    };
  }, []);

  return { videoRef, isReady };
}
