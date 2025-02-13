// components
import { RootStyle, Card, CardMediaBox, CardMedia, CardTitle, CardContent, CardDate } from "@/pages/project/page.styles";
import { Grid, GridItem } from "@components/common/Grid";
import { ColumnFlex } from "@/components/common/FlexBox";
// routes
import { paths } from "@constants/paths";

const ASSETS_CDN_URL = import.meta.env.VITE_ASSETS_CDN_URL;
const projectConfig = [
    {
        link: "portfolio",
        title: "포트폴리오 웹 페이지",
        description: "미니멀 감성의 포트폴리오 웹 페이지입니다. 간단한 소개로 시작하여 수상 내역, 독서, 경력, 프로젝트 등의 내용을 담고있습니다.",
        date: "2023년 12월 ~ now",
        featureImage: `${ASSETS_CDN_URL}/v1738817633/portfolio.png`,
        featureImageAlt: "portfolio"
    },
    {
        link: "nextauth-cognito",
        title: "NextAuth With AWS Cognito",
        description: "NextAuth와 AWS Cognito를 사용하여 이메일 및 구글 로그인 구현 방법을 제공하는 프로젝트입니다. 블로그 조회 수 4,000 이상을 달성하였고, 꾸준히 많은 사람들이 방문하고 있습니다.",
        date: "2024년 6월 ~ 2024년 8월",
        featureImage: `${ASSETS_CDN_URL}/v1738817405/next-auth.png`,
        featureImageAlt: "NextAuth with AWS Cognito"
    },
    {
        link: "blur-me",
        title: "블러미 이미지 & 영상 비식별화 웹 페이지",
        description: "AI로 사람, 얼굴, 차량, 번호판을 인식하여 쉽고 빠르게 블러 처리를 해주는 서비스입니다. 별도의 프로그램 설치 없이 웹에서 모든 처리가 가능하며, 글로벌 서비스로 다양한 국가에서 접속하여 사용하고 있습니다.",
        date: "2022년 7월 ~ now",
        featureImage: `${ASSETS_CDN_URL}/v1738817405/blur-me.png`,
        featureImageAlt: "blur-me"
    },
    {
        link: "blur-me-enterprise",
        title: "블러미 엔터프라이즈 웹 페이지",
        description: "블러미 SaaS와 반대로 네트워크를 사용할 수 없는 내부망 환경 또는 보안에 민감한 기업을 위한 서비스 입니다.",
        date: "2024년 9월 ~ now",
        featureImage: `${ASSETS_CDN_URL}/v1738817405/enterprise.png`,
        featureImageAlt: "blur-me-enterprise"
    },
    {
        link: "de-identification",
        title: "RTSP 기반 실시간 영상 비식별화 및 개인정보 보호 솔루션",
        description: "Jetson Xavier NX 기반으로 CCTV 등 공공서비스 영상에서의 개인정보 보호를 위한 실시간 마스킹/언마스킹할 수 있는 관리자용 웹 서비스입니다.",
        date: "2023년 1월 ~ 2023년 9월",
        featureImage: `${ASSETS_CDN_URL}/v1739253101/next-auth-aws-cognito.png`,
        featureImageAlt: "de-identification"
    },
    {
        link: "ai-ev-gs-mbiz",
        title: "한전 & GS엠비즈 법인 전기차 관리를 위한 웹 페이지",
        description: "법인 전기차 운영과 배터리 상태를 효율적으로 관리할 수 있는 관리자용 웹 페이지입니다. 실시간 차량 모니터링, 배터리 분석, 데이터 시각화를 통해 최적의 차량 운영을 지원합니다.",
        date: "2022년 5월 ~ 2022년 12월",
        featureImage: `${ASSETS_CDN_URL}/v1738817405/ai-ev-gs-mbiz.png`,
        featureImageAlt: "ai-ev-gs-mbiz"
    }
];

export default function ProjectsPage() {
    return (
        <RootStyle>
            <h1>
                프로젝트
            </h1>

            <Grid
                gap={20}
            >
                {projectConfig.map(({ link, title, description, date, featureImage, featureImageAlt }) => (
                    <GridItem
                        key={title}
                        column={6}
                    >
                        <Card
                            href={`${paths.project}/${link}`}
                        >
                            <CardMediaBox>
                                <CardMedia
                                    width={400}
                                    height={320}
                                    src={featureImage}
                                    alt={featureImageAlt}
                                    loading="lazy"
                                />
                            </CardMediaBox>
                            
                            <ColumnFlex
                                gap={4}
                            >
                                <CardTitle>
                                    {title}
                                </CardTitle>

                                <CardContent>
                                    {description}
                                </CardContent>

                                <CardDate>
                                    {date}
                                </CardDate>
                            </ColumnFlex>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </RootStyle>
    )
}