// react
import { lazy } from "react";
// emotion
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// styles
import {
    TimeLine,
    TimeLineIconBox,
    TimeLineIcon,
    TimeLineTitle,
    TimeLineDate,
    TimeLineDetailList,
    TimeLineDetail,
    TimeLineDetailTitle,
    TimeLineDetailDate
} from "@/components/main/TimeLineSection.styles";
// components
import Label from "@components/common/Label";
import MoreLink from "@components/common/MoreLink";
import Container from "@components/common/Container";
import { RowFlex, ColumnFlex } from "@components/common/FlexBox";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";
// constants
import { paths } from "@constants/paths";
import { mediaQuery } from "@constants/mediaQuery";
// assets
const CakeIcon = lazy(() => import("@assets/icon/CakeIcon"));
const BriefcaseIcon = lazy(() => import("@assets/icon/BriefcaseIcon"));
const AccountSchoolIcon = lazy(() => import("@assets/icon/AccountSchoolIcon"));

const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 0px;
`;

const timelineConfig = [
    {
        title: "자라소프트에서 프론트엔드 개발자로 근무중이에요.",
        date: "2021년 6월 ~ 현재",
        icon: <BriefcaseIcon />,
        color: "#4B5563",
        details: [
            {
                title: "블러미 엔터프라이즈 (내부망) 웹 페이지 개발",
                date: "2024년 10월 ~ 진행 중"
            },
            {
                title: "블러미 이미지 & 영상 비식별화 웹 페이지 개발",
                date: "2024년 4월 ~ 2024년 10월"
            },
            {
                title: "블러미 관리자용 웹 페이지 개발",
                date: "2023년 12월 ~ 2024년 3월"
            },
            {
                title: "블러미 영상 비식별화 웹 페이지 개발",
                date: "2023년 4월 ~ 2024년 2월"
            },
            {
                title: "RTSP 를 활용한 라이브 스트림 비식별화 서비스 개발",
                date: "2023년 1월 ~ 2023년 9월"
            },
            {
                title: "한전 Ai-Ev & GS엠비즈 법인 전기차 관리를 위한 관리자용 웹 페이지 개발",
                date: "2022년 5월 ~ 2022년 12월"
            }
        ]
    },
    {
        title: "이노벤터에서 기획자로 근무했어요.",
        date: "2021년 4월 ~ 2021년 5월",
        icon: <BriefcaseIcon />,
        color: "#4B5563",
        details: [
            {
                title: "자사 서비스 및 아프리카TV 멀티 버스 관련 웹 기획",
                date: "2021년 4월 ~ 2021년 5월"
            }
        ]
    },
    {
        title: "수원과학대학교 컴퓨터정보과를 졸업했어요.",
        date: "2021년 2월",
        icon: <AccountSchoolIcon />,
        color: "#db2777"
    },
    {
        title: "경기도 성남시에서 태어났어요.",
        date: "1998년 08월 12일",
        icon: <CakeIcon />,
        color: "#2563EB"
    }
];

export default function CareerTimeLineSection() {
    return (
        <RootStyle>
            <Container>
                <AnimationFadeIn
                    time={4}
                >
                    <ColumnFlex
                        gap={26}
                    >
                        <h2>
                            타임 라인
                        </h2>

                        <ColumnFlex
                            as="article"
                            justifyContent="space-between"
                            gap={12}
                        >
                            {timelineConfig.map(({ color, icon, title, details, date }, idx) => (
                                <TimeLine
                                    key={`career-timeline-${idx}`}
                                >
                                    <TimeLineIconBox>
                                        <TimeLineIcon
                                            color="#FFFFFF"
                                            bgColor={color}
                                        >
                                            {icon}
                                        </TimeLineIcon>
                                    </TimeLineIconBox>

                                    <ColumnFlex
                                        gap={2}
                                    >
                                        <TimeLineDate>
                                            {date}
                                        </TimeLineDate>
                                        
                                        <TimeLineTitle>
                                            {title}
                                        </TimeLineTitle>

                                        {details?.length > 0 && (
                                            <TimeLineDetailList>
                                                {details.map(({ title, labels, date }: { title: string, labels?: any, date: string}) => (
                                                    <TimeLineDetail>
                                                        <ColumnFlex
                                                            gap={6}
                                                        >
                                                            <RowFlex
                                                                justifyContent="space-between"
                                                                css={css`
                                                                    ${mediaQuery.mobile} {
                                                                        flex-flow: column wrap;
                                                                    }
                                                                `}
                                                            >
                                                                <TimeLineDetailTitle>
                                                                    {title}
                                                                </TimeLineDetailTitle>

                                                                <TimeLineDetailDate>
                                                                    {date}
                                                                </TimeLineDetailDate>
                                                            </RowFlex>
                                                            
                                                            {labels?.length > 0 && (
                                                                <RowFlex
                                                                    gap={6}
                                                                    css={css`
                                                                        flex-wrap: wrap;
                                                                    `}
                                                                >
                                                                    {labels.map(({ label, color }: { label: string, color: string}) => (
                                                                        <Label
                                                                            key={label}
                                                                            label={label}
                                                                            color={color}
                                                                        />
                                                                    ))}
                                                                </RowFlex>
                                                            )}
                                                        </ColumnFlex>
                                                    </TimeLineDetail>
                                                ))}
                                            </TimeLineDetailList>
                                        )}
                                    </ColumnFlex>
                                </TimeLine>
                            ))}
                        </ColumnFlex>
                    </ColumnFlex>

                    <MoreLink
                        href={paths.timeline}
                        enabledEndDecorator
                    >
                        <p
                            css={css`
                                font-size: 14.8px;
                                padding: 0px;
                            `}
                        >
                            자세히 보기
                        </p>
                    </MoreLink>
                </AnimationFadeIn>
            </Container>
        </RootStyle>
    )
}