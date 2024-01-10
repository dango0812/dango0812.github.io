// tailwind merge
import { twMerge } from "tailwind-merge";

const colorMapping = {
    dark: 'bg-gray-200',
    red: 'bg-red-200',
    green: 'bg-green-200',
    orange: 'bg-orange-200',
    yellow: 'bg-yellow-200',
    blue: 'bg-blue-200',
    purple: 'bg-purple-200',
    pink: 'bg-pink-200'
}

type Props = {
    children: React.ReactNode,
    color?: keyof typeof colorMapping,
    className?: string
}

export default function Label({ children, color='dark', className, ...props }: Props) {
    return (
        <span className={twMerge(`inline-block px-1.5 py-1 text-xs font-bold rounded-lg text-${color}-800 ${colorMapping[color]}`, className)} {...props}>
            {children}
        </span>
    )
}