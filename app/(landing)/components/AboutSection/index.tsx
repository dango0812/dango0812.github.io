'use client';

import { useRef } from 'react';
import { useScroll, useSpring } from 'motion/react';

import { ColumnFlex, Container } from '@/components/base';
import { For } from '@/components/common';

import { DesktopCard, MobileCard } from './AboutCard';
import AboutSectionHeader from './AboutSectionHeader';
import { ABOUT_CARDS } from './constants';

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 40,
  restDelta: 0.001,
} as const;

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 스크롤 위치에 따른 progress를 계산하여 애니메이션 활용
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-24 md:py-40">
      <Container className="relative z-10 px-5 md:px-0">
        <AboutSectionHeader />

        {/* 모바일: 그리드 레이아웃 */}
        <ColumnFlex className="gap-4 md:hidden">
          <For each={ABOUT_CARDS}>{(card, index) => <MobileCard key={card.title} card={card} index={index} />}</For>
        </ColumnFlex>

        {/* 데스크톱: 스프레드 애니메이션 */}
        <ColumnFlex align={'center'} justify={'center'} className="relative hidden md:flex h-[480px]">
          <For each={ABOUT_CARDS}>
            {(card, index) => <DesktopCard key={card.title} card={card} index={index} progress={smoothProgress} />}
          </For>
        </ColumnFlex>
      </Container>
    </section>
  );
}
