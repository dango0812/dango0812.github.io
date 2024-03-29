// tailwind merge
import { twMerge } from "tailwind-merge";

const directionMapping = {
    vertical: 'flex flex-row',
    horizontal: 'flex flex-col',
};

const alignMapping = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    between: 'items-stretch'
};

const justifyMapping = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    stretch: 'justify-stretch'
};

const spacingMapping = {
    0: 'gap-0',
    2: 'gap-0.5',
    4: 'gap-1',
    8: 'gap-2',
    12: 'gap-3',
    16: 'gap-4',
    24: 'gap-6'
};

type Props = {
    className?: string,
    direction: keyof typeof directionMapping,
    align: keyof typeof alignMapping,
    justify: keyof typeof justifyMapping,
    spacing?: keyof typeof spacingMapping,
    children: React.ReactNode
}

export default function Stack({ className, direction, align, justify, spacing=0, children, ...props }: Props) {
    return (
        <div className={twMerge(`${directionMapping[direction]} ${alignMapping[align]} ${justifyMapping[justify]} ${spacingMapping[spacing]}`, className)} {...props}>
            {children}
        </div>
    )
}