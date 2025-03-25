// mocks
import { _HeroSection, _TableOfContent } from "@_mocks/home";
// components
import { Container, ColumnFlex, Typography } from "@components/ui";

export default function HomeHeroSection() {
    return (
        <section
            id="hero"
            className="py-10 px-5 lg:px-0"
        >
            <Container
                className="flex flex-col gap-10"
            >
                <ColumnFlex
                    className="text-center gap-2.5"
                    alignItems="center"
                    justifyContent="center"
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
                </ColumnFlex>

                <Typography
                    as="p"
                    color="gray"
                    className="max-w-4xl leading-7"
                >
                    {_HeroSection.description}
                </Typography>
            </Container>
        </section>
    )
}