export interface ContentType {
    title?: string;
    contents: Array<string>;
}

export interface ArticleType {
    slug: string;
    title: string;
    description: string;
    feature_image: string;
    feature_image_alt: string;
    period: string;
    website: string | null;
    github: string | null;
    sections: Array<ContentType>
}