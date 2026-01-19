// cva
import { cva, VariantProps } from "class-variance-authority";
// libs
import { cn } from "@libs/tailwind";

export const containerVariants = cva(
    [
        "w-full flex items-start justify-stretch"
    ],
    {
        variants: {
            maxWidth: {
                xs: "max-w-2xl mx-auto",
                sm: "max-w-3xl mx-auto",
                md: "max-w-4xl mx-auto",
                lg: "max-w-5xl mx-auto",
                xl: "max-w-7xl mx-auto",
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