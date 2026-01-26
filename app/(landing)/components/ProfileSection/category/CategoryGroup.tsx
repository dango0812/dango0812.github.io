import type { LucideIcon } from 'lucide-react';
import { m } from 'motion/react';
import type { ReactNode } from 'react';

import { Divider, RowFlex, Typography } from '@/components/base';
import { cn } from '@/lib/tailwind';

type Color = 'black' | 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'gray';

export interface CategoryGroupProps {
  /** 내부에 렌더링할 자식 요소 */
  children: ReactNode;
  /** 카테고리 라벨 */
  label: string;
  /** 카테고리 아이콘 */
  icon: LucideIcon;
  /** 아이템 개수 */
  count: number;
  /** 색상 */
  color: Color;
}

const getColor = (color: Color) => {
  switch (color) {
    case 'black':
      return { text: 'text-black', bg: 'bg-black/10' };
    case 'green':
      return { text: 'text-emerald-600', bg: 'bg-emerald-50' };
    case 'red':
      return { text: 'text-red-600', bg: 'bg-red-50' };
    case 'orange':
      return { text: 'text-orange-600', bg: 'bg-orange-50' };
    case 'purple':
      return { text: 'text-indigo-600', bg: 'bg-indigo-50' };
    case 'gray':
      return { text: 'text-gray-700', bg: 'bg-gray-100' };
    case 'blue':
    default:
      return { text: 'text-blue-600', bg: 'bg-blue-50' };
  }
};

export default function CategoryGroup({ children, label, icon: Icon, count, color }: CategoryGroupProps) {
  if (count === 0) {
    return null;
  }

  const { text: textColor, bg: bgColor } = getColor(color);

  return (
    <m.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      }}
      className="space-y-3 h-auto md:min-h-64"
    >
      {/* Header */}
      <RowFlex align="center" className="gap-2.5">
        <RowFlex align="center" justify="center" className={cn('p-2 rounded-lg shadow-sm', bgColor)}>
          <Icon size={20} className={cn(textColor)} />
        </RowFlex>

        <Typography as="h6" size="base" weight={600} className={cn(textColor)}>
          {label}
        </Typography>

        <Typography as="span" size="xs" weight={500} className={cn('px-2 py-0.5 rounded-full', textColor, bgColor)}>
          {count}
        </Typography>
      </RowFlex>

      <Divider variant="light" />

      {/* Items */}
      <div className="space-y-1">{children}</div>
    </m.div>
  );
}
