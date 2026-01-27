'use client';

import { useRef } from 'react';
import { m, useInView } from 'motion/react';

import { useGetCareers } from '@/api/career';
import { Container } from '@/components/base';
import { ErrorRetry, LoadingDot, Section, SectionHeader } from '@/components/common';

import BackgroundOverlay from './BackgroundOverlay';
import CareerSummary from './CareerSummary';

export default function CareerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { data, isLoading, refetch } = useGetCareers();

  return (
    <Section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      <BackgroundOverlay />

      <Container className="relative z-10 px-5">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            head="경력 사항"
            title="회사 경력"
            description="끊임없이 학습하고 성장하며, 소중한 경험과 노하우를 쌓아왔습니다."
          />
        </m.div>
        {(() => {
          if (isLoading) {
            return <LoadingDot />;
          }

          if (Array.isArray(data?.careers) && data.careers.length > 0) {
            return (
              <>
                {data.careers.map(career => (
                  <CareerSummary key={career.company} career={career} />
                ))}
              </>
            );
          }

          return <ErrorRetry error="경력" onRetry={refetch} />;
        })()}
      </Container>
    </Section>
  );
}
