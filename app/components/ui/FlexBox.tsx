// react
import { forwardRef } from "react";
// cva
import { cva, VariantProps } from "class-variance-authority";
// libs
import { cn } from "@libs/tailwind";

export const flexBoxVariants = cva(
    [
        "w-full flex"
    ],
    {
        variants: {
            wrap: {
                "noWrap": "flex-nowrap",
                "wrap": "flex-wrap",
                "reverse": "flex-wrap-reverse"
            },
            alignItems: {
                "flex-start": "items-start",
                "flex-end": "items-end",
                "center": "items-center",
                "stretch": "items-stretch"
            },
            justifyContent: {
                "flex-start": "justify-start",
                "flex-end": "justify-end",
                "center": "justify-center",
                "space-between": "justify-between",
                "space-around": "justify-around",
                "space-evenly": "justify-evenly",
                "stretch": "justify-stretch"
            }
        }
    }
)

export interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    wrap?: NonNullable<VariantProps<typeof flexBoxVariants>["wrap"]>;
    alignItems?: NonNullable<VariantProps<typeof flexBoxVariants>["alignItems"]>;
    justifyContent?: NonNullable<VariantProps<typeof flexBoxVariants>["justifyContent"]>;
}

export const RowFlex = forwardRef<HTMLDivElement, FlexBoxProps>(({
    children,
    className,
    wrap,
    alignItems = "stretch",
    justifyContent = "flex-start"
}, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex-row",
                flexBoxVariants({ wrap, alignItems, justifyContent }),
                className
            )}
        >
            {children}
        </div>
    );
});
RowFlex.displayName = "RowFlex";

export const ColumnFlex = forwardRef<HTMLDivElement, FlexBoxProps>(({
    children,
    className,
    wrap,
    alignItems = "stretch",
    justifyContent = "flex-start"
}, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex-col",
                flexBoxVariants({ wrap, alignItems, justifyContent }),
                className
            )}
        >
            {children}
        </div>
    );
});
ColumnFlex.displayName = "ColumnFlex";