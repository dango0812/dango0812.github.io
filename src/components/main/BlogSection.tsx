// useQuery
import { useQuery } from "@tanstack/react-query";
// emotion
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// components
import Container from "@components/common/Container";
import { ColumnFlex, RowFlex } from "@components/common/FlexBox";
import AnimationLoadingDots from "@components/animation/AnimationLoadingDots";
import { BlogPostsWraper, BlogPostBox, Link, BlogPostIndexBadge, BlogPostTitle, BlogPostDate } from "@components/main/BlogSection.styles";
// utils
import { getFormattedUTCtoKST } from "@/utils/datetime";
// types
import { BlogArticlePost } from "@types/blog";
// env
const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL;
const BLOG_API_AUTH_USERNAME = import.meta.env.VITE_BLOG_API_USERNAME;
const BLOG_API_KEY = import.meta.env.VITE_BLOG_API_KEY;

const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 0px;
`;

export default function BlogSection() {
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["blog_posts"],
        queryFn: () => getBlogPosts(),
        refetchOnWindowFocus: false
    });
    const loading = (isLoading && isFetching);

    const getBlogPosts = async() => {
        const response = await fetch((`${BLOG_API_URL}/api/articles?username=${BLOG_API_AUTH_USERNAME}&api_key=${BLOG_API_KEY}&page=1&per_page=5`));
        return await response.json();
    };

    return (
        <RootStyle>
            <Container>
                <ColumnFlex
                    alignItems="flex-start"
                    gap={26}
                >
                    <h2>
                        블로그
                    </h2>

                    {loading ? (
                        <AnimationLoadingDots />
                    ) : (
                        <BlogPostsWraper>
                            {data.map((post: BlogArticlePost, idx: number) => (
                                <BlogPostBox
                                    key={post.id}
                                >
                                    <Link
                                        href={post.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <RowFlex
                                            justifyContent="flex-start"
                                            css={css`
                                                width: inherit;
                                            `}
                                            gap={20}
                                        >
                                            <BlogPostIndexBadge>
                                                0{idx + 1}
                                            </BlogPostIndexBadge>

                                            <BlogPostTitle>
                                                {post.title}
                                            </BlogPostTitle>
                                        </RowFlex>

                                        <BlogPostDate>
                                            {getFormattedUTCtoKST(post.created_at)}
                                        </BlogPostDate>
                                    </Link>
                                </BlogPostBox>
                            ))}
                        </BlogPostsWraper>
                    )}
                </ColumnFlex>
            </Container>
        </RootStyle>
    )
}