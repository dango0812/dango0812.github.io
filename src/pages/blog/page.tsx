// react
import { useCallback } from "react";
// useQuery
import { useQuery } from "@tanstack/react-query";
// components
import { RootStyle, Wrapper, PostBox, Link, PostIndexBadge, PostTitle, PostDate } from "@pages/posts/page.styles";
import { ColumnFlex, RowFlex } from "@/components/common/FlexBox";
import AnimationLoadingDots from "@components/animation/AnimationLoadingDots";
// utils
import { getFormattedUTCtoKST } from "@utils/datetime";
// types
import BlogPostType from "@/pages/posts/types/BlogPostType";
// env
const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL;
const BLOG_API_AUTH_USERNAME = import.meta.env.VITE_BLOG_API_USERNAME;
const BLOG_API_KEY = import.meta.env.VITE_BLOG_API_KEY;

export default function BlogPostPage() {
    const { data, isLoading, isFetching } = useQuery({
        initialData: [],
        queryKey: ["blog_posts"],
        queryFn: () => getBlogPosts(),
        refetchOnWindowFocus: false
    });

    const getBlogPosts = useCallback(async() => {
        const response = await fetch((`${BLOG_API_URL}/api/articles?username=${BLOG_API_AUTH_USERNAME}&api_key=${BLOG_API_KEY}`));
        return await response.json();
    }, []);

    const loading = (isLoading && isFetching);

    const getFormattedIndex = useCallback((idx: number) => {
        if (idx < 10) {
            return `0${idx}`;

        } else {
            return idx;
        }
    }, []);

    return (
        <RootStyle>
            <h1>
                블로그
            </h1>
            {loading ? (
                <ColumnFlex>
                    <AnimationLoadingDots />
                    <p>
                        게시글을 불러오고 있어요.
                    </p>
                </ColumnFlex>
            ) : (
                <Wrapper>
                    {data.map((post: BlogPostType, idx: number) => (
                        <PostBox
                            key={post.id}
                        >
                            <Link
                                href={post.url}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <RowFlex
                                    alignItems="center"
                                    gap={20}
                                >
                                    <PostIndexBadge>
                                        {getFormattedIndex(idx + 1)}
                                    </PostIndexBadge>

                                    <PostTitle>
                                        {post.title}
                                    </PostTitle>
                                    
                                    <PostDate>
                                        {getFormattedUTCtoKST(post.created_at)}
                                    </PostDate>
                                </RowFlex>
                            </Link>
                        </PostBox>
                    ))}
                </Wrapper>
            )}
        </RootStyle>
    )
}