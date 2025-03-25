"use client";

// mocks
import { _TableOfContent } from "@_mocks/home";
// components
import { ColumnFlex, Container, Typography, Divider } from "@components/ui";
// tailwind
import { cn } from "@libs/tailwind";

export default function HomeTableOfContents() {
    return (
        <div
            className="hidden xl:block fixed right-5 top-1/2 -translate-y-1/2"
        >
            <Container
                maxWidth="md"
                className="w-full border border-gray-200 bg-white rounded-3xl shadow-xl p-5"
            >
                <ColumnFlex
                    className="gap-3"
                >
                    <ColumnFlex
                        className="gap-1.5"
                    >
                        <Typography
                            as="h2"
                            fontSize="xl"
                            fontWeight={500}
                            color="primary"
                        >
                            Table of Contents
                        </Typography>

                        <Divider
                            color="primary"
                        />
                    </ColumnFlex>

                    <ColumnFlex>
                        {_TableOfContent.map(({ link, content }) => (
                            <a
                                key={content}
                                href={link}
                                className={cn(
                                    "py-2 px-3"
                                )}
                            >
                                {content}
                            </a>
                        ))}
                    </ColumnFlex>
                </ColumnFlex>
            </Container>
        </div>
    )
}