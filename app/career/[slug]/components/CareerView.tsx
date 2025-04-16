"use client";

// react
import { useState } from "react";
// components
import { ColumnFlex, Typography } from "@components/ui";
// tailwind
import { cn } from "@libs/tailwind";

interface CareerViewProps {
    career: CareerItem[];
}

interface CareerItem {
    year: number;
    projects: CareerContent[];
}

interface CareerContent {
    title: string;
    usedTech: string[];
    tasks: string[];
}

export default function CareerView({
    career
}: CareerViewProps) {
    const [selectedYear, setSelectedYear] = useState(career[0]?.year ?? null);

    const handleSelectedYear = (year: number) => {
        if (selectedYear === year) {
            return;
        }

        setSelectedYear(year);
    };

    return (
        <section
            className="pt-10 pb-5 lg:pt-20 lg:pb-10"
        >
            <ColumnFlex
                className="sm:flex-row"
            >
                <ul
                    className={cn(
                        "flex flex-row scrollbar-x",
                        "sm:flex-col sm:gap-6 sm:pr-6 sm:border-r sm:border-gray-300"
                    )}
                >
                    {career.map(({ year }) => (
                        <li
                            key={year}
                            className={cn(
                                "group flex flex-col items-center justify-center flex-1 min-w-20 transition-colors transition-discrete cursor-pointer border-b border-b-gray-300 pb-2",
                                "sm:flex-row sm:flex-none sm:gap-2 sm:w-full sm:px-8 sm:py-3 sm:border-b-0 sm:pb-0",
                            )}
                            onClick={() => handleSelectedYear(year)}
                        >
                            <div
                                className={cn(
                                    "w-3 h-3 rounded-full transition-all ease-in-out duration-300",
                                    {
                                        "bg-yellow-500 scale-100" : selectedYear === year,
                                        "bg-gray-300 scale-90" : selectedYear !== year,
                                    }
                                )}
                            />

                            <Typography
                                as="span"
                                fontWeight={700}
                                className={cn(
                                    "transition-colors",
                                    {
                                        "text-yellow-500 text-lg": selectedYear === year,
                                        "text-gray-400": selectedYear !== year,
                                    }
                                )}
                            >
                                {year}
                            </Typography>
                        </li>
                    ))}
                </ul>

                <ColumnFlex
                    className="pt-10 sm:pt-3.5 sm:flex-row sm:flex-1 sm:pl-14"
                >
                    {career
                        .filter(({ year }) => year === selectedYear)
                        .map(({ projects }, idx) => (
                            <ColumnFlex
                                key={idx}
                                className="gap-10"
                            >
                                {projects.map(({ title, usedTech, tasks }) => (
                                    <ColumnFlex
                                        key={title}
                                    >
                                        <ColumnFlex
                                            className="gap-1.5"
                                        >
                                            <Typography
                                                as="span"
                                                color="primary"
                                                fontWeight={600}
                                            >
                                                📌 {title}
                                            </Typography>

                                            <Typography
                                                as="span"
                                                color="gray"
                                                fontWeight={400}
                                            >
                                                사용 기술: {usedTech.join(", ")}
                                            </Typography>
                                            
                                            <ul
                                                className="flex flex-col flex-wrap mt-2 pl-3 sm:pl-6 gap-2.5"
                                            >
                                                {tasks.map((task, idx) => {
                                                    const isBracketedTitle = task.startsWith("[") && task.endsWith("]");

                                                    return (
                                                        <li
                                                            key={idx}
                                                        >
                                                            <Typography
                                                                as="p"
                                                                className={cn(
                                                                    {
                                                                        "text-yellow-500 font-semibold": isBracketedTitle
                                                                    }
                                                                )}
                                                                
                                                            >
                                                                {(() => {
                                                                    if (isBracketedTitle) {
                                                                        return task;
                                                                    }

                                                                    return `- ${task}`;
                                                                })()}
                                                            </Typography>
                                                        </li>
                                                    )
                                                })}
                                            </ul>

                                        </ColumnFlex>
                                    </ColumnFlex>
                                ))}
                            </ColumnFlex>
                        ))
                    }
                </ColumnFlex>
            </ColumnFlex>
        </section>
    )
}