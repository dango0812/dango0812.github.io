// emotion
import styled from "@emotion/styled";
// constants
import { mediaQuery } from "@constants/mediaQuery";

export const BlogPostsWraper = styled.ul`
    width: 100%;
    list-style-type: none;
`;

export const BlogPostBox = styled.li`
    display: flex;
    align-items: center;
    padding: 0.625rem 0px; // 12px 0px
    border-bottom: 1px solid #E5E7EB;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.01);
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mediaQuery.mobile} {
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
    }
    ${mediaQuery.tablet} {
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
    }
    width: 100%;
    text-decoration: none;
    color: inherit;
`;

export const BlogPostIndexBadge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 14px;
    border-radius: 0.5rem; // 8px
    background-color: #F3F4F6;
`;

export const BlogPostTitle = styled.p`
    max-width: 560px;
    padding: 0px;
    color: #20232a;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;

export const BlogPostDate = styled.span`
    font-size: 14px;
    letter-spacing: 0;
    color: #4B5563;
    white-space: nowrap;
`;