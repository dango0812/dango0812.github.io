// emotion
import styled from "@emotion/styled";

export const RootStyle = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`;

export const Link = styled.a`
    display: inline-flex;
    text-decoration: underline;
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