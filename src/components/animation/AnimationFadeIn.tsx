// emotion
import styled from "@emotion/styled";

interface AnimationFadeInProps extends React.HTMLAttributes<HTMLDivElement>{
    time: number;
    htmlTag?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
};

const Wrapper = styled.div<{
    time: number;
}>`
    display: inline-block;
    animation: fadeIn ${({ time }) => `${time}s`};
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


export default function AnimationFadeIn({
    time,
    htmlTag,
    children,
    ...rest
}: AnimationFadeInProps) {
    return (
        <Wrapper
            time={time}
            as={htmlTag}
            {...rest}
        >
            {children}
        </Wrapper>
    )
}
