'use client';

import { m } from 'motion/react';

import { ColumnFlex, Container, Typography } from '@/components/base';
import { Section } from '@/components/common';
import { fadeInUp } from '@/constants/animations';

import BackgroundOverlay from './BackgroundOverlay';
import HeroCTA from './HeroCTA';
import ScrollDownIndicator from './ScrollDownIndicator';

export default function HeroSection() {
  return (
    <Section>
      <BackgroundOverlay />
      <Container className="relative z-10 py-20 px-5">
        <ColumnFlex align={'center'} className="text-center gap-6">
          <m.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
            <Typography as="h1">김동규</Typography>
          </m.div>

          <m.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
            <Typography as="p" color="gray" align="center" className="whitespace-pre-wrap">
              {`사용자를 위한 따뜻한 경험에 가치를 두고, 작은 불편함도 놓치지 않고 개선합니다.
주어진 업무의 본질을 명확히 파악하고, 기대하는 결과에 정확히 도달하는 것을 중요하게 생각합니다.
단 한 줄의 코드에도 의미를 담아내며, 사용자를 위한 최고의 프론트엔드 개발자가 되고자 합니다.`}
            </Typography>
          </m.div>

          <m.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3}>
            <HeroCTA />
          </m.div>
        </ColumnFlex>
      </Container>
      <ScrollDownIndicator />
    </Section>
  );
}
