import { GraduationCap } from 'lucide-react';

import { Badge } from '@/components/base';
import type { Education } from '@/types/profile';
import { formatDateRange } from '@/utils/date';

import CategoryContent from './CategoryContent';

interface CategoryEducationItemProps {
  item: Education;
}

export default function CategoryEducationItem({ item }: CategoryEducationItemProps) {
  return (
    <CategoryContent
      icon={GraduationCap}
      iconStyle="bg-gradient-to-br from-blue-500 to-blue-600"
      title={item.school}
      description={item.description}
      date={formatDateRange(item.startYear, item.endYear)}
      badge={
        item.state === 'ATTENDING' && (
          <Badge color="blue" size="sm">
            재학 중
          </Badge>
        )
      }
    />
  );
}
