'use client';

import { memo } from 'react';
import type { MotionValue } from 'motion/react';
import { m, useTransform } from 'motion/react';

import { ColumnFlex, RowFlex, Typography } from '@/components/base';
import { cn } from '@/lib/tailwind';
import type { CardPosition, IconCardData } from '@/types';

interface MobileCardProps {
  card: IconCardData;
  index: number;
}

/* 모바일: 그리드 레이아웃 */
export const MobileCard = memo(function MobileCard({ card, index }: MobileCardProps) {
  const Icon = card.icon;

  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-200/50"
    >
      <RowFlex
        align={'center'}
        justify={'center'}
        className={cn('mb-3 h-11 w-11 rounded-xl', card.bgColor, card.iconColor)}
      >
        <Icon size={24} />
      </RowFlex>

      <Typography as="h4" size="lg" weight={600} className="mb-2 text-gray-900">
        {card.title}
      </Typography>
      <Typography as="p" size="sm" color="gray" className="whitespace-pre-line">
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

const CARD_POSITIONS: CardPosition[] = [
  { x: -200, y: -90, rotate: -6, zIndex: 3 },
  { x: 200, y: -90, rotate: 12, zIndex: 3 },
  { x: 0, y: 0, rotate: 0, zIndex: 10 },
  { x: -200, y: 90, rotate: -8, zIndex: 2 },
  { x: 200, y: 90, rotate: 8, zIndex: 2 },
] as const;

/* 데스크톱: 스프레드 애니메이션 */
export const DesktopCard = memo(function DesktopCard({ card, index, progress }: DesktopCardProps) {
  const Icon = card.icon;
  const pos = CARD_POSITIONS[index];

  const x = useTransform(progress, [0, 1], [0, pos.x]);
  const y = useTransform(progress, [0, 1], [0, pos.y]);
  const rotate = useTransform(progress, [0, 1], [0, pos.rotate]);

  return (
    <m.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ x, y, rotate, zIndex: pos.zIndex, position: 'absolute' }}
      whileHover={{ scale: 1.08, zIndex: 20 }}
      className="cursor-pointer"
    >
      <ColumnFlex className="w-64 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 transition-shadow duration-300 hover:shadow-2xl">
        <RowFlex
          align={'center'}
          justify={'center'}
          className={cn('mb-3 h-12 w-12 rounded-xl', card.bgColor, card.iconColor)}
        >
          <Icon size={24} />
        </RowFlex>

        <Typography as="h4" size="lg" weight={600} className="mb-2 text-gray-900">
          {card.title}
        </Typography>
        <Typography as="p" size="sm" color="gray" className="whitespace-pre-line">
          {card.description}
        </Typography>
      </ColumnFlex>
    </m.div>
  );
});
