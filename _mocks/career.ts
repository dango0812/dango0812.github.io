export const _CareerConfig = [
    {
        slug: "jarasoft",
        title: "자라소프트와 함께 걸어온 길",
        back: "뒤로가기",
        details: [
            {
                year: 2025,
                projects: [
                    {
                        title: "블러미 동영상·이미지 비식별화 웹 페이지 (Milestone 4)",
                        usedTech: ["Next.js (v14)", "Typescript", "Jotai", "Pnpm workspace", "Tailwind css"],
                        tasks: [
                            "[최적화]",
                            "SSR·ISR·서버 컴포넌트를 활용한 페이지 구조 개선 및 렌더링 최적화",
                            "DOM에 그리는 항목이 많아질 경우 발생하는 속도 저하 문제로 가상화 테이블을 활용한 최적화",
                            "Recoil 업데이트 중단, 메모리 누수 등 많은 문제가 확인되어, Jotai 상태 관리 라이브러리로 마이그레이션",
                            "데스크탑·모바일 컴포넌트 분리되어 관리되던 컴포넌트 통합 및 리팩토링",
                            "레거시 코드 개선",
                            "[기능 구현]",
                            "자체 개발된 WASM Native module를 사용한 전체 화면 블러/블러 방식 선택 기능 구현",
                            "비회원 사용자 동영상·이미지 업로드 기능 구현",
                            "비로그인 사용자의 서비스 무료 체험 환경 및 기능 구현",
                            "동적으로 추가·삭제 가능한 Event Banner CMS 컴포넌트 구현",
                            "[성과]",
                            "지속적인 SEO 개선 및 최적화 결과 페이지 클릭 수 향상 (2월 600회 노출 6,775회 → 5월 28일 13,170회, 노출 292,083회 달성)",
                            "페이지 색인 문제로 색인 되지 않은 페이지 13,762회로 크롤링 문제되던 것을 개선하여 780회로 감소 후 크롤링 향상",
                            "코어 웹 바이탈 294개의 느린 페이지를 개선하여 130회로 감소 (7월 30일 기준 742개 페이지 중 612개의 빠른 페이지 달성)",
                        ]
                    }
                ]
            },
            {
                year: 2024,
                projects: [
                    {
                        title: "블러미 동영상·이미지 비식별화 웹 페이지 (Milestone 3)",
                        usedTech: ["Next.js (v13)", "Javascript", "Typescript", "ESLint (v8)", "Prettier", "Pnpm workspace", "Strapi (CMS)", "Recoil", "Next-Auth", "Storybook", "Framer-Motion", "Tailwind css", "Emotion", "AWS-SDK", "AWS Cognito", "AWS Amplify", "AWS Lightsail"],
                        tasks: [
                            "Next.js App Router, 서버 컴포넌트 등 신기능과 렌더링 방식에 대한 사내 발표 진행",

                            "EventListener를 활용한 외부 스크립트 Lazy Load 구현 (FCP → 0.7초, LCP → 0.4초 개선)",
                            "번들 최적화, 시맨틱 태그 및 웹 접근성 개선을 통해 SEO 성능 향상 (클릭 수 10.8K → 13.2K, 노출 수 110K → 138K, 유입률 22% 증가)",

                            "[환경 구성]",
                            "Pnpm Workspace 기반 모노레포 환경 구성",
                            "TypeScript, ESLint, Prettier 기반 개발 환경 구성",

                            "[시스템 구축]",
                            "Strapi 기반 Headless CMS 시스템 구축",
                            "Tailwind CSS와 Storybook을 활용한 디자인 시스템 구축",

                            "[협업 · 형상관리]",
                            "모든 코드에 대한 PR 리뷰 문화 정착",
                            "프론트엔드 코딩 컨벤션 문화 확립",
                            "서비스 구조 및 주요 로직에 대한 사내 문서화",
                        ]
                    }
                ]
            },
            {
                year: 2023,
                projects: [
                    {
                        title: "블러미 동영상·이미지 비식별화 웹 페이지 (Milestone 2)",
                        usedTech: ["Next.js (v12)", "Javascript", "i18next", "ESLint (v8)", "Prettier", "Recoil", "Framer-Motion", "Material UI", "AWS-SDK", "AWS S3", "AWS CloudFront"],
                        tasks: [
                            "Next.js를 활용한 SSG 기반 반응형 웹페이지 구현",
                            "i18next를 활용한 다국어 페이지 환경 구성",
                            "[사용자 인증 · 접근 제어]",
                            "AWS Cognito 기반 사용자 인증 로직 구현",
                            "React Context API를 활용한 JWT 인증 상태 관리 로직 구현",
                            "RefreshToken을 사용한 AccessToken 재발급 기능 구현",
                            "인증 상태에 따른 페이지 접근 제어 및 소셜 로그인 기능 구현",
                            "[기능 구현]",
                            "무한 스크롤(Infinite Scroll) 기능 구현",
                            "Debounce와 AbortController를 활용한 API 호출 최적화",
                            "REST API 연동을 통한 프로젝트 및 결제 내역 조회, 계정 설정, 문의하기 기능 구현",
                            "Yup 및 React Hook Form을 활용한 Form 유효성 검사 및 에러 처리 컴포넌트 개발"
                        ]
                    },
                    {
                        title: "블러미 관리자 웹 페이지",
                        usedTech: ["Next.js (v12)", "Javascript", "Typescript", "ESLint (v8)", "Prettier", "AWS-SDK", "Pnpm"],
                        tasks: [
                            "관리자 페이지 기획",
                            "Next.js를 활용한 SSG 기반 반응형 웹페이지 구현",
                            "TypeScript, ESLint, Prettier 기반 개발 환경 구성",
                            "REST API 연동을 통한 사용자, 비디오 업로드, 쿠폰, 결제한 사용자 조회 기능 구현"
                        ]
                    }
                ]
            },
            {
                year: 2022,
                projects: [
                    {
                        title: "한전 Ai-Ev & GS엠비즈 법인 전기차 관리 및 배터리 분석 관리자용 웹 페이지",
                        usedTech: ["React", "Javascript", "Google Maps", "Google Geocode API", "ApexCharts", "Material UI", "AWS S3"],
                        tasks: [
                            "React를 활용한 반응형 웹페이지 구현",
                            "Google Maps를 활용한 차량 위치 및 연료 변화에 따른 동적 마커 생성 기능 구현",
                            "Google Geocode API를 활용한 대용량 위도·경도 데이터 주소 변환 기능 구현",
                            "차량 단말기 Excel 업로드 및 단말기 정보 다운로드 기능 구현",
                            "관리자 권한 설정 및 페이지별 접근 제어 기능 구현"
                        ]
                    },
                    {
                        title: "지능형 IoT AI 분석 기술을 이용한 무인 차량 관리자용 웹 페이지",
                        usedTech: ["React", "Javascript", "Material UI", "AWS S3"],
                        tasks: [
                            "React를 활용한 반응형 웹페이지 구현",
                            "Swagger 기반의 REST API 연동 및 외부 API 제공업체와 협업 진행",
                            "AWS S3를 활용한 정적 웹 배포 환경 구성"
                        ]
                    },
                    {
                        title: "RTSP 기반 실시간 영상 비식별화 웹 서비스",
                        usedTech: ["React", "Javascript", "Express.js", "Rtsp-Relay", "Broadway-Player", "D-Bus", "Patch-Package", "Material UI", "Python"],
                        tasks: [
                            "[Front-End]",
                            "React를 활용한 반응형 웹페이지 구현",
                            "카메라 및 비식별 스트림 CRUD 기능 구현",
                            "Rtsp-Relay Websocket을 활용한 실시간 RTSP 스트림 미리보기 기능 구현",
                            "[Back-end]",
                            "Express 기반 서버 구조 및 배포 환경 구성",
                            "Rtsp-Relay를 활용한 스트림 API 개발",
                            "Rtsp-Relay WebSocket 내부 코드를 수정하여 로그 기능 구현",
                            "Session 및 JWT 인증 방식에 대한 세미나 진행 및 구현 방향과 근거 설명",
                            "Python 기반 프로세스와 통신을 위한 D-Bus API 구현",
                            "Nvidia Jetson Nano Jtop 모듈 포팅 및 시스템 정보 조회 API 구현",
                        ]
                    },
                ]
            },
            {
                year: 2021,
                projects: [
                    {
                        title: "BLE Beacon을 이용한 동선추적과제",
                        usedTech: ["Raspberry Pi", "Python", "MongoDB"],
                        tasks: [
                            "Raspberry Pi Zero W 초기 환경세팅",
                            "MongoDB Singleton Pattern 적용으로 성능 최적화",
                            "Location 데이터 저장을 위한 MongoDB 구조 설계",
                            "JSON RPC 기반 서버 구축 및 Beacon 데이터 전송 기능 구현"
                        ]
                    },
                    {
                        title: "치아 색상 검출기 DSD Application",
                        usedTech: ["C++", "QT QML"],
                        tasks: [
                            "DSD Application QT QML 기반 GUI 구현",
                            "DSD Application Wi-Fi 연결 및 해제 기능 구현",
                        ]
                    },
                    {
                        title: "전자출입명부 시스템 M-바이오패스",
                        usedTech: ["Android Studio(Java)"],
                        tasks: [
                            "MBioPass Model_S_Screening 발열 증상자 출입 목록 관리 기능 구현",
                            "MBioPass Model_S_KIL 방문객 프로필 등록 및 직원 호출 기능 구현",
                            "MBioPass Application Guide 문서 및 개발 완료보고서 작성"
                        ]
                    }
                ]
            }
        ]
    }
];