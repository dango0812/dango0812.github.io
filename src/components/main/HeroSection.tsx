// emotion
import styled from "@emotion/styled";
import Container from "@components/common/Container";
// components
import AnimationFadeIn from "@components/animation/AnimationFadeIn";

const Section = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 160px 0px;
`;

const H1 = styled.h1`
    display: flex;
    flex-flow: column wrap;
`;

export default function HeroSection() {
    return (
        <Section>
            <Container>
                <H1>
                    <AnimationFadeIn time={3} htmlTag="span">안녕하세요.</AnimationFadeIn>
                    <AnimationFadeIn time={7} htmlTag="span">3년차 Frontend 개발자</AnimationFadeIn>
                    <AnimationFadeIn time={11} htmlTag="span">김동규입니다.</AnimationFadeIn>
                </H1>
            </Container>
        </Section>
    )
}