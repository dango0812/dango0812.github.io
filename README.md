# Donggyu

안녕하세요, 프론트엔드 개발자 김동규의 포트폴리오 웹사이트입니다.

🔗 **WebSite:** [https://dango0812.github.io](https://dango0812.github.io)

## 🛠 Tech Stack

### Core

- **Framework**: Next.js v16.1.3 (App Router)
- **Language**: TypeScript

### Styling & Animation

- **Styling**: Tailwind CSS
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React

### State & Data Management

- **Data Fetching**: TanStack Query (React Query) v5
- **HTTP Client**: Axios

### Utilities

- **UI Modal management**: Overlay-Kit
- **Date Handling**: Day.js
- **Package Manager**: pnpm

## 📁 Project Structure

```bash
📦 app
├── 📂 (landing)        # 메인 랜딩 페이지 및 섹션별 컴포넌트
│   ├── 📂 AboutSection
│   ├── 📂 BlogSection
│   ├── 📂 CareerSection
│   ├── 📂 HeroSection
│   └── 📂 ProfileSection
├── 📂 api              # API 관련 로직
├── 📂 components       # 공통 컴포넌트
│   ├── 📂 base         # 기본 UI 요소 (Button, Typography, Container, FlexBox 등)
│   ├── 📂 common       # 비즈니스 로직이 포함된 공통 컴포넌트
│   └── 📂 layouts      # 레이아웃 컴포넌트 (Header, Footer)
├── 📂 constants        # 상수 데이터
├── 📂 hooks            # 커스텀 훅
├── 📂 lib              # 외부 라이브러리 설정 (Axios, Tailwind)
├── 📂 providers        # 전역 Provider (React Query, Motion)
├── 📂 styles           # 전역 스타일
├── 📂 types            # TypeScript 타입 정의
└── 📂 utils            # 유틸리티 함수
```
