'use client';

import { useCallback } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { m } from 'motion/react';
import { overlay } from 'overlay-kit';

import { ColumnFlex, RowFlex, Typography } from '@/components/base';
import { cn } from '@/lib/tailwind';
import type { Career } from '@/types/career';
import { calculateDuration } from '@/utils/date';

import CareerDetailModal from './CareerDetailModal';

interface CareerCardProps {
  item: Career;
}

export default function CareerCard({ item }: CareerCardProps) {
  const hasDetails = item.details;

  const handleOpenModal = useCallback(() => {
    if (!hasDetails) {
      return;
    }

    overlay.open(({ isOpen, close }) => <CareerDetailModal item={item} isOpen={isOpen} onClose={close} />);
  }, [hasDetails, item]);

  return (
    <m.button
      onClick={handleOpenModal}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
      className="group relative w-full text-left flex-1 mb-10 rounded-2xl appearance-none bg-transparent border-none p-0"
    >
      <div
        className={cn(
          'relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer',
          {
            'cursor-default hover:shadow-sm hover:translate-y-0': !hasDetails,
          }
        )}
      >
        {/** 카드 우측 상단 아이콘 */}
        <div
          className={`absolute -top-3 right-6 w-10 h-10 rounded-xl bg-gray-400 flex items-center justify-center shadow-lg`}
        >
          <Briefcase size={20} className="text-white" />
        </div>

        {/** 타이틀 + 직무 */}
        <ColumnFlex justify={'center'} className="gap-0.5">
          <RowFlex align={'center'}>
            <Typography as="h4" size="2xl" weight={700} className="line-clamp-1">
              {item.company}
            </Typography>

            <Typography size={'sm'} color="gray" weight={500} className="line-clamp-1 pl-1">
              • {calculateDuration(item.startDate, item.endDate)}
            </Typography>
          </RowFlex>

          <Typography as="span" color="blue" weight={600}>
            {item.position}
          </Typography>
        </ColumnFlex>

        <ColumnFlex justify={'center'} className="pt-4 gap-5">
          <Typography color="gray" className="leading-relaxed line-clamp-2">
            {item.description}
          </Typography>

          {Array.isArray(item.summary) && item.summary.length > 0 && (
            <ul className="space-y-2">
              {item.summary.map((text, idx) => (
                <li key={idx}>
                  <Typography
                    as="span"
                    color="gray"
                    size={'sm'}
                    className="flex items-center gap-2.5 relative pl-5 before:absolute before:left-0 before:top-0 before:content-['→'] before:text-indigo-500"
                  >
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>
          )}

          {hasDetails && (
            <RowFlex align={'center'} className="gap-1.5 text-blue-600 mt-auto pt-2">
              <Typography size="sm" weight={500} className="text-inherit">
                자세히 보기
              </Typography>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </RowFlex>
          )}
        </ColumnFlex>
      </div>
    </m.button>
  );
}
