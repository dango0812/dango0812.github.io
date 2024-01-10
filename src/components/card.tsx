// react
import React from 'react';
// tailwind merge
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode,
    className?: string
}

export default function Card({ children, className, ...props }: Props) {
    return (
        <div className={twMerge('block py-4 px-6 bg-white dark:bg-[#212b36] border border-gray-200 dark:border-[#202b37] rounded-lg shadow-2xl', className)} {...props}>
            {children}
        </div>
    )
}