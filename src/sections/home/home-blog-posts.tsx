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
// types
import { PostItem } from 'src/types/blog';
// config
import { BLOG_API } from 'src/config';

function HomeBlogPosts() {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ['blogPosts'],
        queryFn: () => getBlogPosts(),
        refetchOnWindowFocus: false
    });

    const memoizedBlogPosts = useMemo(
        () => ({
            data: isLoading ? [] : data as Array<PostItem>,
            loading: isLoading,
            fetching: isFetching,
            error: error || null,
            empty: !isLoading && data.length === 0,
        }),
        [data, isLoading, isFetching, error]
    );

    const getBlogPosts = async() => {
        const endPoint = `${BLOG_API.articles}?username=${BLOG_API.username}&api_key=${BLOG_API.apiKey}`;
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error('Network response was not ok.')
        }

        const ret = await response.json();
        return ret;
    }

    return (
        <section id="blog" className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Blog Posts 📚
                </Typography>
                <hr className="w-full h-px bg-slate-500" />
                    <Stack direction='horizontal' align='start' justify='start' spacing={16}>
                        {memoizedBlogPosts.data.map((post: PostItem) => (
                            <a key={post.id} href={post.url} target='_blank' rel='noreferrer noopener'>
                                <Card className='px-0 py-0 md:flex-row min-h-[160px] border-none hover:bg-transparent dark:md:hover:bg-gray-700'>
                                    <Stack direction='horizontal' align='start' justify='start' className='md:flex md:flex-row' spacing={4}>
                                        <img className="w-full md:w-56 md:h-56 rounded-t-lg md:rounded-l-lg md:rounded-r-none" src={post.cover_image} alt="blog cover" />
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