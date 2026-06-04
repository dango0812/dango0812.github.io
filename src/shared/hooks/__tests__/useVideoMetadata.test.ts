import { act, renderHook } from '@testing-library/react';

import { useVideoMetadata } from '@/shared/hooks/useVideoMetadata';

describe('useVideoMetadata', () => {
  it('초기 isReady는 false다', () => {
    const { result } = renderHook(() => useVideoMetadata());

    expect(result.current.isReady).toBe(false);
  });

  it('onLoadedMetadata 호출 시 isReady가 true가 된다', () => {
    const { result } = renderHook(() => useVideoMetadata());

    act(() => {
      result.current.onLoadedMetadata();
    });

    expect(result.current.isReady).toBe(true);
  });

  it('onLoadedMetadata를 여러 번 호출해도 isReady는 true를 유지한다', () => {
    const { result } = renderHook(() => useVideoMetadata());

    act(() => {
      result.current.onLoadedMetadata();
      result.current.onLoadedMetadata();
    });

    expect(result.current.isReady).toBe(true);
  });

  it('videoRef는 초기에 null을 가리킨다', () => {
    const { result } = renderHook(() => useVideoMetadata());

    expect(result.current.videoRef.current).toBeNull();
  });
});
