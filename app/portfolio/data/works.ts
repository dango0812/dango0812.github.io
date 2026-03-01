import type { CompanyWork } from '@/types/portfolio';

/**

•
✏️ 주요 프로젝트 / 작업물

•
회사 단위로 프로젝트를 관리합니다.

•
새로운 회사/프로젝트를 추가하려면 배열에 새 항목을 추가하세요.
*/
export const works: CompanyWork[] = [
  {
    company: '자라소프트',
    projects: [
      {
        title: '디자인 시스템',
        period: '2022 - 2025',
        descriptions: [
          'pnpm workspace 기반 모노레포 환경 구축',
          'Tailwind CSS & Storybook 기반 11개 공용 UI 컴포넌트 설계 및 구현 (컴포넌트 재사용률 30% → 75% 개선) [1] [2]',
          'Compound Component, Provider 패턴 적용으로 확장성과 유지보수성 확보',
          'SVG 아이콘 123종 트리 쉐이킹 분석 및 번들 최적화 검증',
        ],
        images: [
          { src: '/assets/design-style.png', alt: '디자인 규칙 정의', caption: '디자인 시스템 문서화 내용 일부' },
          { src: '/assets/storybook.png', alt: '스토리북', caption: '스토리북 컴포넌트 문서화 화면' },
        ],
      },
      {
        title: '협업 환경 구축',
        period: '2022 - 2025',
        descriptions: [
          'TypeScript, ESLint, Prettier, Husky, lint-staged 도입으로 생산성 향상 및 코드 일관성 확보',
          '서비스 운영팀의 자율성 확보를 위한 Headless CMS Ghost, Strapi 환경 구축 및 전용 컴포넌트 구현 [1]',
        ],
        images: [
          {
            src: '/assets/design-style2.png',
            alt: '운영팀을 위한 CMS 공용 컴포넌트 개발',
            caption: '운영팀을 위한 CMS 공용 컴포넌트 개발',
          },
        ],
      },
      {
        title: '대시보드 상태 관리',
        period: '2022 - 2025',
        descriptions: [
          '업로드 파일의 진행 상태·완료·에러·플랜 업그레이드 유도를 위한 상태 보드 구현 [1] [4]',
          '업로드 파일의 플랜별 파일 크기·해상도·동시 업로드 수 제한 정책을 로직에 통합 [2]',
          '업로드 상태보드를 portal로 분리하여 레이어 충돌을 방지하고, 컴포넌트 단위 메모이제이션으로 렌더링 범위 최소화',
          '업로드 파일 상태 추적 시스템 구성 (업로드 → 트랜스코딩 → AI 분석 → 편집) [3]',
          'Recoil Loadable 기반 비동기 상태 관리 Hook 개발 및 스켈레톤 로딩 컴포넌트 적용으로 사용자 경험(UX) 개선',
        ],
        images: [
          {
            src: '/assets/upload-file.png',
            alt: '대시보드 상태보드 - 업로드',
            caption: '대시보드 상태보드 - 업로드',
          },
          {
            src: '/assets/upload-file-plan.png',
            alt: '대시보드 상태보드 - 플랜',
            caption: '대시보드 상태보드 - 플랜',
          },
          {
            src: '/assets/upload-file-tracking.png',
            alt: '업로드 파일 상태 추적',
            caption: '업로드 파일 상태 추적',
          },
          {
            src: '/assets/upload-file-completed.png',
            alt: '대시보드 상태보드 - 완료',
            caption: '대시보드 상태보드 - 완료',
          },
        ],
      },
      {
        title: '대시보드 렌더링 최적화',
        period: '2022 - 2025',
        descriptions: [
          'TanStack Virtual 기반 리스트를 도입하고 화면에 보이는 영역만 DOM에 유지하는 렌더링 구조 설계 [1] [2]',
          'IntersectionObserver와 커서 기반 무한 스크롤을 결합해 네트워크 요청 시점을 제어하고, resize throttle과 overscan 전략으로 레이아웃 재계산 비용과 스크롤 경계 공백 문제 최소화 [3]',
          '업로드 상태보드 가상 리스트와 동적 높이 보정 로직을 적용해 에러 확장 상황에서도 레이아웃 안정성 유지',
          '결과적으로 1,000개 이상 데이터 환경에서 프레임 드랍 없이 스크롤 유지, 렌더링 성능 70% 개선 및 메모리 사용량 50% 감소',
        ],
        images: [
          {
            src: '/assets/tanstack.png',
            alt: '대시보드 TanStack Virtual 기반 리스트 가상화',
            caption: '대시보드 TanStack Virtual 기반 리스트 가상화',
          },
          {
            src: '/assets/tanstack-169-11.png',
            alt: '대시보드 TanStack Virtual 가상 리스트 (16:9, 1:1 등의 동적 비율 계산)',
            caption: '대시보드 TanStack Virtual 가상 리스트 (16:9, 1:1 등의 동적 비율 계산)',
          },
          {
            src: '/assets/intersection-observer.png',
            alt: '대시보드 무한 스크롤',
            caption: '대시보드 무한 스크롤',
          },
        ],
      },
      {
        title: '스튜디오 페이지 개발',
        period: '2023 - 2025',
        descriptions: [
          '웹 성능 측정 도구 GTmetrix 기반 테스트 결과, 글로벌 환경에서도 초기 로딩 3초 이내 유지',
          '사내 WASM 모듈을 Recoil과 연동하여 고성능 모자이크 처리 지원 (전체 화면 블러, AI 자동 인식(Inference ON/OFF), 자동 블러 적용 방식, 블러 효과, 대상/커스텀 블러 목록) 개발 및 유지보수 [1]',
          'LocalStorage와 서버 이중 저장 구조로 초기 접근 속도 개선 및 API 리소스 절감 [2]',
          'BottomSheet 외부/내부 콘텐츠 스크롤 영역의 제스처 트러블슈팅 문제 해결하여 복잡한 터치 이벤트 안정화, 네이티브 앱 수준의 조작감 제공 [3]',
          '비회원 사용자 업로드 프로세스 설계 및 결제/플랜 업그레이드 유도 로직 구현 [4]',
          '데스크탑/모바일로 분리되어 관리되던 코드 리팩토링 중복 코드 감소 및 유지보수 향상',
        ],
        images: [
          {
            src: '/assets/studio.png',
            alt: '스튜디오 페이지 - 기본 기능',
            caption: '스튜디오 페이지 - 기본 기능',
          },
          {
            src: '/assets/localstorage-data.png',
            alt: 'LocalStorage와 서버 이중 저장 구조',
            caption: 'LocalStorage와 서버 이중 저장 구조',
          },
          {
            src: '/assets/bottomsheet.png',
            alt: 'BottomSheet 네이티브 앱 수준의 조작감 제공',
            caption: 'BottomSheet 네이티브 앱 수준의 조작감 제공',
          },
          {
            src: '/assets/unauthorized.png',
            alt: '비회원 사용자 업로드 프로세스',
            caption: '비회원 사용자 업로드 프로세스',
          },
        ],
      },
      {
        title: '플랫폼 아키텍처 고도화',
        period: '2023 - 2024',
        descriptions: [
          'Next.js Pages Router → App Router 전환 주도, 사내 세미나를 통한 러닝 커브 감소 [1] [2]',
          '시맨틱 구조 개선, 메타 태그 및 Sitemap 캐싱 전략 정비, Core Web Vitals 기반 성능 모니터링 체계 운영',
          '초기 렌더링 속도 개선(FCP 3.2초 → 1.9초), 번들 크기 30% 감소',
          'Error Boundary를 서비스 영역 단위로 세분화해 API 단위 장애가 전체 화면 Fallback으로 확산되지 않도록 격리',
          'i18n 구조 설계 및 Middleware 를 활용한 글로벌 서비스 환경과 SEO 관점에서 흐름 설계 [관련 아티클](https://dev.to/dango0812/how-to-handle-a-language-less-main-domain-with-seo-considerations-in-a-nextjs-i18next-environment-2e5j)',
        ],
        images: [
          {
            src: '/assets/nextjs-1.png',
            alt: 'Next.js App Router 세미나 내용 일부',
            caption: 'Next.js App Router 세미나 내용 일부',
          },
          {
            src: '/assets/nextjs-2.png',
            alt: 'Next.js App Router 세미나 내용 일부',
            caption: 'Next.js App Router 세미나 내용 일부',
          },
        ],
      },
      {
        title: '사용자 도메인 설계',
        period: '2022 - 2024',
        descriptions: [
          '로그인·회원가입·이메일 인증·비밀번호 재설정 등 사용자 인증 전담하여 페이지 구현 [1] [2] [3]',
          'NextAuth & AWS Cognito 기반 이메일/소셜 로그인 사용자 플로우 구현 [관련 아티클](https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6)',
          'JWT 토큰 자동 갱신 및 인증 상태 관리 구조 설계 (MAU 9만 명 규모의 환경에서 안정적으로 서비스 동작)',
          'UTM 추적 및 Mixpanel, GTM 연동으로 마케팅 데이터 수집 체계 통합',
        ],
        images: [
          {
            src: '/assets/sign-in.png',
            alt: '로그인 페이지',
            caption: '로그인 페이지',
          },
          {
            src: '/assets/sign-up.png',
            alt: '회원가입 페이지',
            caption: '회원가입 페이지',
          },
          {
            src: '/assets/forgot-password.png',
            alt: '비밀번호 재설정 페이지',
            caption: '비밀번호 재설정 페이지',
          },
        ],
      },
      {
        title: '운영 도구 개발',
        period: '2023 - 2025',
        descriptions: [
          'Headless CMS 기반 Strapi 구조 설계 및 운영/관리',
          'AWS Lightsail 기반 Ghost Framework 운영 환경 구성 및 운영/관리',
          'AWS Lightsail Ghost 인스턴스와 AWS Amplify의 Reverse Proxy 환경 구성',
          '랜딩 페이지 수정 기간 1주 → 1일 단축, 운영 개입 시간 월 40시간 → 2시간 내 감소',
        ],
        images: [],
      },
    ],
  },
];
