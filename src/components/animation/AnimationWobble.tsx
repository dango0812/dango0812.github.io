// emotion
import styled from "@emotion/styled";

interface AnimationWobbleProps {
    children: React.ReactNode;
};

const Wrapper = styled.span`
    display: inline-block;
    animation: wobble 1s ease-in infinite;

    @keyframes wobble {
        0% {
            transform: rotate(10deg);
        }
        50% {
            transform: rotate(20deg);
        }
        100% {
            transform: rotate(10deg);
        }
    }
`;

export default function AnimationWobble({ children }: AnimationWobbleProps) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};