// mocks
import { _CoreCompetenciesSection } from "@_mocks/home";
// components
import { Container, RowFlex, ColumnFlex, Typography } from "@components/ui";
// libs
import { cn } from "@libs/tailwind";

export default function HeroCoreCompetenciesSection() {
    return (
        <section
            id="coreCompetencies"
            className="py-15 px-5 lg:px-0"
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
                        {_CoreCompetenciesSection.title}
                    </Typography>

                    <Typography
                        as="em"
                        fontSize="lg"
                        fontWeight={700}
                        className="not-italic"
                    >
                        {_CoreCompetenciesSection.subtitle}
                    </Typography>
                    
                </ColumnFlex>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
                >
                    {_CoreCompetenciesSection.details.map(({ icon, title, description }, idx, arr) => (
                        <div
                            key={idx}
                            className={cn(
                                "block rounded-3xl bg-gray-100 border border-gray-100",
                                {
                                    "md:col-span-2 lg:col-span-1": idx === arr.length -1
                                }
                            )}
                        >
                            <article
                                className="p-5"
                            >
                                <RowFlex
                                    alignItems="center"
                                    justifyContent="center"
                                    className="rounded-xl w-12 h-12 bg-gray-200 cursor-default"
                                >
                                    {icon}
                                </RowFlex>
                                
                                <Typography
                                    as="h3"
                                    fontSize="lg"
                                    fontWeight={600}
                                    className="mt-5"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    as="p"
                                    color="gray"
                                    className="mt-2.5"
                                >
                                    {description}
                                </Typography>
                            </article>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}