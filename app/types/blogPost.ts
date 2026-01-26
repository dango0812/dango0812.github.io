/**
 * 블로그 게시글 타입 정의
 *
 * Tech: 개발 지식, 기술 스택
 * Insight: 회고, 경험, 생각 중심
 * Life: 일상, 취미, 여행
 */
export type BlogPostTag = 'Tech' | 'Insight' | 'Life';

/** 블로그 게시글 */
export interface BlogPost {
  title: string;
  description: string;
  link: string;
  readTime: number;
  date: string;
  tag: BlogPostTag;
}

/** 블로그 게시글 응답 */
export type BlogPostsResponse = BlogPost[];
