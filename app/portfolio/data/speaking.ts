import type { SpeakingItem } from '@/types/portfolio';

/**
 * ✏️ 발표 / 강연
 * 새로운 발표를 추가하려면 배열에 새 항목을 추가하세요.
 *
 * @example
 * {
 *   date: '2024.10',
 *   title: '발표 제목',
 *   url: 'https://youtube.com/...',  // optional
 * }
 */
export const speakingItems: SpeakingItem[] = [
  {
    date: '2026.02',
    title: 'Next.js 오픈소스 기여 경험',
    url: 'https://blog.dong-gyu.com/posts/2026/nextjs/',
    githubUrl: 'https://github.com/vercel/next.js/pull/88985',
  },
  {
    date: '2026.01',
    title: 'Lucide Icons 기여 경험 (첫 오픈소스 기여 경험)',
    url: 'https://blog.dong-gyu.com/posts/2026/lucide-icons/',
    githubUrl: 'https://github.com/lucide-icons/lucide/pull/4024',
  },
  {
    date: '2025.08',
    title: 'TanStack 기반 Virtualized Ratio Grid 기술 아티클',
    url: 'https://dev.to/dango0812/building-a-responsive-virtualized-grid-with-tanstack-virtual-37nn',
  },
  {
    date: '2025.07',
    title: 'Next.js i18next 환경에서 SEO를 고려한 Middleware 환경 설정 아티클',
    url: 'https://dev.to/dango0812/how-to-handle-a-language-less-main-domain-with-seo-considerations-in-a-nextjs-i18next-environment-2e5j',
  },
  {
    date: '2024.01',
    title: 'NextAuth AWS Cognito Google OAuth 구현 방법 아티클 (정보 부족했던 시절, 도움이 되고자 작성)',
    url: 'https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6',
  },
];
