"use client";

// react
import { useEffect, useRef, useState } from "react";
// mocks
import { _TableOfContent, _TableOfContentSection } from "@_mocks/home";
// components
import { ColumnFlex, Container, Typography, Divider } from "@components/ui";
// tailwind
import { cn } from "@libs/tailwind";

export default function HomeTableOfContents() {
    const isScrollingRef = useRef<boolean>(false);
    const [currentHash, setCurrentHash] = useState<string>(_TableOfContent[0].link.replace("#", ""));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // TOC 클릭으로 인한 스크롤 중에는 currentHash를 변경하지 않음
                if (isScrollingRef.current) {
                    return;
                }

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 해당 section이 Viewport 중앙 근처에 오면 currentHash 갱신
                        setCurrentHash(entry.target.id);
                    }
                });
            },
            {
                // Viewport 중앙 근처에서 section 감지 (상단 50%, 하단 60% 오프셋)
                rootMargin: "-50% 0px -60% 0px",
                threshold: 0,
            }
        );

        // 목차에 해당하는 모든 section 요소를 가져옴
        const sections = _TableOfContent.map(({ link }) =>
            document.querySelector(link)
        ).filter(Boolean) as HTMLElement[];

        // 모든 section 요소에 대해 Intersection Observer 등록
        sections.forEach((section) => observer.observe(section));

        // 언마운트 시, observer 해제
        return () => observer.disconnect();
    }, []);

    // 목차 클릭 시, 해당 section 으로 이동 및 observer 일시 중단
    const handleChangeCurrentHash = (hash: string, link: string) => {
        const element = document.querySelector(link);
        if (!element) {
            return;
        }

        isScrollingRef.current = true;
        element.scrollIntoView({
            behavior: "smooth"
        });

        // 스크롤 완료 후 currentHash 갱신 및 observer 재활성화
        setTimeout(() => {
            setCurrentHash(hash);
            isScrollingRef.current = false;
        }, 500);
    };

    return (
        <div className="hidden xl:block fixed xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2">
            <Container
                maxWidth="md"
                className="w-full min-w-52 border border-gray-200 bg-white rounded-3xl shadow-xl p-5"
            >
                <ColumnFlex className="gap-3">
                    <ColumnFlex className="gap-1.5">
                        <Typography
                            as="h2"
                            fontSize="xl"
                            fontWeight={500}
                            color="primary"
                        >
                            {_TableOfContentSection.title}
                        </Typography>
                        <Divider color="primary" />
                    </ColumnFlex>

                    <ColumnFlex>
                        {_TableOfContent.map(({ link, content }) => {
                            const hash = link.replace("#", "");
                            const isActive = hash === currentHash;

                            return (
                                <a
                                    key={content}
                                    href={link}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleChangeCurrentHash(hash, link);
                                    }}
                                    className={cn(
                                        "py-2 px-3 rounded-md hover:text-yellow-500",
                                        {
                                            "text-yellow-500 font-semibold": isActive,
                                            "text-gray-500": !isActive,
                                        }
                                    )}
                                >
                                    {content}
                                </a>
                            );
                        })}
                    </ColumnFlex>
                </ColumnFlex>
            </Container>
        </div>
    );
}
