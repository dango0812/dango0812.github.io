'use client';

import { useRef } from 'react';
import { useScroll, useSpring } from 'motion/react';
import { m } from 'motion/react';

import { ColumnFlex, Container } from '@/components/base';
import { Section } from '@/components/common';
import { fadeInUp } from '@/constants/animations';

import SectionHeader from '../../../components/common/Section/SectionHeader';
import { DesktopCard, MobileCard } from './AboutCard';
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
    <Section id="about" ref={sectionRef} className="overflow-hidden py-24 md:py-40">
      <Container className="relative z-10 px-5 md:px-0">
        <m.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <SectionHeader
            head="역량"
            title="서비스를 만들며 쌓인 경험"
            description="서비스 개발 전 과정을 경험하며, 다양한 경험을 해왔습니다."
          />

          {/* 모바일: 그리드 레이아웃 */}
          <ColumnFlex className="mt-10 gap-4 md:hidden">
            {ABOUT_CARDS.map((card, index) => (
              <MobileCard key={card.title} card={card} index={index} />
            ))}
          </ColumnFlex>

          {/* 데스크톱: 스프레드 애니메이션 */}
          <ColumnFlex align={'center'} justify={'center'} className="relative mt-10 hidden md:flex h-[480px]">
            {ABOUT_CARDS.map((card, index) => (
              <DesktopCard key={card.title} card={card} index={index} progress={smoothProgress} />
            ))}
          </ColumnFlex>
        </m.div>
      </Container>
    </Section>
  );
}
