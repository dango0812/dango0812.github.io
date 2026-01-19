// mocks
import { _HeroSection } from "@_mocks/home";
// components
import { Container, ColumnFlex, Typography } from "@components/ui";

export default function HomeHeroSection() {
    return (
        <section
            id="hero"
            className="py-15 px-5 lg:px-0"
        >
            <Container
                maxWidth="sm"
            >
                <ColumnFlex
                    alignItems="center"
                    justifyContent="center"
                    className="gap-3 text-center"
                >
                    <Typography
                        as="h1"
                        fontSize="2xl"
                        fontWeight={700}
                        color="primary"
                    >
                        {_HeroSection.title}
                    </Typography>

                    <Typography
                        as="span"
                        fontSize="lg"
                        fontWeight={700}
                    >
                        {_HeroSection.subtitle}
                    </Typography>

                    <Typography
                        as="p"
                        color="gray"
                        className="max-w-4xl leading-7"
                        whiteSpace="prewrap"
                    >
                        {_HeroSection.description}
                    </Typography>

                    {/*
                    // 추후 이력서 다운로드 기능 추가
                    <a
                        target="_blank" 
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 mt-5 transition-all duration-300 ease-in-out"
                    >
                        <Typography
                            as="span"
                            fontSize="sm"
                        >
                            {_HeroSection.resumeDownload}
                        </Typography>
                        
                        <Image
                            src="/icons/icon-download.svg"
                            alt="download icon"
                            width={16}
                            height={16}
                            priority
                        />
                    </a>
                    */}
                </ColumnFlex>
            </Container>
        </section>
    )
}