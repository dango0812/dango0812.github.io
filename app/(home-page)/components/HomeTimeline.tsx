// next
import Image from "next/image";
// mocks
import { _HomeTimelineSection } from "@_mocks/home";
// components
import { Container, ColumnFlex, Typography, RowFlex } from "@components/ui";

export default function HomeTimeline() {
    return (
        <section
            id="timeline"
            className="py-10 px-5 xl:px-0 "
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

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"
                    >
                        {_HomeTimelineSection.details.map(({ title, iconSrc, items }, idx) => (
                            <div
                                key={idx}
                                className="col-span-1 shadow-md rounded-xl bg-white p-5 border border-gray-200"
                            >
                                <ColumnFlex
                                    alignItems="center"
                                    className="text-center gap-7.5"
                                >
                                    <ColumnFlex
                                        alignItems="center"
                                        justifyContent="center"
                                        className="gap-2"
                                    >
                                        <Image
                                            src={iconSrc}
                                            width={40}
                                            height={40}
                                            alt="icon-link"
                                        />
                                        <Typography
                                            as="h3"
                                            fontSize="xl"
                                            fontWeight={700}
                                        >
                                            {title}
                                        </Typography>
                                    </ColumnFlex>

                                    <ColumnFlex
                                        className="gap-3.5"
                                    >
                                        {items.map(({ icon, title, date }) => (
                                            <RowFlex
                                                key={title}
                                                className="gap-2"
                                            >
                                                <Typography
                                                    as="span"
                                                >
                                                    {icon}
                                                </Typography>

                                                <ColumnFlex
                                                    className="text-start gap-3 lg:flex-row lg:justify-between lg:items-center"
                                                >
                                                    <Typography
                                                        as="h4"
                                                    >
                                                        {title}
                                                    </Typography>
                                                    <Typography
                                                        as="p"
                                                        fontSize="sm"
                                                        color="gray"
                                                        fontWeight={600}
                                                        whiteSpace="nowrap"
                                                    >
                                                        {date}
                                                    </Typography>
                                                </ColumnFlex>
                                            </RowFlex>
                                        ))}
                                    </ColumnFlex>
                                </ColumnFlex>
                            </div>
                        ))}
                    </div>
                </ColumnFlex>
            </Container>
        </section>
    )
}