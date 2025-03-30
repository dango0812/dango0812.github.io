// next
import Image from "next/image";
// mocks
import { _HomeTimelineSection } from "@_mocks/home";
// components
import { Container, ColumnFlex, Typography, RowFlex } from "@components/ui";

export default function HomeTimelineSection() {
    return (
        <section
            id="timeline"
            className="py-15 px-5 xl:px-0 "
        >
            <Container
                maxWidth="lg"
            >
                <ColumnFlex
                    alignItems="center"
                    justifyContent="center"
                    className="gap-15"
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
                            {_HomeTimelineSection.title}
                        </Typography>

                        <Typography
                            as="em"
                            fontSize="lg"
                            fontWeight={700}
                            className="not-italic"
                        >
                            {_HomeTimelineSection.subtitle}
                        </Typography>
                    </ColumnFlex>

                    <Container
                        maxWidth="sm"
                    >
                        <RowFlex
                            justifyContent="space-between"
                            className="w-full flex-wrap gap-10 md:gap-20"
                        >
                            {_HomeTimelineSection.details.map(({ title, iconSrc, items }) => (
                                <ColumnFlex
                                    className="w-full max-w-80 gap-2.5"
                                    key={title}
                                >
                                    <Image
                                        src={iconSrc}
                                        width={40}
                                        height={40}
                                        alt={title}
                                    />
                                    <Typography
                                        as="h3"
                                        fontSize="xl"
                                        fontWeight={700}
                                        className="px-0.5"
                                    >
                                        {title}
                                    </Typography>

                                    <ColumnFlex
                                        className="gap-1"
                                    >
                                        {items.map(({ icon, title }) => (
                                            <RowFlex
                                                key={title}
                                                className="gap-1.5"
                                            >
                                                <Typography
                                                    as="span"
                                                >
                                                    {icon}
                                                </Typography>

                                                <Typography
                                                    as="h4"
                                                >
                                                    {title}
                                                </Typography>
                                            </RowFlex>
                                        ))}
                                    </ColumnFlex>
                                </ColumnFlex>
                            ))}
                        </RowFlex>
                    </Container>
                </ColumnFlex>
            </Container>
        </section>
    )
}