import type { Metadata } from 'next';
import { OverlayProvider } from 'overlay-kit';

import { Header } from '@/components/layouts';
import { MotionProvider, QueryProvider } from '@/providers';

import { SITE_URL } from './constants/routes';

import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '김동규 | 프론트엔드 개발자',
  description:
    '프론트엔드 개발자 김동규의 포트폴리오입니다. 팀에 소속되어 함께 일하며 서로의 아이디어와 관점을 공유하며 성장하는 것을 좋아해요. 가독성 좋은 코드를 작성하기 위해 노력해요. 기술적인 측면과 아울러 사용자 시각에서의 UI/UX를 개선하는데 관심이 많아요.',
  authors: {
    name: '김동규',
    url: SITE_URL,
  },
  robots: 'noindex, nofollow',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body>
        <QueryProvider>
          <MotionProvider>
            <Header />
            <OverlayProvider>{children}</OverlayProvider>
          </MotionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
