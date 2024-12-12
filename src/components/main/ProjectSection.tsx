// emotion
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// components
import MoreLink from "@components/common/MoreLink";
import Container from "@components/common/Container";
import { ColumnFlex, RowFlex } from "@components/common/FlexBox";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";
import { Link, ImageWrapper, Image, ProjectTitle, ProjectDescription } from "@/components/main/ProjectSection.styles";

const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 0px;
`;

const LATEST_PROJECTS = [
    {
        link: "#",
        title: "NextAuth with AWS Cognito Sample",
        description: "NextAuth 와 AWS Cognito 를 사용하여 Email 및 Google 로그인 하는 방법에 대해 sample 코드와 블로그를 작성했어요.",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png",
        date: "2024년 7월 2일 ~ 24년 8월 13일"
    },
    {
        link: "#",
        title: "포트폴리오 웹 페이지",
        description: "뉴트럴 옛날 감성의 페이지 ",
        sourceUrl: "https://static.toss.im/illusts-content/img-iceberg-thumb.png",
        date: "2024년 7월 2일 ~ 24년 8월 13일"
    }
];

export default function ProjectSection() {
    return (
        <RootStyle>
            <Container>
                <AnimationFadeIn time={4}>
                    <ColumnFlex
                        alignItems="flex-start"
                        gap={26}
                    >
                        <h2>
                            프로젝트
                        </h2>

                        <ColumnFlex
                            as="article"
                            alignItems="flex-start"
                            gap={20}
                        >
                            {LATEST_PROJECTS.map((project, index) => (
                                <Link
                                    key={`project-${index}`}
                                    href={project.link}
                                >
                                    <RowFlex
                                        alignItems="flex-start"
                                        justifyContent="flex-start"
                                        gap={20}
                                    >
                                        <ImageWrapper>
                                            <Image
                                                src="https://static.toss.im/illusts-content/img-iceberg-thumb.png"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />
                                        </ImageWrapper>

                                        <ColumnFlex
                                            alignItems="flex-start"
                                            css={css`
                                                width: 100%;
                                            `}
                                            gap={4}
                                        >
                                            <ProjectTitle>
                                                {project.title}
                                            </ProjectTitle>
                                            
                                            <ProjectDescription>
                                                {project.description} 
                                            </ProjectDescription>

                                            <p css={css`
                                                display: flex;
                                                align-items: flex-end;
                                                justify-content: flex-end;
                                                width: 100%;
                                                height: 100%;
                                                padding: 0px;
                                                font-size: 14px;
                                                color: #4B5563;
                                                letter-spacing: 0;
                                            `}>
                                                {project.date}
                                            </p>
                                        </ColumnFlex>
                                    </RowFlex>
                                </Link>
                            ))}
                            
                            <MoreLink
                                href="#"
                                enabledEndDecorator
                            >
                                <p
                                    css={css`
                                        font-size: 14.8px;
                                        padding: 0px;
                                    `}
                                >
                                    모든 프로젝트 보기
                                </p>
                            </MoreLink>
                        </ColumnFlex>
                    </ColumnFlex>
                </AnimationFadeIn>
            </Container>
        </RootStyle>
    )
}