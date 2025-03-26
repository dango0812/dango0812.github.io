"use client";

// next
import Image from "next/image";
// react-query
import { useQuery } from "@tanstack/react-query";
// mocks
import { _BlogPostSection } from "@_mocks/home";
// apis
import { getBlogPosts } from "@api/blog";
// components
import { Container, ColumnFlex, Typography, LoadingDot } from "@components/ui";
// utils
import { convertUTCtoKSTDate, formatDateTime } from "@utils/date";

export default function HomeBlogSection() {
    const { data = [], isLoading, isFetching, isError } = useQuery({
        queryKey: ["blog_posts"],
        queryFn: () => getBlogPosts(),
        refetchOnWindowFocus: false
    });

    const loading = isLoading && isFetching;

    return (
        <section
            id="blogPosts"
            className="py-15 px-5 lg:px-0 bg-gray-50"
        >
            <Container
                maxWidth="fullWidth"
                className="flex flex-col items-center justify-center gap-10"
            >
                <ColumnFlex
                    className="text-center gap-2.5"
                >
                    <Typography
                        as="h2"
                        fontSize="xl"
                        fontWeight={700}
                        color="primary"
                    >
                        {_BlogPostSection.title}
                    </Typography>

                    <Typography
                        as="em"
                        fontSize="lg"
                        fontWeight={700}
                        className="not-italic"
                    >
                        {_BlogPostSection.subtitle}
                    </Typography>
                </ColumnFlex>

                {(() => {
                    if (loading) {
                        return <LoadingDot />
                    }

                    if (isError) {
                        return (
                            <Typography
                                as="em"
                                whiteSpace="prewrap"
                                className="not-italic text-center"
                            >
                                {_BlogPostSection.loadError}
                            </Typography>
                        )
                    }

                    return (
                        <Container
                            maxWidth="lg"
                        >
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full"
                            >
                                {data.map(({ url, title, description, cover_image, published_at }) => (
                                    <a
                                        key={title}
                                        href={url}
                                        target="_blank"
                                        className="bg-white border border-gray-100 rounded-3xl shadow-md"
                                    >
                                        <Image
                                            className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                                            src={cover_image}
                                            width={326}
                                            height={176}
                                            alt="cover_image.png"
                                        />
                                        
                                        <ColumnFlex
                                            className="p-5 gap-5"
                                        >
                                            <Typography
                                                className="h-14 line-clamp-2"
                                                as="h2"
                                                fontSize="xl"
                                                fontWeight={700}
                                            >
                                                {title}
                                            </Typography>

                                            <Typography
                                                className="h-[72px] line-clamp-3"
                                                as="p"
                                                color="gray"
                                            >
                                                {description}
                                            </Typography>

                                            <Typography
                                                as="p"
                                                fontSize="sm"
                                            >
                                                {formatDateTime(convertUTCtoKSTDate(published_at))}
                                            </Typography>
                                        </ColumnFlex>
                                    </a>
                                ))}
                            </div>
                        </Container>
                    );
                })()}
            </Container>
        </section>
    )
}