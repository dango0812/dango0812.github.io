import { BlogPost } from "@_types/blog";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles`;
    const params = new URLSearchParams({
        username: process.env.NEXT_PUBLIC_BLOG_API_USERNAME as string,
        api_keys: process.env.NEXT_PUBLIC_BLOG_API_KEY as string,
        per_page: "4",
    });

    const url = `${baseUrl}?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
    }

    const posts = await response.json();
    return posts.map((post: BlogPost) => ({
        url: post.url,
        title: post.title,
        description: post.description,
        cover_image: post.cover_image,
        published_at: post.published_at,
    }));
};
