import { useRef } from 'react';
import type { Variants } from 'motion/react';
import { m, useInView } from 'motion/react';

import { Badge, RowFlex } from '@/components/base';
import type { Career } from '@/types/career';
import { formatDateRange } from '@/utils/date';

import CareerCard from './CareerCard';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface CareerSummaryProps {
  career: Career;
}

export default function CareerSummary({ career }: CareerSummaryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <m.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
      <RowFlex className="gap-10">
        {/* Desktop 일때 기간 + 타임라인 표시 */}
        <m.div variants={cardVariants} className="flex-col items-center w-28 flex-shrink-0 hidden md:flex">
          <Badge size="sm" color="gray" className="whitespace-nowrap bg-gray-100">
            {formatDateRange(career.startDate, career.endDate, { format: 'YYYY.MM' })}
          </Badge>

          <div className="w-5 h-5 rounded-full bg-gray-300 ring-4 ring-white shadow-lg mt-2.5" />
          <m.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-0.5 bg-gradient-to-b from-gray-200 to-transparent flex-1 mt-2"
          />
        </m.div>

        <CareerCard item={career} />
      </RowFlex>
    </m.div>
  );
}
