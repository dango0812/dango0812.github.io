// react
import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
// emotion
import { css } from "@emotion/react";
// yaml
import yaml from "js-yaml";
// components
import NotFoundPage from "@pages/404/page";
import CodeBlock from "@components/common/CodeBlock";
import { ColumnFlex, RowFlex } from "@components/common/FlexBox";
import { RootStyle, Title, Description, PeriodDate, Image, Link } from "@pages/project/detail/page.styles";
// types
import { ArticleType } from "@pages/project/detail/types/ArticleType";

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const [article, setArticle] = useState<ArticleType | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getArticle = async (slug: string) => {
        try {
            const response = await fetch(`/articles/${slug}.yaml`);
            
            const text = await response.text();
            if (text.startsWith("<!DOCTYPE html>") || text.includes("<html")) {
                throw new Error("Unexpected HTML response.");
            }

            const data = yaml.load(text) as ArticleType | null;
            setArticle(data);

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                return;
            }

            setError("An error occurred.");
        }
    };

    useEffect(() => {
        if (slug) {
            getArticle(slug);
        }
    }, [slug]);

    if (error) {
        return <NotFoundPage />
    }

    return (
        <RootStyle>
            <ColumnFlex
                gap={60}
            >
                <ColumnFlex
                    css={css`
                        text-align: center;
                    `}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Title>
                        {article?.title}
                    </Title>

                    <Description>
                        {article?.description}
                    </Description>
                    
                    <RowFlex
                        alignItems="center"
                        justifyContent="center"
                        gap={24}
                    >
                        <PeriodDate>
                            {article?.period}
                        </PeriodDate>
                        
                        <RowFlex
                            css={css`
                                width: auto;
                            `}
                            alignItems="center"
                            justifyContent="center"
                            gap={6}
                        >
                            {article?.website && (
                                <Link
                                    href={article?.website}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Website
                                </Link>
                            )}

                            {article?.github && (
                                <Link
                                    href={article?.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Github
                                </Link>
                            )}
                        </RowFlex>

                    </RowFlex>
                </ColumnFlex>

                <ColumnFlex
                    gap={40}
                >
                    <Image
                        width={800}
                        height={557}
                        src={article?.feature_image}
                        alt={article?.feature_image_alt}
                    />

                    <ColumnFlex>
                        {article?.sections.map(({ title, contents }, idx) => (
                            <Fragment
                                key={`section-${idx}`}
                            >
                                {title && (
                                    <h2>
                                        {title}
                                    </h2>
                                )}

                                {contents.map((text, idx) => (
                                    <Fragment
                                        key={`content-${idx}`}
                                    >
                                        {text.startsWith("code:") ? (
                                            <CodeBlock
                                                code={text}
                                            />
                                        ) : (
                                            <p>
                                                {text}
                                            </p>
                                        )}
                                    </Fragment>
                                ))}
                            </Fragment>
                        ))}
                    </ColumnFlex>
                </ColumnFlex>
            </ColumnFlex>
        </RootStyle>
    )
}