// useQuery
import { useQuery } from "@tanstack/react-query";
// emotion
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// components
import MoreLink from "@components/common/MoreLink";
import Container from "@components/common/Container";
import { ColumnFlex, RowFlex } from "@components/common/FlexBox";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";
import AnimationLoadingDots from "@components/animation/AnimationLoadingDots";
import { BlogPostsWraper, BlogPostBox, Link, BlogPostIndexBadge, BlogPostTitle, BlogPostDate } from "@components/main/BlogSection.styles";
// constants
import { paths } from "@constants/paths";
// utils
import { getFormattedUTCtoKST } from "@utils/datetime";
// types
import { BlogArticlePost } from "@type/blog";
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
        initialData: [],
        queryKey: ["blog_posts"],
        queryFn: () => getBlogPosts(),
        refetchOnWindowFocus: false
    });
    const loading = (isLoading && isFetching);

    const getBlogPosts = async() => {
        const response = await fetch((`${BLOG_API_URL}/api/articles?username=${BLOG_API_AUTH_USERNAME}&api_key=${BLOG_API_KEY}&page=1&per_page=5`));
        return await response.json();
    };

    if (loading) {
        return <AnimationLoadingDots />
    }

    return (
        <RootStyle>
            <Container>
                <AnimationFadeIn time={4}>
                    <ColumnFlex
                        gap={26}
                    >
                        <h2>
                            블로그
                        </h2>

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
                                            alignItems="center"
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

                            <MoreLink
                                href={paths.blogs}
                                enabledEndDecorator
                            >
                                <p
                                    css={css`
                                        font-size: 14.8px;
                                        padding: 0px;
                                    `}
                                >
                                    모든 게시글 보기
                                </p>
                            </MoreLink>
                        </BlogPostsWraper>
                    </ColumnFlex>
                </AnimationFadeIn>
            </Container>
        </RootStyle>
    )
}