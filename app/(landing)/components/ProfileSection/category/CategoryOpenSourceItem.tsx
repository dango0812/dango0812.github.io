import { GitPullRequest } from 'lucide-react';

import type { OpenSourceContribution } from '@/types/profile';
import { formatDate } from '@/utils/date';

import CategoryContent from './CategoryContent';

interface CategoryOpenSourceItemProps {
  item: OpenSourceContribution;
}

export default function CategoryOpenSourceItem({ item }: CategoryOpenSourceItemProps) {
  return (
    <CategoryContent
      icon={GitPullRequest}
      iconStyle="bg-gradient-to-br from-gray-700 to-gray-800"
      title={item.title}
      date={formatDate(item.date)}
      link={item.url}
    />
  );
}
