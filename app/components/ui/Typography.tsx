// react
import { createElement } from "react";
// cva
import { cva, VariantProps } from "class-variance-authority";
// cn
import { cn } from "@libs/tailwind";

export type typographyHtmlTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "em" | "pre" | "del" | "ins" | "span" | "p";

export const typographyVariants = cva(
    "antialiased",
    {
        variants: {
            fontSize: {
                xs: "text-xs", // 12px
                sm: "text-sm", // 14px
                base: "text-base", // 16px
                lg: "text-lg", // 18px
                xl: "text-xl", // 20px
                "2xl": "text-3xl" // 30px
            },
            fontWeight: {
                100: "font-thin",
                200: "font-extralight",
                300: "font-light",
                400: "font-normal",
                500: "font-medium",
                600: "font-semibold",
                700: "font-bold",
                800: "font-extrabold"
            },
            whiteSpace: {
                normal: "whitespace-normal",
                nowrap: "whitespace-nowrap",
                pre: "whitespace-pre",
                preline: "whitespace-pre-line",
                prewrap: "whitespace-pre-wrap",
                breakspaces: "whitespace-break-spaces"
            },
            color: {
                primary: "text-yellow-500",
                white: "text-white",
                black: "text-gray-800",
                gray: "text-gray-500",
                danger: "text-danger-500"
            }
        }
    }
)

export interface TypographyProps {
    as: typographyHtmlTag;
    children: React.ReactNode;
    className?: string;
    fontSize?: NonNullable<VariantProps<typeof typographyVariants>["fontSize"]>;
    fontWeight?: NonNullable<VariantProps<typeof typographyVariants>["fontWeight"]>;
    whiteSpace?: NonNullable<VariantProps<typeof typographyVariants>["whiteSpace"]>;
    color?: NonNullable<VariantProps<typeof typographyVariants>["color"]>;
    noWrap?: boolean;
}

export function Typography({
    as,
    children,
    className,
    fontSize = "base",
    fontWeight = 500,
    whiteSpace,
    color = "black",
    noWrap = false,
}: TypographyProps) {
    return createElement(
        as,
        {
            className: cn(
                typographyVariants({
                    fontSize,
                    fontWeight,
                    whiteSpace,
                    color,
                }),
                {
                    "truncate whitespace-nowrap": noWrap
                },
                className
            )
        },
        children
    )
}