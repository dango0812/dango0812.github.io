// cva
import { cva, VariantProps } from "class-variance-authority";
// cn
import { cn } from "@libs/tailwind";

export const containerVariants = cva(
    [
        "w-full",
        "flex items-start justify-stretch"
    ],
    {
        variants: {
            maxWidth: {
                xs: "max-w-2xl",
                sm: "max-w-3xl",
                md: "max-w-4xl",
                lg: "max-w-5xl",
                xl: "max-w-7xl",
                fullWidth: "max-w-full",
                auto: "container"
            }
        }
    }
)

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    maxWidth?: NonNullable<VariantProps<typeof containerVariants>["maxWidth"]>;
}

export function Container({
    children,
    className,
    maxWidth = "md"
}: ContainerProps) {
    return (
        <div
            className={cn(
                containerVariants({ maxWidth }),
                className
            )}
        >
            {children}
        </div>
    )
}