import { type RefObject, useEffect, useRef } from 'react';
import { ParticleText } from 'canvas-text-particle';

import { useResizeObserver } from './useResizeObserver';

interface ParticleTextOptions {
  text: string[];
  color: string;
  fontSizeRatio?: number;
}

/**
 * canvas 요소에 파티클 텍스트 애니메이션을 렌더링하는 커스텀 훅
 *
 * @example
 * ```tsx
 * const canvasRef = useRef<HTMLCanvasElement>(null);
 * useParticleText(canvasRef, { text: ['Hello'], color: '#38bdf8' });
 * ```
 */
export function useParticleText(canvasRef: RefObject<HTMLCanvasElement | null>, options: ParticleTextOptions): void {
  const particleRef = useRef<InstanceType<typeof ParticleText> | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useResizeObserver(canvasRef, entry => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const { width, height } = entry.contentRect;
    const { text, color, fontSizeRatio = 12 } = optionsRef.current;

    particleRef.current?.destroy();
    canvas.width = width;
    canvas.height = height;

    particleRef.current = new ParticleText(canvas, {
      text,
      fontSize: Math.floor(width / fontSizeRatio),
      color,
    }).mount();
  });

  useEffect(() => {
    return () => {
      particleRef.current?.destroy();
    };
  }, []);
}
