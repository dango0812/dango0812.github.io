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
                primary: "before:bg-yellow-500 after:bg-yellow-500",
                black: "before:bg-gray-800 after:bg-gray-800",
                gray: "before:bg-gray-500 after:bg-gray-500",
                danger: "before:bg-danger-500 after:bg-danger-500"
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