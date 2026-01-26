import { BookOpen } from 'lucide-react';

import { Badge } from '@/components/base';
import type { Book } from '@/types/profile';
import { formatDate } from '@/utils/date';

import CategoryContent from './CategoryContent';

interface CategoryBookItemProps {
  item: Book;
}

export default function CategoryBookItem({ item }: CategoryBookItemProps) {
  return (
    <CategoryContent
      icon={BookOpen}
      iconStyle="bg-gradient-to-br from-orange-500 to-orange-600"
      title={item.title}
      description={item.author}
      date={formatDate(item.startDate)}
      badge={
        item.state === 'READING' && (
          <Badge color="red" size="sm">
            독서 중
          </Badge>
        )
      }
    />
  );
}
