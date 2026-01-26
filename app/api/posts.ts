import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/lib/axios';
import type { BlogPostsResponse } from '@/types/blogPost';

import { API_ENDPOINT } from './endpoint';

/**
 * 블로그 게시물 데이터 조회
 *
 * @example
 * const { data, isLoading } = useGetBlogPosts();
 */
export function useGetBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetcher<BlogPostsResponse>(API_ENDPOINT.blog.getBlogPosts),
  });
}
