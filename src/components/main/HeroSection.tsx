// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// components
import Container from "@components/common/Container";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";
import AnimationWobble from "@components/animation/AnimationWobble";

const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    margin-top: 80px;
`;

export default function HeroSection() {
    return (
        <RootStyle>
            <Container>
                <AnimationFadeIn time={2}>
                    <h1>
                        안녕하세요. &nbsp;
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
                        {`팀 안에서 커뮤니케이션을 통해 생각을 공유하며 함께 성장하는 것을 좋아합니다.
                        사용자의 입장에서 누구나 쉽게 사용할 수 있는 UI/UX를 만드는 것을 중요하게 여기고, 주어진 작업의 목적을 이해하는 데 가치를 둡니다.
                        저는 투명하게 일하고 서로 신뢰하는 조직에서 일하기를 선호하며, 문제 해결에 있어 가장 간단하면서도 합리적인 방법을 찾기 위해 노력합니다.
                        가독성 높은 코드를 작성하려고 늘 노력하며, 새로운 것을 접할 때 두려움보다는 호기심과 도전 정신으로 임합니다.
                        또한 특정 분야에 한정하지 않고 새로운 지식을 쌓아가며 일하는 것을 좋아합니다.
                        UI, UX에 대해 논의하고 개선하는 과정을 즐기며, 아름다운 인터랙션을 구현하는 데 관심이 많습니다.
                        `}
                    </p>
                </AnimationFadeIn>
            </Container>
        </RootStyle>
    );
}