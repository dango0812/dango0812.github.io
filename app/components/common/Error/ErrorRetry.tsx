import Image from 'next/image';

import { Button, ColumnFlex, Typography } from '@/components/base';

interface ErrorRetryProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorRetry({ error, onRetry }: ErrorRetryProps) {
  return (
    <ColumnFlex align="center" justify="center" className="gap-2.5 py-10 px-5 text-center">
      <Image src="/assets/block-404.png" alt="block-404.png" width={200} height={140} loading="lazy" />
      <Typography as="span" size={'lg'} weight={600} color="red">
        {error} 정보를 불러오는데 실패했습니다.
      </Typography>
      <Typography weight={400} color="gray" className="whitespace-pre-line">
        {`계속 실패한다면 잠시 후 다시 시도해주세요.\n인터넷 연결 상태가 좋지 않으면 실패할 수 있습니다.`}
      </Typography>

      <Button variant="primary" color="blue" size="md" onClick={onRetry} className="mt-4">
        다시 시도
      </Button>
    </ColumnFlex>
  );
}
