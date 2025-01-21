// emotion
import { css } from "@emotion/react";

import { RootStyle } from "@/pages/project/page.styles";
// components
import { Card, CardMediaBox, CardMedia, CardTitle, CardContent, CardDate } from "@/pages/project/page.styles";
import { Grid, GridItem } from "@components/common/Grid";
import { ColumnFlex, RowFlex } from "@/components/common/FlexBox";

const projectConfig = [
    {
        link: "#",
        title: "NextAuth with AWS Cognito Sample",
        content: "NextAuth 와 AWS Cognito 를 사용하여 Email 및 Google 로그인 하는 방법에 대해 sample 코드와 블로그를 작성했어요.",
        date: "2024년 7월 2일 ~ 24년 8월 13일",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png"
    },
    {
        link: "#",
        title: "포트폴리오 웹 페이지",
        content: "뉴트럴 옛날 감성의 페이지 ",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png",
        date: "2024년 7월 2일 ~ 24년 8월 13일"
    },
    {
        link: "#",
        title: "NextAuth with AWS Cognito Sample",
        content: "NextAuth 와 AWS Cognito 를 사용하여 Email 및 Google 로그인 하는 방법에 대해 sample 코드와 블로그를 작성했어요.",
        date: "2024년 7월 2일 ~ 24년 8월 13일",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png"
    },
    {
        link: "#",
        title: "포트폴리오 웹 페이지",
        content: "뉴트럴 옛날 감성의 페이지 ",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png",
        date: "2024년 7월 2일 ~ 24년 8월 13일"
    },
    {
        link: "#",
        title: "NextAuth with AWS Cognito Sample",
        content: "NextAuth 와 AWS Cognito 를 사용하여 Email 및 Google 로그인 하는 방법에 대해 sample 코드와 블로그를 작성했어요.",
        date: "2024년 7월 2일 ~ 24년 8월 13일",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png"
    },
    {
        link: "#",
        title: "포트폴리오 웹 페이지",
        content: "뉴트럴 옛날 감성의 페이지 ",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png",
        date: "2024년 7월 2일 ~ 24년 8월 13일"
    }
]

export default function ProjectsPage() {
    return (
        <RootStyle>
            <h1>
                프로젝트
            </h1>

            <Grid
                gap={20}
            >
                {projectConfig.map(({ link, title, content, date, sourceUrl }) => (
                    <GridItem
                        key={title}
                        column={6}
                    >
                        <Card
                            href={link}
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <CardMediaBox>
                                <CardMedia
                                    width={400}
                                    height={320}
                                    src={sourceUrl}
                                    alt="project image"
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
                                    {content}
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