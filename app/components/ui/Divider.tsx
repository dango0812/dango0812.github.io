// cva
import { cva, VariantProps } from "class-variance-authority";
// cn
import { cn } from "@libs/tailwind";

const leftLine = "before:content-[''] before:flex-1 before:h-0.5";
const rightLine = "after:content-[''] after:flex-1 after:h-0.5";

export const dividerVariants = cva(
    "flex flex-row items-center self-stretch",
    {
        variants: {
            color: {
                primary: "before:bg-gradient-to-r before:from-yellow-800/0 before:to-yellow-800/15 after:bg-gradient-to-r after:from-yellow-800/15 after:to-yellow-800/0",
                black: "before:bg-gradient-to-r before:from-gray-800/0 before:to-gray-800/15 after:bg-gradient-to-r after:from-gray-800/15 after:to-gray-800/0",
                gray: "before:bg-gradient-to-r before:from-gray-800/0 before:to-gray-800/15 after:bg-gradient-to-r after:from-gray-800/15 after:to-gray-800/0",
                danger: "before:bg-gradient-to-r before:from-danger-800/0 before:to-danger-800/15 after:bg-gradient-to-r after:from-danger-800/15 after:to-danger-800/0"
            },
            align: {
                left: rightLine,
                center: `${leftLine} ${rightLine}`,
                right: leftLine
            },
            hasContent: {
                true: "gap-5",
                false: "gap-0"
            }
        }
    }
)

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    color?: NonNullable<VariantProps<typeof dividerVariants>["color"]>;
    align?: NonNullable<VariantProps<typeof dividerVariants>["align"]>;
}

export function Divider({
    children,
    className,
    color = "black",
    align = "center",
    ...props
}: DividerProps) {
    const hasContent = !!children;

    return (
        <div
            className={cn(
                dividerVariants({ color, align, hasContent }),
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}