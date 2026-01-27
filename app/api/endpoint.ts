/**
 * HTTP 메서드 타입
 */
const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/** API 엔드포인트 */
export const API_ENDPOINT = {
  profile: {
    getProfile: () => ({
      url: `${process.env.NEXT_PUBLIC_HOST_API}/profile.json`,
      method: HttpMethod.GET,
    }),
  },
  career: {
    getCareers: () => ({
      url: `${process.env.NEXT_PUBLIC_HOST_API}/careers.json`,
      method: HttpMethod.GET,
    }),
  },
  blog: {
    getBlogPosts: () => ({
      url: `${process.env.NEXT_PUBLIC_BLOG_URL}/metadata.json`,
      method: HttpMethod.GET,
    }),
  },
};
