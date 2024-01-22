// tailwind merge
import { twMerge } from "tailwind-merge";

const colorMapping = {
    dark: 'bg-gray-200 text-gray-800',
    red: 'bg-red-200 text-red-800',
    green: 'bg-green-200 text-green-800',
    orange: 'bg-orange-200 text-orange-800',
    yellow: 'bg-yellow-200 text-yellow-800',
    blue: 'bg-sky-200 text-blue-800',
    purple: 'bg-purple-200 text-purple-800',
    pink: 'bg-pink-200 text-pink-800'
}

type Props = {
    children: React.ReactNode,
    color?: keyof typeof colorMapping,
    className?: string
}

export default function Badge({ children, color='dark', className, ...props }: Props) {
    return (
        <span className={twMerge(`inline-block px-1.5 py-1 text-xs font-bold rounded-lg ${colorMapping[color]}`, className)} {...props}>
            {children}
        </span>
    )
}