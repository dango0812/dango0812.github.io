'use client';

import { m } from 'motion/react';

import type { PortfolioProfile } from '@/types/portfolio';

interface HeroSectionProps {
  profile: PortfolioProfile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="pt-16 md:pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* 이름 */}
          <h1 className="text-4xl font-bold text-gray-900">
            {profile.name}
            {profile.nameEn && <span className="ml-2 text-base font-normal text-gray-400">{profile.nameEn}</span>}
          </h1>

          {/* 소개 */}
          <m.p
            className="mt-6 text-[15px]  text-gray-600 leading-8 whitespace-pre-line"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {profile.bio}
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
