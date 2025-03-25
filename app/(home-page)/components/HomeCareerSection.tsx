// react
import { Fragment } from "react";
// mocks
import { _CareerSection } from "@_mocks/home";
// components
import { Container, RowFlex, ColumnFlex, Typography, Divider } from "@components/ui";
// icons
import StarIcon from "@assets/icons/StarIcon";
// libs
import { cn } from "@libs/tailwind";

export default function HomeCareerSection() {
    return (
        <section
            id="career"
            className="py-15 px-5 lg:px-0"
        >
            <Container
                maxWidth="xs"
                className="flex flex-col gap-10"
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
                        {_CareerSection.title}
                    </Typography>

                    <Typography
                        as="em"
                        fontSize="lg"
                        fontWeight={600}
                        className="not-italic"
                    >
                        {_CareerSection.subtitle}
                    </Typography>
                </ColumnFlex>

                <Divider>
                    {_CareerSection.experience}
                </Divider>

                <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-10 mx-auto"
                >
                    {_CareerSection.workExperience
                    .map(({ date, company, description, currentEmployed, link }, idx) => (
                        <Fragment
                            key={idx}
                        >
                            <div
                                className="col-span-1"
                            >
                                <RowFlex
                                    alignItems="center"
                                    className="gap-2"
                                >
                                    <StarIcon
                                        className={cn(
                                            {
                                                "fill-yellow-500" : currentEmployed,
                                                "fill-zinc-300": !currentEmployed
                                            }
                                        )}
                                        width={18}
                                        height={18}
                                    />

                                    <Typography
                                        as="h3"
                                        fontWeight={600}
                                    >
                                        {date}
                                    </Typography>
                                </RowFlex>
                            </div>

                            <div
                                className="col-span-2"
                            >
                                <ColumnFlex
                                    className="gap-5"
                                >
                                    <ColumnFlex
                                        className="gap-1"
                                    >
                                        <Typography
                                            as="span"
                                            fontSize="lg"
                                            fontWeight={600}
                                        >
                                            {company}
                                        </Typography>

                                        <Typography
                                            as="p"
                                            color="gray"
                                        >
                                            {description}
                                        </Typography>
                                    </ColumnFlex>

                                    {link && (
                                        <a
                                            href={link}
                                            className="flex items-center text-yellow-500 max-w-max"
                                        >
                                            <span
                                                className="underline"
                                            >
                                                주요 업무 내용 보기
                                            </span>
                                            <span className="ml-1 inline-block animate-rocket no-underline">
                                                🚀
                                            </span>
                                        </a>
                                    )}
                                </ColumnFlex>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </Container>
        </section>
    )
}