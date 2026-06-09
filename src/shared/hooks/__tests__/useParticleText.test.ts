import { act, renderHook } from '@testing-library/react';

import { useParticleText } from '@/shared/hooks/useParticleText';

type MockParticleInstance = {
  destroy: jest.Mock;
  mount: jest.Mock;
};

let mockResizeCallback: ResizeObserverCallback;
const mockObserve = jest.fn();
const mockDisconnect = jest.fn();
const mockParticleInstances: MockParticleInstance[] = [];

const MockResizeObserver = jest.fn().mockImplementation((callback: ResizeObserverCallback) => {
  mockResizeCallback = callback;
  return { observe: mockObserve, disconnect: mockDisconnect };
});

const mockParticleTextConstructor = jest.fn().mockImplementation(() => {
  const instance: MockParticleInstance = {
    destroy: jest.fn(),
    mount: jest.fn(),
  };

  instance.mount.mockReturnValue(instance);
  mockParticleInstances.push(instance);

  return instance;
});

jest.mock('canvas-text-particle', () => ({
  ParticleText: mockParticleTextConstructor,
}));

jest.mock('@/shared/hooks/useResizeObserver', () => ({
  useResizeObserver: (ref: { current: Element | null }, callback: ResizeObserverCallback) => {
    if (!ref.current) {
      return;
    }

    mockResizeCallback = callback;
  },
}));

beforeAll(() => {
  globalThis.ResizeObserver = MockResizeObserver;
});

beforeEach(() => {
  jest.clearAllMocks();
  mockParticleInstances.length = 0;
});

const makeEntry = (width: number, height: number) =>
  ({ contentRect: { width, height } }) as ResizeObserverEntry;

describe('useParticleText', () => {
  it('swallows NotFoundError during cleanup after a resize', () => {
    const canvas = document.createElement('canvas');

    const { unmount } = renderHook(() =>
      useParticleText({ current: canvas }, { text: ['Hello'], color: '#38bdf8' })
    );

    act(() => {
      mockResizeCallback([makeEntry(800, 600)] as unknown as ResizeObserverEntry, {} as ResizeObserver);
    });

    expect(mockParticleTextConstructor).toHaveBeenCalledTimes(1);
    expect(mockParticleInstances).toHaveLength(1);

    mockParticleInstances[0].destroy.mockImplementation(() => {
      throw new DOMException('Not found', 'NotFoundError');
    });

    expect(() => {
      unmount();
    }).not.toThrow();
  });
});
