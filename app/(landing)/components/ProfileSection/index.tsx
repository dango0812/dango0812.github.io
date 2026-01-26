'use client';

import { useRef } from 'react';
import { BookOpen, GitPullRequest, GraduationCap, Shield, Trophy, Users } from 'lucide-react';
import { m, useInView } from 'motion/react';

import { useGetProfile } from '@/api/profile';
import { ColumnFlex, Container, RowFlex } from '@/components/base';
import { ErrorRetry, Section, SectionHeader } from '@/components/common';
import { LoadingDot } from '@/components/common';

import BackgroundOverlay from './BackgroundOverlay';
import {
  CategoryActivityItem,
  CategoryAwardItem,
  CategoryBookItem,
  CategoryCertificationItem,
  CategoryEducationItem,
  CategoryGroup,
  CategoryOpenSourceItem,
} from './category';

export default function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { data, isLoading, refetch } = useGetProfile();

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
          <SectionHeader head="기록" title="자격 & 활동" description="나의 기록을 통해 성장합니다." />
        </m.div>

        {(() => {
          if (isLoading) {
            return <LoadingDot />;
          }

          if (data) {
            return (
              <RowFlex className="flex-col md:flex-row gap-10 md:gap-0">
                {/* Left Column */}
                <ColumnFlex className="flex-1 gap-10 md:pr-6">
                  {/* 학력 */}
                  <CategoryGroup label="학력" icon={GraduationCap} color="blue" count={data.education?.length ?? 0}>
                    {data.education?.map((item, index) => <CategoryEducationItem key={index} item={item} />)}
                  </CategoryGroup>

                  {/* 수상 */}
                  <CategoryGroup label="수상" icon={Trophy} color="orange" count={data.award?.length ?? 0}>
                    {data.award?.map((item, index) => <CategoryAwardItem key={index} item={item} />)}
                  </CategoryGroup>

                  {/* 자격증 */}
                  <CategoryGroup label="자격증" icon={Shield} color="green" count={data.certification?.length ?? 0}>
                    {data.certification?.map((item, index) => <CategoryCertificationItem key={index} item={item} />)}
                  </CategoryGroup>
                </ColumnFlex>

                {/* Right Column */}
                <ColumnFlex className="flex-1 gap-10 md:pl-6">
                  {/* 오픈소스 기여 */}
                  <CategoryGroup
                    label="오픈소스 기여"
                    icon={GitPullRequest}
                    color="gray"
                    count={data.openSourceContributions?.length ?? 0}
                  >
                    {data.openSourceContributions?.map((item, index) => (
                      <CategoryOpenSourceItem key={index} item={item} />
                    ))}
                  </CategoryGroup>

                  {/* 활동 */}
                  <CategoryGroup label="활동" icon={Users} color="purple" count={data.activities?.length ?? 0}>
                    {data.activities?.map((item, index) => <CategoryActivityItem key={index} item={item} />)}
                  </CategoryGroup>

                  {/* 독서 */}
                  <CategoryGroup label="2026 독서" icon={BookOpen} color="red" count={data.book?.length ?? 0}>
                    {data.book?.map((item, index) => <CategoryBookItem key={index} item={item} />)}
                  </CategoryGroup>
                </ColumnFlex>
              </RowFlex>
            );
          }

          return <ErrorRetry error="프로필" onRetry={refetch} />;
        })()}
      </Container>
    </Section>
  );
}
