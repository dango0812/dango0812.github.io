// emotion
import styled from "@emotion/styled";

export const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 80pt 0px;
`;

export const Wrapper = styled.ul`
    width: 100%;
    list-style-type: none;
`;

export const Link = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PostBox = styled.li`
    display: flex;
    align-items: center;
    padding: 0.625rem 0px; // 12px 0px
    border-bottom: 1px solid #E5E7EB;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.01);
    }
`;

export const PostIndexBadge = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-small);
    border-radius: var(--border-radius-md);
    background-color: #F3F4F6;
`;

export const PostTitle = styled.p`
    width: 100%;
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const PostDate = styled.span`
    min-width: 100px;
    width: 100px;
    font-size: var(--font-size-small);
    letter-spacing: 0;
    color: #4B5563;
    white-space: nowrap;
`;