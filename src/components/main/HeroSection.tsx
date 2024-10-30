import { css } from "@emotion/react";
// components
import Container from "@components/common/Container";
import { Section } from "@components/main/HeroSection.styles";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";
import AnimationWobble from "@components/animation/AnimationWobble";

export default function HeroSection() {
    return (
        <Section>
            <Container>
                <AnimationFadeIn time={2}>
                    <h1 css={css`
                        font-size: 24px;
                        font-weight: 600;
                        margin: 16px 0px;
                    `}>
                        안녕하세요.&nbsp;
                        <AnimationWobble>
                            👋
                        </AnimationWobble>
                    </h1>
                </AnimationFadeIn>
                    
                <AnimationFadeIn time={4}>
                    <p>
                        저는 3년차 프론트엔드 개발자 김동규입니다.
                    </p>
                    <p css={css`
                        white-space: pre-line;
                    `}>
                        {`저는 팀에 소속되어 커뮤니케이션을 통해 생각을 공유하며성장하는 것을 좋아합니다.
                        가독성 좋은 코드를 작성하기 위해 항상 노력하며, 새로운 것을 접할 때 두려움보다는 호기심과 도전 정신으로 임합니다.
                        또한 사용자의 입장에서 생각하며, 누구나 쉽게 사용할 수 있는 UI/UX를 만드는 것을 중요하게 여깁니다.
                        `}
                    </p>
                </AnimationFadeIn>
            </Container>
        </Section>
    );
}