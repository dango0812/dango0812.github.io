// next
import { notFound } from "next/navigation";
// mocks
import { _CareerConfig } from "@_mocks/career";
// components
import CareerView from "@career/components/CareerView";
import { ColumnFlex, Container, Typography } from "@components/ui";

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
        <main>
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
                </ColumnFlex>
            </Container>
        </main>
    );
}