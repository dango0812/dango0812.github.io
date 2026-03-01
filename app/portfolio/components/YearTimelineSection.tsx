'use client';

import { useMemo } from 'react';
import { BookOpen, Briefcase, Check, Flag, User } from 'lucide-react';
import { m } from 'motion/react';

import { cn } from '@/lib/tailwind';
import type { YearTimelineCategory, YearTimelineItem } from '@/types/portfolio';

import SectionTitle from './SectionTitle';

interface YearTimelineSectionProps {
  year: number;
  items: YearTimelineItem[];
}

/** 월 라벨 */
const MONTH_LABELS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

/** 카테고리별 설정 */
const CATEGORY_CONFIG: Record<YearTimelineCategory, { icon: typeof Briefcase; color: string; bg: string }> = {
  work: { icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-50' },
  study: { icon: BookOpen, color: 'text-amber-500', bg: 'bg-amber-50' },
  personal: { icon: User, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  milestone: { icon: Flag, color: 'text-rose-500', bg: 'bg-rose-50' },
};

/** 카테고리 한글 라벨 */
const CATEGORY_LABELS: Record<YearTimelineCategory, string> = {
  work: '업무',
  study: '학습',
  personal: '개인',
  milestone: '목표',
};

/** 현재 월 기준 진행률 (%) */
function getCurrentMonthProgress(): number {
  const now = new Date();
  return ((now.getMonth() + 1) / 12) * 100;
}

export default function YearTimelineSection({ year, items }: YearTimelineSectionProps) {
  const currentProgress = useMemo(() => getCurrentMonthProgress(), []);
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const isCurrentYear = year === currentYear;

  /** 월별 그룹핑 */
  const groupedByMonth = useMemo(() => {
    const grouped = new Map<number, YearTimelineItem[]>();
    for (const item of items) {
      const existing = grouped.get(item.month) ?? [];
      existing.push(item);
      grouped.set(item.month, existing);
    }
    return grouped;
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>{year} Timeline</SectionTitle>

        {/* 레전드 */}
        <div className="flex items-center justify-end gap-3 mb-6">
          {(['work', 'study', 'personal', 'milestone'] as YearTimelineCategory[]).map(cat => {
            const config = CATEGORY_CONFIG[cat];
            const Icon = config.icon;
            return (
              <div key={cat} className="flex items-center gap-1 text-[11px] text-gray-500">
                <Icon size={11} className={config.color} />
                <span>{CATEGORY_LABELS[cat]}</span>
              </div>
            );
          })}
        </div>

        {/* 진행률 바 (현재 연도만) */}
        {isCurrentYear && (
          <m.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
          >
            {/* 월 라벨 */}
            <div className="flex justify-between mb-1.5">
              {MONTH_LABELS.map((label, i) => (
                <span
                  key={label}
                  className={cn(
                    'text-[10px] font-medium select-none w-[calc(100%/12)] text-center',
                    i + 1 === currentMonth ? 'text-blue-500 font-semibold' : 'text-gray-300'
                  )}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* 프로그레스 바 */}
            <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <m.div
                className="absolute top-0 left-0 h-full bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${currentProgress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              />
            </div>
          </m.div>
        )}

        {/* 타임라인 목록 */}
        <div className="relative">
          {/* 세로 라인 */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gray-100" aria-hidden="true" />

          <div className="space-y-1">
            {MONTH_LABELS.map((label, monthIdx) => {
              const monthItems = groupedByMonth.get(monthIdx + 1);
              if (!monthItems) {
                return null;
              }

              const isPast = isCurrentYear && monthIdx + 1 < currentMonth;
              const isCurrent = isCurrentYear && monthIdx + 1 === currentMonth;

              return (
                <m.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: monthIdx * 0.03 }}
                >
                  {/* 월 헤더 */}
                  <div className="flex items-center gap-3 py-2">
                    {/* 도트 */}
                    <div
                      className={cn(
                        'w-[9px] h-[9px] rounded-full border-2 shrink-0 z-10',
                        isCurrent
                          ? 'border-blue-500 bg-blue-500'
                          : isPast
                            ? 'border-gray-300 bg-gray-300'
                            : 'border-gray-200 bg-white'
                      )}
                      style={{ marginLeft: '14px' }}
                    />
                    <span
                      className={cn(
                        'text-xs font-semibold',
                        isCurrent ? 'text-blue-500' : isPast ? 'text-gray-400' : 'text-gray-500'
                      )}
                    >
                      {label}
                    </span>
                  </div>

                  {/* 해당 월 아이템들 */}
                  <div className="ml-[42px] space-y-2 pb-2">
                    {monthItems.map((item, i) => {
                      const config = CATEGORY_CONFIG[item.category];
                      const Icon = config.icon;

                      return (
                        <div
                          key={`${item.month}-${item.title}-${i}`}
                          className={cn(
                            'flex items-start gap-2.5 px-3 py-2 rounded-lg transition-colors',
                            item.done ? 'bg-gray-50/80' : 'bg-white'
                          )}
                        >
                          {/* 카테고리 아이콘 */}
                          <div className={cn('mt-0.5 p-1 rounded', config.bg)}>
                            <Icon size={12} className={config.color} />
                          </div>

                          {/* 내용 */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  'text-sm font-medium',
                                  item.done ? 'text-gray-400 line-through' : 'text-gray-800'
                                )}
                              >
                                {item.title}
                              </span>
                              {item.done && <Check size={12} className="text-emerald-400 shrink-0" />}
                            </div>
                            {item.description && (
                              <p className={cn('text-xs mt-0.5', item.done ? 'text-gray-300' : 'text-gray-400')}>
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
