'use client';

import dynamic from 'next/dynamic';
import { LazyMotion, m } from 'motion/react';

const loadFeatures = () => import('./features').then(res => res.default);

interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * MotionProvider
 *
 * LazyMotion을 사용하여 Motion 기능을 필요할 때만 로드
 * strict 모드는 m 컴포넌트만 사용하도록 강제하여 번들 크기를 줄임
 */
function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: '100%' }}>{children}</m.div>
    </LazyMotion>
  );
}

export default dynamic(() => Promise.resolve(MotionProvider), { ssr: false });
