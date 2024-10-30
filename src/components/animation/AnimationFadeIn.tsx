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
    -moz-animation: fadeIn ${({ time }) => `${time}s`}; /* Firefox */
    -webkit-animation: fadeIn ${({ time }) => `${time}s`}; /* Safari and Chrome */
    -o-animation: fadeIn ${({ time }) => `${time}s`}; /* Opera */
    
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
