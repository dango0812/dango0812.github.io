'use client';

import { m } from 'motion/react';

import { Typography } from '@/components/base';
import { fadeInUp } from '@/constants/animations';

export default function AboutSectionHeader() {
  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      className="mb-12 text-center md:mb-20"
    >
      <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
        핵심 역량
      </span>
      <Typography as="h2" className="mb-4 text-gray-900">
        서비스를 만들어가며 쌓인 경험
      </Typography>
      <Typography as="p" color="gray" className="whitespace-normal md:whitespace-pre-line">
        {`AI 기반 비식별화 서비스 블러미의 초기 기획 단계부터 참여해,
프론트엔드 개발과 배포, 운영까지 전 과정을 경험했습니다.`}
      </Typography>
    </m.div>
  );
}
