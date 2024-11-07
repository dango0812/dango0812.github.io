// react
import { lazy } from "react";
// emotion
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// styles
import { TimeLine, TimeLineIconBox, TimeLineIcon } from "@components/main/CareerTimeLineSection.styles";
// components
import Container from "@components/common/Container";
import { RowFlex, ColumnFlex } from "@components/common/FlexBox";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";
// assets
const IconCake = lazy(() => import("@assets/icon/IconCake"));
const IconBriefcase = lazy(() => import("@assets/icon/IconBriefcase"));
const IconAccountSchool = lazy(() => import("@assets/icon/IconAccountSchool"));

const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 0px;
`;

const TIME_LINE_CONFIG = [
    {
        title: "자라소프트에서 프론트엔드 개발자로 근무중이에요.",
        date: "2021년 6월 ~ 현재",
        icon: <IconBriefcase />,
        color: "#4B5563"
    },
    {
        title: "ㅇㅇㅇ에서 기획자로 근무했어요.",
        date: "2022년 5월 ~ 2022년 6월",
        icon: <IconBriefcase />,
        color: "#4B5563"
    },
    {
        title: "수원과학대학교 컴퓨터정보과를 졸업했어요.",
        date: "2021년 2월",
        icon: <IconAccountSchool />,
        color: "#db2777"
    },
    {
        title: "경기도 성남시에서 태어났어요.",
        date: "1998년 08월 12일",
        icon: <IconCake />,
        color: "#2563EB"
    }
];

export default function CareerTimeLineSection() {
    return (
        <RootStyle>
            <Container>
                <AnimationFadeIn
                    time={8}
                    css={css`
                        width: inherit;
                        height: inherit;
                    `}
                >
                    <ColumnFlex
                        alignItems="flex-start"
                        gap={26}
                    >
                        <h2>
                            타임 라인
                        </h2>

                        <ColumnFlex
                            as="article"
                            css={css`
                                width: 100%;
                            `}
                            justifyContent="space-between"
                            gap={12}
                        >
                            {TIME_LINE_CONFIG.map((timeline, idx) => (
                                <TimeLine
                                    key={`career-timeline-${idx}`}
                                >
                                    <TimeLineIconBox>
                                        <TimeLineIcon
                                            color="#FFFFFF"
                                            bgColor={timeline.color}
                                        >
                                            {timeline.icon}
                                        </TimeLineIcon>
                                    </TimeLineIconBox>

                                    <RowFlex
                                        css={css`
                                            width: inherit;
                                            justify-content: space-between;
                                        `}
                                    >
                                        <h3
                                            css={css`
                                                font-size: 16.8px;
                                                letter-spacing: 0;
                                            `}
                                        >
                                            {timeline.title}
                                        </h3>

                                        <span
                                            css={css`
                                                font-size: 14px;
                                                letter-spacing: 0;
                                                color: #4B5563;
                                            `}
                                        >
                                            {timeline.date}
                                        </span>
                                    </RowFlex>
                                </TimeLine>
                            ))}
                        </ColumnFlex>
                    </ColumnFlex>
                </AnimationFadeIn>
            </Container>
        </RootStyle>
    )
}