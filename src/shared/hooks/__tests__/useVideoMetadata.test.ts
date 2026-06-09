import { renderHook } from '@testing-library/react';

import { useVideoMetadata } from '@/shared/hooks/useVideoMetadata';

describe('useVideoMetadata', () => {
  it('초기 isReady는 false다', () => {
    const { result } = renderHook(() => useVideoMetadata());

    expect(result.current.isReady).toBe(false);
  });

  it('videoRef는 초기에 null을 가리킨다', () => {
    const { result } = renderHook(() => useVideoMetadata());

    expect(result.current.videoRef.current).toBeNull();
  });
});
