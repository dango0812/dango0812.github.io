// next
import { notFound } from "next/navigation";
// mocks
import { _CareerConfig } from "@_mocks/career";
// components
import AnimationWrapper from "@career/components/AnimationWrapper";
import CareerView from "@career/components/CareerView";
import { ColumnFlex, Container, Typography } from "@components/ui";
// paths
import { paths } from "@constants/paths";

interface CareerPageProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return _CareerConfig.map(({ slug }) => ({
        slug
    }));
}

export default async function CareerPage({
    params
}: CareerPageProps) {
    const { slug } = await params;

    const careerData = _CareerConfig.find(item => item.slug === slug);
    if (careerData === undefined) {
        notFound();
    }

    return (
        <AnimationWrapper>
            <Container
                maxWidth="sm"
                className="py-20 lg:py-25 px-5 lg:px-0"
            >
                <ColumnFlex>
                    <Typography
                        as="h1"
                        fontWeight={700}
                        className="text-xl sm:text-3xl"
                    >
                        {careerData.title}
                    </Typography>

                    <CareerView
                        career={careerData.details}
                    />
                    
                    <a
                        href={paths.home}
                        className="w-max px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 mt-5 transition-all duration-300 ease-in-out"
                    >
                        <Typography
                            as="span"
                            fontSize="sm"
                        >
                            {careerData.back}
                        </Typography>
                    </a>
                </ColumnFlex>
            </Container>
        </AnimationWrapper>
    );
}