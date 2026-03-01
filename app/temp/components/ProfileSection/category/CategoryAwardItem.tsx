import { Trophy } from 'lucide-react';

import type { Award } from '@/types/profile';
import { formatDate } from '@/utils/date';

import CategoryContent from './CategoryContent';

interface CategoryAwardItemProps {
  item: Award;
}

export default function CategoryAwardItem({ item }: CategoryAwardItemProps) {
  return (
    <CategoryContent
      icon={Trophy}
      iconStyle="bg-gradient-to-br from-amber-500 to-amber-600"
      title={item.title}
      description={item.issuer}
      date={formatDate(item.awardedDate)}
    />
  );
}
