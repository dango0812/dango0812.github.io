// mocks
import { _HomeContactSection } from "@_mocks/home";
// components
import { Container, ColumnFlex, Typography, RowFlex } from "@components/ui";

export default function HomeContactSection() {
    return (
        <section
            id="contact"
            className="py-25 px-5 lg:px-0 bg-gray-50"
        >
            <Container
                className="flex flex-col items-center justify-center gap-10"
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
                        {_HomeContactSection.title}
                    </Typography>

                    <Typography
                        as="em"
                        fontSize="lg"
                        fontWeight={700}
                        className="not-italic"
                    >
                        {_HomeContactSection.subtitle}
                    </Typography>
                </ColumnFlex>

                <Container
                    maxWidth="xs"
                    className="w-full max-w-80"
                >
                    <ColumnFlex
                        alignItems="center"
                        justifyContent="center"
                        className="gap-1"
                    >
                        {_HomeContactSection.contactInfo.map(({ title, content, link }) => (
                            <RowFlex
                                key={title}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Typography
                                    as="span"
                                    fontWeight={600}
                                >
                                    {title}
                                </Typography>

                                <a
                                    href={link}
                                    target="_blank"
                                    className="hover:underline"
                                >
                                    {content}
                                </a>
                            </RowFlex>
                        ))}
                    </ColumnFlex>
                </Container>
            </Container>
        </section>
    )
}