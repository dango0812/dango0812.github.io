import { useMemo } from 'react';
// useQuery
import { useQuery } from '@tanstack/react-query';
// components
import Card from 'src/components/card';
import Container from 'src/components/container';
import Stack from 'src/components/stack';
import Typography from 'src/components/typography';
// utils
import { fUtcToKstDate } from 'src/utils/format-time';

type postItem = {
    "type_of": string;
    "id": number;
    "title": string;
    "description": string;
    "readable_publish_date": string;
    "slug": string;
    "path": string;
    "url": string;
    "comments_count": number;
    "public_reactions_count": number;
    "collection_id": number;
    "published_timestamp": string;
    "positive_reactions_count": number;
    "cover_image": string;
    "social_image": string;
    "canonical_url": string;
    "created_at": string;
    "edited_at": string;
    "crossposted_at": string;
    "published_at": string;
    "last_comment_at": string;
    "reading_time_minutes": number;
    "tag_list": string[];
    "tags": string;
    "user": {
        "name": string;
        "username": string;
        "twitter_username": string;
        "github_username": string;
        "user_id": number;
        "website_url": string;
        "profile_image": string;
        "profile_image_90": string;
    }
}

function HomeBlogPosts() {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ['id'],
        queryFn: () => getBlogPosts(),
        refetchOnWindowFocus: false
    });

    console.log(data)
    const memoizedBlogPosts = useMemo(
        () => ({
            data: isLoading ? [] : data as Array<postItem>,
            loading: isLoading,
            fetching: isFetching,
            error: error || null,
            empty: !isLoading && data.length === 0,
        }),
        [data, isLoading, isFetching, error]
    );

    const getBlogPosts = async() => {
        const endpoint = 'https://dev.to/api/articles?username=dango0812&api_key=fDwtyzQ7BU8gb9MEjzt3CB4a';
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok.')
        }

        const ret = await response.json();
        return ret;
    }

    return (
        <section className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Blog Posts 📚
                </Typography>
                <hr className="w-full h-px bg-slate-500" />
                    <Stack direction='horizontal' align='start' justify='start' spacing={16}>
                        {memoizedBlogPosts.data.map((post: postItem) => (
                            <a key={post.id} href="#">
                                <Card className='px-0 py-0 md:flex-row min-h-[160px] border-none dark:hover:bg-gray-700'>
                                    <Stack direction='horizontal' align='start' justify='start' className='md:flex md:flex-row' spacing={4}>
                                        <img className="w-full md:w-56 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none" src={post.cover_image} alt="blog cover" />
                                        <Stack direction='horizontal' align='start' justify='start' spacing={16} className='p-4'>
                                            <Typography variant='h6' color='black' className='font-bold  dark:text-white'>
                                                {post.title}
                                            </Typography>
                                            <Typography variant='body1' className='text-gray-400'>
                                                {post.description}
                                            </Typography>
                                            <Typography variant='body2' className='text-gray-400 leading-10'>
                                                {fUtcToKstDate(post.created_at)}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </a>
                        ))}
                    </Stack>
            </Container>
        </section>
    )
}

export default HomeBlogPosts;