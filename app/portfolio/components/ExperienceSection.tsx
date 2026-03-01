'use client';

import { useMemo } from 'react';
import { Building2, GraduationCap } from 'lucide-react';
import { m } from 'motion/react';
import Image from 'next/image';

import { cn } from '@/lib/tailwind';
import type { CareerItem } from '@/types/portfolio';

import SectionTitle from './SectionTitle';

interface CareerOverviewProps {
  careers: CareerItem[];
}

/** "2022.06" → Date 변환 */
function parseDate(dateStr: string): Date {
  const [year, month] = dateStr.split('.').map(Number);
  return new Date(year, month - 1);
}

/** 기간 한글 포맷 (예: "4년 5개월") */
function formatDuration(startDate: string, endDate?: string): string {
  const start = parseDate(startDate);
  const end = endDate ? parseDate(endDate) : new Date();

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years}년`);
  }
  if (months > 0) {
    parts.push(`${months}개월`);
  }

  return parts.join(' ') || '1개월';
}

/** 기본 색상 팔레트 */
const CATEGORY_BAR_COLORS = {
  company: 'bg-blue-500',
  education: 'bg-amber-400',
} as const;

/** 경력별 색상 결정 (카테고리 기반 통일) */
function resolveColors(careers: CareerItem[]): string[] {
  return careers.map(item => {
    if (item.isGap) {
      return 'bg-gray-300';
    }
    return CATEGORY_BAR_COLORS[item.category];
  });
}

/** 타임라인 범위 계산 */
function useTimelineRange(careers: CareerItem[]) {
  return useMemo(() => {
    if (careers.length === 0) {
      return { startYear: 2024, endYear: 2026, years: [] };
    }

    const allDates = careers.flatMap(item => {
      const dates = [parseDate(item.startDate)];
      if (item.endDate) {
        dates.push(parseDate(item.endDate));
      } else {
        dates.push(new Date());
      }
      return dates;
    });

    const minYear = Math.min(...allDates.map(d => d.getFullYear()));
    const maxYear = Math.max(...allDates.map(d => d.getFullYear())) + 1;

    const years: number[] = [];
    for (let y = minYear; y <= maxYear; y++) {
      years.push(y);
    }

    return { startYear: minYear, endYear: maxYear, years };
  }, [careers]);
}

/** 카테고리별 아이콘 색상 */
const CATEGORY_ICON_COLORS = {
  company: 'text-blue-500',
  education: 'text-amber-500',
} as const;

/** ──── 차트 상단 레전드 ──── */
function ChartLegend() {
  return (
    <div className="flex items-center justify-end gap-4 mb-4">
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <Building2 size={12} className={CATEGORY_ICON_COLORS.company} />
        <span>회사</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <GraduationCap size={12} className={CATEGORY_ICON_COLORS.education} />
        <span>대학교</span>
      </div>
    </div>
  );
}

/** ──── 타임라인 차트 ──── */
function TimelineChart({
  careers,
  colors,
  startYear,
  endYear,
  years,
}: {
  careers: CareerItem[];
  colors: string[];
  startYear: number;
  endYear: number;
  years: number[];
}) {
  const totalMonths = (endYear - startYear) * 12;

  const getLeftPercent = (dateStr: string) => {
    const d = parseDate(dateStr);
    const monthsFromStart = (d.getFullYear() - startYear) * 12 + d.getMonth();
    return (monthsFromStart / totalMonths) * 100;
  };

  const getWidthPercent = (start: string, end?: string) => {
    const s = parseDate(start);
    const e = end ? parseDate(end) : new Date();
    const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
    return Math.max((months / totalMonths) * 100, 1.5);
  };

  return (
    <m.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* 레전드 */}
      <ChartLegend />

      {/* 연도 눈금 라벨 */}
      <div className="relative h-4 mb-1 hidden sm:block">
        {years.map(year => {
          const left = (((year - startYear) * 12) / totalMonths) * 100;
          return (
            <span
              key={year}
              className="absolute text-[11px] font-medium text-gray-400 select-none"
              style={{ left: `${left}%` }}
            >
              {year}
            </span>
          );
        })}
      </div>

      {/* 차트 바 영역 */}
      <div className="relative pt-1">
        {/* 연도 세로 눈금선 */}
        {years.map(year => {
          const left = (((year - startYear) * 12) / totalMonths) * 100;
          return (
            <div
              key={year}
              className="absolute top-0 bottom-0 w-px bg-gray-100/60"
              style={{ left: `${left}%` }}
              aria-hidden="true"
            />
          );
        })}

        {/* 경력/공백 바 */}
        <div className="space-y-1.5 pb-1">
          {careers.map((item, index) => {
            const left = getLeftPercent(item.startDate);
            const width = getWidthPercent(item.startDate, item.endDate);
            const barColor = colors[index];

            return (
              <m.div
                key={`${item.company}-${item.startDate}`}
                className="relative h-[10px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <m.div
                  className={cn('absolute top-0 h-full rounded-full', barColor)}
                  style={{ left: `${left}%`, minWidth: '12px' }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${width}%` }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </m.div>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}

/** 종료일 표시 텍스트 */
function getEndDateLabel(item: CareerItem): string {
  if (item.endDate) {
    return item.endDate;
  }
  if (item.category === 'education') {
    return '재학중';
  }
  return '현재';
}

/** ──── 경력 카드 항목 ──── */
function CareerCard({ item, index }: { item: CareerItem; index: number }) {
  const CategoryIcon = item.category === 'education' ? GraduationCap : Building2;
  const iconColor = CATEGORY_ICON_COLORS[item.category];

  return (
    <m.div
      className="flex items-center gap-2.5 py-2.5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* 카테고리 아이콘 (색상 적용) */}
      <CategoryIcon size={15} className={cn('shrink-0', iconColor)} />

      {/* 로고 */}
      {item.logo && !item.isGap && (
        <div className="shrink-0 w-6 h-6 rounded-md overflow-hidden border border-gray-100 bg-white">
          <Image src={item.logo} alt={item.company} width={24} height={24} className="object-cover w-full h-full" />
        </div>
      )}

      {/* 회사·역할 + 기간 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-900">
          <span className="block sm:inline truncate">
            {item.company}
            {item.role && (
              <>
                <span className="text-gray-300 font-normal mx-1">·</span>
                <span className="font-normal text-gray-500">{item.role}</span>
              </>
            )}
          </span>
        </h3>

        <p className="text-sm text-gray-400 shrink-0">
          <span className="whitespace-nowrap">
            {item.startDate} – {getEndDateLabel(item)}
          </span>
          {!(item.category === 'education' && !item.endDate) && (
            <span className="ml-1 text-gray-400 whitespace-nowrap">
              ({formatDuration(item.startDate, item.endDate)})
            </span>
          )}
        </p>
      </div>
    </m.div>
  );
}

/** ──── 메인 컴포넌트 ──── */
export default function ExperienceSection({ careers }: CareerOverviewProps) {
  const { startYear, endYear, years } = useTimelineRange(careers);
  const colors = useMemo(() => resolveColors(careers), [careers]);

  if (careers.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Timeline</SectionTitle>

        {/* 타임라인 차트 */}
        <TimelineChart careers={careers} colors={colors} startYear={startYear} endYear={endYear} years={years} />

        {/* 상세 목록 */}
        <div>
          {careers.map((item, index) => (
            <CareerCard key={`${item.company}-${item.startDate}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
