// react
import * as React from "react";
// emotion
import styled from "@emotion/styled";

interface AnimationFadeInProps {
    time: number;
    htmlTag?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
}

const AnimationFadeIn = ({ time, htmlTag, children }: AnimationFadeInProps) => {
    const RootStyle = styled((htmlTag || "div") as keyof JSX.IntrinsicElements)<{ time: number }>`
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

    return (
        <RootStyle time={time}>
            {children}
        </RootStyle>
    );
};

export default AnimationFadeIn;
