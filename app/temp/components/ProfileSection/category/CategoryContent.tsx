import type { LucideIcon } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { m } from 'motion/react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { ColumnFlex, RowFlex, Typography } from '@/components/base';
import { cn } from '@/lib/tailwind';

export interface CategoryContentProps {
  /** 내부에 렌더링할 자식 요소 */
  children?: ReactNode;
  /** 아이콘 컴포넌트 */
  icon?: LucideIcon;
  /** 아이콘 스타일 */
  iconStyle?: string;
  /** 제목 */
  title: string;
  /** 설명 */
  description?: string;
  /** 날짜 */
  date?: string;
  /** 뱃지 (뱃지있을 경우 date 표시 X) */
  badge?: ReactNode;
  /** 외부 링크 주소 */
  link?: string;
}
interface CategoryContentInnerProps {
  icon?: LucideIcon;
  iconStyle?: string;
  title: string;
  description?: string;
  date?: string;
  badge?: ReactNode;
  link?: string;
  children?: ReactNode;
}

function CategoryContentInner({
  icon: Icon,
  iconStyle,
  title,
  description,
  date,
  badge,
  link,
  children,
}: CategoryContentInnerProps) {
  return (
    <>
      {Icon && (
        <div className={cn('flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center shadow-sm', iconStyle)}>
          <Icon size={16} className="text-white" />
        </div>
      )}

      <ColumnFlex className="flex-1 min-w-0 gap-0.5">
        <RowFlex align="center" className="gap-2">
          <Typography as="span" size="sm" weight={500} className="text-gray-900">
            {title}
          </Typography>
          {link && <ExternalLink size={12} className="text-gray-400 flex-shrink-0" />}
        </RowFlex>

        {description && (
          <Typography as="p" size="xs" className="text-gray-500 w-full">
            {description}
          </Typography>
        )}

        {children}
      </ColumnFlex>

      {badge || (
        <Typography as="span" size="xs" weight={500} className="flex-shrink-0 text-gray-400">
          {date}
        </Typography>
      )}
    </>
  );
}

const BASE_CLASS_NAME =
  'group flex items-center justify-center gap-3.5 py-3 px-2 -mx-2 rounded-lg transition-colors duration-200';

export default function CategoryContent(props: CategoryContentProps) {
  const { link, ...innerProps } = props;

  return (
    <m.div
      variants={{
        hidden: { opacity: 0, x: -16 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.35, ease: 'easeOut' },
        },
      }}
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(BASE_CLASS_NAME, 'cursor-pointer hover:bg-gray-50/80')}
        >
          <CategoryContentInner {...innerProps} link={link} />
        </Link>
      ) : (
        <div className={cn(BASE_CLASS_NAME, 'cursor-default hover:bg-gray-50/80')}>
          <CategoryContentInner {...innerProps} />
        </div>
      )}
    </m.div>
  );
}
