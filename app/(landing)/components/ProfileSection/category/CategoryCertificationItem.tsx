import { Award } from 'lucide-react';

import type { Certification } from '@/types/profile';
import { formatDate } from '@/utils/date';

import CategoryContent from './CategoryContent';

interface CategoryCertificationItemProps {
  item: Certification;
}

export default function CategoryCertificationItem({ item }: CategoryCertificationItemProps) {
  return (
    <CategoryContent
      icon={Award}
      iconStyle="bg-gradient-to-br from-emerald-500 to-emerald-600"
      title={item.name}
      description={item.issuer}
      date={formatDate(item.passedDate)}
    />
  );
}
