// react
import { Fragment } from "react";
// components
import { Grid, GridItem } from "@components/common/Grid";
import { ColumnFlex } from "@components/common/FlexBox";
import { RootStyle, CompanyWorkDate, CompanyTitle, ProjectTitle, TaskList, Task, Typography } from "@/pages/career/page.styles";

const careerConfig = [
    {
        company: "Jarasoft, Frontend developer",
        works: [
            {
                title: "블러미 관리자용 웹 페이지 개발",
                details: [
                    "관리자 페이지 기획 및 전체 페이지 개발",
                    "Typescript 도입 제안 및 환경 구성",
                    "Jest 기반 테스트 코드 작성",
                    "ESLint v9과 Stylistic를 활용한 코드 스타일 구성",
                    "Material-UI에서 Emotion으로 변경 후 디자인 시스템 구축",
                ],
                date: "2023년 12월 ~ 2024년 2월"
            },
            {
                title: "블러미 이미지 & 영상 비식별화 웹 페이지 개발",
                details: [
                    "Next.js 13 신규 기능과 12 이전 버전과의 변경점에 대한 세미나 진행 및 발표",
                    "ESLint 및 Prettier 도입 제안 및 환경 구성",
                    "모노레포 제안 및 개발 환경 세팅 참여",
                    "i18next 라이브러리를 활용한 다국어 페이지 구성",
                    "AWS Amplify와 Middleware를 활용한 redirect, rewrite 환경 구성",
                    "SSG 및 ISR 방식을 활용한 CMS 환경 설계",
                    "CMS Strapi 공용 컴포넌트 구현",
                    "AWS Lightsail을 활용한 Ghost 환경 구성 및 개발",
                    "AWS Cognito와 AWS API Gateway의 Token scope 인증 방식 연동",
                    "NextAuth와 AWS Cognito를 활용한 사용자 인증 구현",
                    "언어 별 동적 meta, canonical, alternates, open graph 등을 포함한 SEO 구성",
                    "framer-motion을 활용한 인터랙티브 CMS 컴포넌트 구현",
                    "EventListener를 활용한 Intercom 서비스 Lazy Load 방식 구현",
                    "Recoil Loadable을 활용한 비동기 처리와 First Suspense, Smooth Update 방식의 hook 구현",
                    "워크스페이스 페이지 및 인피니티 스크롤 구현",
                    "계정 설정, 결제/크레딧 사용 내역 구현",
                    "Frontend와 AWS Cognito의 전반적인 흐름을 시퀀스 다이어그램으로 작성하여 사내 문서화"
                ],
                date: "2023년 4월 ~ 진행 중"
            },
            {
                title: "RTSP 를 활용한 라이브 스트림 비식별화 서비스 개발",
                details: [
                    "Frontend 구조 설계 및 UI/UX 구현",
                    "로그인, 대시보드, 비식별 스트림 목록/관리, 할당된 네트워크 조회/설정, 서비스 로그 조회 페이지 및 기능 구현",
                    "WebSocket 기반의 RTSP 스트림 미리보기 기능 구현",
                    "카메라 및 비식별 스트림 CRUD 구현",
                    "Express 기반의 서버 구조 설계",
                    "Session 및 JWT 인증 방식 관련 세미나 진행 및 발표",
                    "Video Stream Manager 및 Config Service 통신을 위한 D-Bus(SystemBus) API 설계 및 구현",
                    "Jetson Nano Jtop Monitoring Service API 설계 및 구현",
                    "RTSP Relay Server를 활용한 스트림 처리 기능 구현",
                    "patch-package 라이브러리를 사용하여 RTSP 라이브러리 내부 코드 수정",
                    "개발 중간, 완료 보고서 작성",
                ],
                date: "2023년 1월 ~ 2023년 9월",
            },
            {
                title: "한전 Ai-Ev & GS엠비즈 법인 전기차 관리를 위한 관리자용 웹 페이지 개발 (외주)",
                details: [
                    "로그인, 대시보드, 사용자 조회, 차량 상태 및 배터리 상태별 목록, 차량 등록/상세, 단말기 관리/등록, 데이터 누락 보고 등 페이지 및 기능 구현",
                    "서버로부터 응답된 JWT 토큰을 활용한 사용자 인증 구현",
                    "차량 단말기 엑셀 파일 업로드 및 현재 단말기 정보 엑셀 다운로드 기능 구현",
                    "Google Maps를 활용하여 차량의 현재 위치 표시 및 연료 변화에 따른 마커 동적 생성 기능 구현",
                    "Google Geocode API를 활용하여 대용량 위도·경도 데이터 주소 변환 기능 구현",
                    "테이블 컴포넌트 및 페이지네이션 hook을 구현하여 전체 페이지에 적용하고 작업 시간을 단축",
                    "yup와 react-hook-form 라이브러리를 사용하여 form validation 컨트롤러 컴포넌트 구현",
                    "개발 완료 보고서 작성"
                ],
                date: "2022년 5월 ~ 2022년 12월"
            }
        ],
        date: "2021년 6월 ~ now"
    },
    {
        company: "Innoventor, Service planner",
        works: [
            {
                title: "자사 서비스 및 아프리카TV 멀티 버스 상품 구매 웹 페이지 기획",
                date: "2021년 4월 ~ 2021년 5월"
            }
        ],
        date: "2021년 4월 ~ 2021년 5월",
    },
];

export default function CareerPage() {
    return (
        <RootStyle>
            <ColumnFlex
                gap={10}
            >
                <h1>
                    경력
                </h1>
                
                <Grid
                    rowGap={40}
                >
                    {careerConfig.map(({ company, works, date }) => (
                        <Fragment
                            key={company}
                        >
                            <GridItem
                                column={6}
                            >
                                <ColumnFlex
                                    gap={10}
                                >
                                    <CompanyTitle>
                                        {company}
                                    </CompanyTitle>

                                    <CompanyWorkDate>
                                        {date}
                                    </CompanyWorkDate>
                                </ColumnFlex>
                            </GridItem>

                            <GridItem
                                column={6}
                            >
                                <ColumnFlex
                                    gap={10}
                                >
                                    
                                    {works.map(({ title, details }) => (
                                        <ColumnFlex
                                            key={title}
                                        >
                                            <ProjectTitle>
                                                {title}
                                            </ProjectTitle>
                                            
                                            {details && (
                                                <TaskList>
                                                    {details.map((text) => (
                                                        <Task>
                                                            <Typography>
                                                                {text}
                                                            </Typography>
                                                        </Task>
                                                    ))}
                                                </TaskList>
                                            )}
                                        </ColumnFlex>
                                    ))}
                                </ColumnFlex>
                            </GridItem>
                        </Fragment>
                    ))}
                </Grid>
            </ColumnFlex>
        </RootStyle>
    )
}