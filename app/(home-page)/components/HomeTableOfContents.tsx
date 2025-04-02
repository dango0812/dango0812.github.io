"use client";

// react
import { useEffect, useRef, useState } from "react";
// mocks
import { _TableOfContents } from "@_mocks/home";
// components
import { ColumnFlex, Container, Typography, Divider } from "@components/ui";
// tailwind
import { cn } from "@libs/tailwind";

export default function HomeTableOfContents() {
    const sectionsRef = useRef<HTMLElement[]>([]);
    const [currentHash, setCurrentHash] = useState(_TableOfContents.details[0].link.replace("#", ""));

    useEffect(() => {
        // 마운트 시, 각 link에 해당하는 DOM 요소를 찾아서 sectionsRef에 저장
        sectionsRef.current = _TableOfContents.details
            .map(({ link }) => document.querySelector(link))
            .filter(Boolean) as HTMLElement[];
        
        const handleScroll = () => {
            let activeHash = currentHash;

            sectionsRef.current.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const isLastSection = index === sectionsRef.current.length - 1;

                // 섹션의 상단이 뷰포트 상단을 지나갔는지 확인
                const isTopInView = rect.top <= 0;
                // 섹션의 하단이 뷰포트 하단 아래로 벗어나지 않았는지 확인
                const isBottomInView = rect.bottom > 0;
                // 마지막 섹션이 뷰포트 하단에 도달했는지 확인
                const isLastSectionFullyInView = isLastSection && rect.bottom <= window.innerHeight;
                
                // 섹션의 상단이 뷰포트 상단 위에 있고 하단이 뷰포트 내에 있거나,
                // 마지막 섹션이 뷰포트 하단에 도달한 경우 활성화 대상 섹션으로 설정
                const shouldActivateSection = (isTopInView && isBottomInView) || isLastSectionFullyInView;

                if (shouldActivateSection) {
                    activeHash = section.id;
                }
            });

            if (activeHash !== currentHash) {
                setCurrentHash(activeHash);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [currentHash]);

    const handleChangeCurrentHash = (hash: string, link: string) => {
        const element = document.querySelector(link);
        if (!element) {
            return;
        }

        // 클릭한 Element 최상단으로 스크롤
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setCurrentHash(hash);
    };

    return (
        <div className="hidden xl:block fixed xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2">
            <Container
                maxWidth="md"
                className="w-full min-w-52 border border-gray-200 backdrop-blur-md bg-white/70 rounded-3xl shadow-xl p-5"
            >
                <ColumnFlex className="gap-3">
                    <ColumnFlex className="gap-1.5">
                        <Typography
                            as="h2"
                            fontSize="xl"
                            fontWeight={500}
                            color="primary"
                        >
                            {_TableOfContents.title}
                        </Typography>
                        <Divider color="primary" />
                    </ColumnFlex>

                    <ColumnFlex>
                        {_TableOfContents.details.map(({ link, content }) => {
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
