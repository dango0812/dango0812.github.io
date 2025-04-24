# Donggyu

Next.js와 Typescript 기반으로 제작된 포트폴리오 웹 사이트예요.  
간략한 소개와, 역량, 경력, 수상 및 독서 내역, 진행한 프로젝트의 내용을 담았어요.

[<a href="https://dango0812.github.io/" target="_blank">
    🔗 포트폴리오 사이트 방문
</a>](https://dango0812.github.io/)

## ⚙️ 사용 기술

| 분류           | 기술 스택                                 |
|----------------|-------------------------------------------|
| **프레임워크** | Next.js (v15), Typescript                 |
| **스타일링**   | Tailwind CSS (v4), GSAP                   |
| **상태 관리**  | React Query                              |
| **패키지 매니저** | PNPM                                     |
| **코드 스타일링**  | ESLint, Prettier                         |
| **CI/CD**      | GitHub Actions                           |


## 📁 프로젝트 구조

```bash
/
├── .github/workflows
├── app
│   ├── (homepage)
│   ├── career
│   │   ├── [slug]
│   ├── api
│   └── components
├── constants
├── hooks
├── libs
├── styles
├── types
└── utils
```

## ❕참고

- Tailwind css 최신 버전으로 커스텀을 진행했어요.
- ESLint 최신 버전으로 코드 스타일링을 진행했어요.
- 경력 상세 페이지는 Dynamic Routes 구조로 설계했어요.
- GitHub Pages 에 배포하기 위해 정적 내보내기 방식으로 빌드돼요.

- 컴포넌트 구현 스타일은 `components/ui`에서 확인할 수 있어요.  
[<a href="https://github.com/dango0812/dango0812.github.io/tree/main/app/components/ui" target="_blank">
    🔗 Component/ui
</a>](https://github.com/dango0812/dango0812.github.io/tree/main/app/components/ui)

- 코드 스타일은 `HomeTableOfContents`와 `useAnimationFadeUp` 에서 볼 수 있어요.  
[<a href="https://github.com/dango0812/dango0812.github.io/blob/main/app/(homepage)/components/HomeTableOfContents.tsx" target="_blank">
    🔗 HomeTableOfContents
</a>](https://github.com/dango0812/dango0812.github.io/blob/main/app/(homepage)/components/HomeTableOfContents.tsx)  
[<a href="https://github.com/dango0812/dango0812.github.io/blob/main/app/hooks/useAnimationFadeUp.ts" target="_blank">
    🔗 useAnimationFadeUp
</a>](https://github.com/dango0812/dango0812.github.io/blob/main/app/hooks/useAnimationFadeUp.ts)
