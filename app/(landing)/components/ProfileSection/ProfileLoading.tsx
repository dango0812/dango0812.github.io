import { RowFlex } from '@/components/base';
import { LoadingDot } from '@/components/common';

export default function ProfileLoading() {
  return (
    <RowFlex align={'center'} justify={'center'}>
      <LoadingDot size="md" />
    </RowFlex>
  );
}
