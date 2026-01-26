import { Badge, ColumnFlex, Typography } from '@/components/base';

interface SectionHeaderProps {
  head?: string;
  title: string;
  description: string;
}

export default function SectionHeader({ head, title, description }: SectionHeaderProps) {
  return (
    <ColumnFlex align={'center'} justify={'center'} className="gap-5">
      <Badge color="purple" size="md">
        {head}
      </Badge>

      <ColumnFlex align={'center'} justify={'center'} className="gap-2.5 text-center max-w-md">
        <Typography as="h2" className="text-gray-900">
          {title}
        </Typography>

        <Typography as="p" color="gray" className="whitespace-normal md:whitespace-pre-line">
          {description}
        </Typography>
      </ColumnFlex>
    </ColumnFlex>
  );
}
