'use client';

import { m } from 'motion/react';
import { Container, ColumnFlex, Typography } from '@/components/base';
import { fadeInUp } from '@/constants/animations';
import HeroCTA from './HeroCTA';
import HeroScrollDownIndicator from './HeroScrollDownIndicator';
import HeroBackgroundOverlay from './HeroBackgroundOverlay';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <HeroBackgroundOverlay />
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

          <HeroCTA />
        </ColumnFlex>
      </Container>

      <HeroScrollDownIndicator />
    </section>
  );
}
