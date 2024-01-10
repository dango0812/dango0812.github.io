// tailwind merge
import { twMerge } from "tailwind-merge";

type Props = {
    icon: string,
    color: string,
    className?: string
}

/**
 * icon type: https://simpleicons.org
 * @param icon string => icon type
 * @param color string => white | dark
 * @returns badge component
 */

export default function ShieldsBadge({ icon, color, className, ...props }: Props) {
    return (
        <img src={`https://img.shields.io/badge/${icon}-${color === 'white' ? 'FFFFFF' : '212b36'}?style=for-the-badge&logo=${icon}`} alt={`${icon}-badge`} className={twMerge('rounded-md', className)} {...props}/>
    )
}