import { Users } from 'lucide-react';

import type { Activity } from '@/types/profile';
import { formatDateRange } from '@/utils/date';

import CategoryContent from './CategoryContent';

interface CategoryActivityItemProps {
  item: Activity;
}

export default function CategoryActivityItem({ item }: CategoryActivityItemProps) {
  return (
    <CategoryContent
      icon={Users}
      iconStyle="bg-gradient-to-br from-purple-500 to-purple-600"
      title={item.organization}
      date={formatDateRange(item.startDate, item.endDate)}
    />
  );
}
