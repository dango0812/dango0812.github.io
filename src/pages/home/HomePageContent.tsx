import { useEffect, useRef } from 'react';
import { ParticleText } from 'canvas-text-particle';

import { useResizeObserver } from '@/hooks/useResizeObserver';

const PARTICLE_TEXT = ['Frontend developer', 'Donggyu'];

export function HomePageContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleRef = useRef<InstanceType<typeof ParticleText> | null>(null);

  useResizeObserver(canvasRef, entry => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const { width, height } = entry.contentRect;

    // 화면 크기가 변경될 때마다 새로운 인스턴스를 생성하기 전에 기존 인스턴스를 정리하여 메모리 누수 방지
    particleRef?.current?.destroy();
    canvas.width = width;
    canvas.height = height;

    particleRef.current = new ParticleText(canvas, {
      text: PARTICLE_TEXT,
      fontSize: Math.floor(width / 12),
      color: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-400').trim(),
    }).mount();
  });

  useEffect(() => {
    return () => {
      particleRef.current?.destroy();
    };
  }, []);

  return (
    <main className="h-screen w-full">
      <div className="h-full w-full">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    </main>
  );
}
