// emotion
import styled from "@emotion/styled";
// constants
import { mediaQuery } from "@constants/mediaQuery";

export const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 0px;
`;

export const Title = styled.h1`
    margin: 0px;  
`;

export const Description = styled.p`
    white-space: pre-wrap;
`;

export const PeriodDate = styled.p`
    color: var(--grey);
    font-size: var(--font-size-small);
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    ${mediaQuery.mobile} {
        height: 320px;
        object-fit: fill;
    }
    ${mediaQuery.tablet} {
        height: 420px;
    }
`;

export const Link = styled.a`
    display: inline-flex;
    text-decoration: underline;
    font-size: var(--font-size-medium);
    ::after {
        display: inline-flex;
        content: "";
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z'%3E%3C/path%3E%3C/svg%3E");
        width: 16px;
        height: 16px;
        margin-left: 4px;
        background-color: currentColor;
        transform: translate(0, 2px);
        transition: transform 0.3s cubic-bezier(0.1, 0.4, 0.3, 1);
    }
`;