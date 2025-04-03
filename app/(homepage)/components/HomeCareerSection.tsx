// react
import { Fragment } from "react";
// next
import Image from "next/image";
// mocks
import { _CareerSection } from "@_mocks/home";
// components
import { Container, RowFlex, ColumnFlex, Typography, Divider } from "@components/ui";
// icons
import StarIcon from "@assets/icons/StarIcon";
// tailwind
import { cn } from "@libs/tailwind";

const CATEGORIES = [
    { type: "company", label: _CareerSection.companyExperience },
    { type: "project", label: _CareerSection.project}
];

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

                {CATEGORIES.map(({ type, label }) => (
                    <ColumnFlex
                        key={type}
                        alignItems="center"
                        justifyContent="center"
                        className="gap-10"
                    >
                        <Divider
                            color="black"
                        >
                            <Typography
                                as="span"
                                color="gray"
                            >
                                {label}
                            </Typography>
                        </Divider>

                        <div
                            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10"
                        >
                            {_CareerSection.details
                                .filter((item) => item.type === type)
                                .map(({ date, title, description, isActive, link }, idx) => (
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
                                                    className={cn({
                                                        "fill-yellow-500": isActive,
                                                        "fill-zinc-300": !isActive,
                                                    })}
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
                                                className="gap-2.5"
                                            >
                                                <ColumnFlex
                                                    className="gap-2"
                                                >
                                                    <Typography
                                                        as="span"
                                                        fontSize="lg"
                                                        fontWeight={600}
                                                    >
                                                        {title}
                                                    </Typography>

                                                    <Typography
                                                        as="p"
                                                        color="gray"
                                                        className="leading-7"
                                                    >
                                                        {description}
                                                    </Typography>
                                                </ColumnFlex>

                                                {(() => {
                                                    if (link) {
                                                        if (type === "company") {
                                                            return (
                                                                <a
                                                                    href={link}
                                                                    className="flex items-center text-yellow-500 max-w-max"
                                                                >
                                                                    <span
                                                                        className="underline"
                                                                    >
                                                                        {_CareerSection.moreInfo}
                                                                    </span>
                                                                    <span className="ml-1 inline-block animate-rocket no-underline">
                                                                        🚀
                                                                    </span>
                                                                </a>
                                                            );
                                                        } else if (type === "project") {
                                                            return (
                                                                <a
                                                                    href={link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-max flex items-center gap-1.5 hover:underline"
                                                                >
                                                                    <Image
                                                                        src="/icons/icon-github.svg"
                                                                        alt="icon-github"
                                                                        width={16}
                                                                        height={16}
                                                                        priority
                                                                    />
                                                                    <Typography
                                                                        as="span"
                                                                        fontSize="sm"
                                                                    >
                                                                        {_CareerSection.github}
                                                                    </Typography>
                                                                </a>
                                                            );
                                                        }
                                                    }
                                                    return null;
                                                })()}
                                            </ColumnFlex>
                                        </div>
                                    </Fragment>
                                ))}
                        </div>
                    </ColumnFlex>
                ))}
            </Container>
        </section>
    );
}