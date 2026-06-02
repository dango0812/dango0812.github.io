import { renderHook } from '@testing-library/react';

import { useResizeObserver } from '@/hooks/useResizeObserver';

// jsdom은 ResizeObserver를 지원하지 않으므로 mock으로 대체
let capturedCallback: ResizeObserverCallback;
const mockObserve = jest.fn();
const mockDisconnect = jest.fn();

const MockResizeObserver = jest.fn().mockImplementation((callback: ResizeObserverCallback) => {
  capturedCallback = callback;
  return { observe: mockObserve, disconnect: mockDisconnect };
});

beforeAll(() => {
  globalThis.ResizeObserver = MockResizeObserver;
});

beforeEach(() => {
  jest.clearAllMocks();
});

const makeEntry = (width: number, height: number) => ({ contentRect: { width, height } }) as ResizeObserverEntry;

describe('useResizeObserver', () => {
  it('ref.current가 null이면 observe를 호출하지 않는다', () => {
    const ref = { current: null };
    renderHook(() => useResizeObserver(ref, jest.fn()));

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('유효한 요소를 observe한다', () => {
    const el = document.createElement('div');
    const ref = { current: el };
    renderHook(() => useResizeObserver(ref, jest.fn()));

    expect(MockResizeObserver).toHaveBeenCalledTimes(1);
    expect(mockObserve).toHaveBeenCalledWith(el);
  });

  it('크기 변화 시 callback이 ResizeObserverEntry와 함께 호출된다', () => {
    const el = document.createElement('div');
    const callback = jest.fn();
    renderHook(() => useResizeObserver({ current: el }, callback));

    const entry = makeEntry(800, 600);
    capturedCallback([entry], {} as ResizeObserver);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(entry);
  });

  it('unmount 시 disconnect가 호출된다', () => {
    const el = document.createElement('div');
    const { unmount } = renderHook(() => useResizeObserver({ current: el }, jest.fn()));

    unmount();

    expect(mockDisconnect).toHaveBeenCalledTimes(1);
  });

  it('callback이 변경되어도 observer를 재생성하지 않는다', () => {
    const el = document.createElement('div');
    const ref = { current: el }; // 매 렌더마다 새 객체를 만들면 ref가 바뀌어 effect 재실행됨
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { rerender } = renderHook(({ cb }) => useResizeObserver(ref, cb), {
      initialProps: { cb: callback1 },
    });

    rerender({ cb: callback2 });

    // observer는 최초 mount 1회만 생성
    expect(MockResizeObserver).toHaveBeenCalledTimes(1);

    // 최신 callback(callback2)이 호출 됨
    capturedCallback([makeEntry(400, 300)], {} as ResizeObserver);

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalledTimes(1);
  });
});
