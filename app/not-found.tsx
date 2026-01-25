import Image from 'next/image';
import Link from 'next/link';

import { Button, ColumnFlex, Container, Typography } from './components/base';
import { Section } from './components/common';
import { PATHS } from './constants/routes';

export default function NotFoundPage() {
  return (
    <Section>
      <Container className="relative z-10 py-20 px-5">
        <ColumnFlex align={'center'} className="text-center gap-6">
          <Image src="/assets/block-404.png" alt="block-404.png" width={200} height={140} loading="lazy" />
          <Typography as="h1" size="6xl" color={'blue'}>
            404 Error
          </Typography>
          <Typography as="p" size="lg" color="gray" align="center" className="whitespace-normal md:whitespace-pre-line">
            {`요청하신 페이지를 찾을 수 없습니다.\n입력하신 주소가 정확한지 다시 한번 확인해주세요.`}
          </Typography>

          <Button variant={'primary'} color={'gray'}>
            <Link href={PATHS.HOME}>돌아가기</Link>
          </Button>
        </ColumnFlex>
      </Container>
    </Section>
  );
}
