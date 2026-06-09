import { type RefObject, useEffect, useRef } from 'react';
import { ParticleText, type ParticleTextOptions } from 'canvas-text-particle';

import { useResizeObserver } from './useResizeObserver';

/**
 * canvas-text-particle 라이브러리 관리를 위한 커스텀 훅
 * @see https://github.com/dango0812/canvas-text-particle
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
    const { text, color, fontSize = 12, spread = 0.9 } = optionsRef.current;

    particleRef.current?.destroy();
    canvas.width = width;
    canvas.height = height;

    particleRef.current = new ParticleText(canvas, {
      text,
      fontSize: Math.floor(width / fontSize),
      spread,
      color,
    }).mount();
  });

  useEffect(() => {
    return () => {
      particleRef.current?.destroy();
    };
  }, []);
}
