'use client';

import { memo } from 'react';
import type { MotionValue } from 'motion/react';
import { m, useTransform } from 'motion/react';

import { Typography } from '@/components/base';
import type { CardPosition, IconCardData } from '@/types';

interface MobileCardProps {
  card: IconCardData;
  index: number;
}

const mobileCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

/** 모바일용 카드 (애니메이션 없이 그리드 레이아웃) */
export const MobileCard = memo(function MobileCard({ card, index }: MobileCardProps) {
  const Icon = card.icon;

  return (
    <m.div
      variants={mobileCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-200/50"
    >
      <div
        className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${card.bgColor} ${card.iconColor}`}
      >
        <Icon size={22} />
      </div>
      <Typography as="h3" size="base" weight={600} className="mb-2 text-gray-900">
        {card.title}
      </Typography>
      <Typography as="p" size="sm" color="gray">
        {card.description}
      </Typography>
    </m.div>
  );
});

interface DesktopCardProps {
  card: IconCardData;
  index: number;
  progress: MotionValue<number>;
}

const desktopCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
} as const;

const CARD_POSITIONS: CardPosition[] = [
  { x: -200, y: -90, rotate: -12, zIndex: 3 },
  { x: 200, y: -90, rotate: 12, zIndex: 3 },
  { x: 0, y: 0, rotate: 0, zIndex: 10 },
  { x: -200, y: 90, rotate: -8, zIndex: 2 },
  { x: 200, y: 90, rotate: 8, zIndex: 2 },
] as const;

/** 데스크톱용 카드 (스크롤 스프레드 애니메이션) */
export const DesktopCard = memo(function DesktopCard({ card, index, progress }: DesktopCardProps) {
  const Icon = card.icon;
  const pos = CARD_POSITIONS[index];

  const x = useTransform(progress, [0, 1], [0, pos.x]);
  const y = useTransform(progress, [0, 1], [0, pos.y]);
  const rotate = useTransform(progress, [0, 1], [0, pos.rotate]);

  return (
    <m.div
      variants={desktopCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ x, y, rotate, zIndex: pos.zIndex, position: 'absolute' }}
      whileHover={{ scale: 1.08, zIndex: 20 }}
      className="cursor-pointer"
    >
      <div className="relative w-64 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 transition-shadow duration-300 hover:shadow-2xl">
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.bgColor} ${card.iconColor}`}
        >
          <Icon size={24} />
        </div>
        <Typography as="h3" size="lg" weight={600} className="mb-2 text-gray-900">
          {card.title}
        </Typography>
        <Typography as="p" size="sm" color="gray" className="whitespace-pre-line">
          {card.description}
        </Typography>
      </div>
    </m.div>
  );
});
