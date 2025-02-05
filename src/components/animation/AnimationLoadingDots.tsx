// emotion
import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 24px;
    gap: 8px;
`;

const Dot = styled.span<{
    delay: string;
}>`
    width: 10px;
    height: 10px;
    border-radius: var(--border-radius-full);
    background-color: inherit;
    animation: bounce 1.5s linear infinite;
    animation-delay: ${({ delay }) => delay || 0};

    @keyframes bounce {
        0% {
            margin-bottom: 0;
        }
        25% {
            margin-bottom: 12px;
            background-color: var(--pink);
        }
        50% {
            margin-bottom: 0
        }
        100% {
            margin-bottom: 0
        }
    }
`;

export default function AnimationLoadingDots() {
    return (
        <Wrapper>
            <Dot delay="0s" />
            <Dot delay="0.3s" />
            <Dot delay="0.6s" />
        </Wrapper>
    )
}