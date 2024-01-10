// react
import React from 'react';
// tailwind merge
import { twMerge } from "tailwind-merge";

type Props = {
    className?: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full',
    children: React.ReactNode
}

export default function Container({ className, size='full', children, ...props }: Props) {

    let defaultContainerSize = '';
    switch(size) {
        case 'sm':
            defaultContainerSize += 'max-w-screen-sm';
            break;

        case 'md':
            defaultContainerSize += 'max-w-screen-md';
            break;

        case 'lg':
            defaultContainerSize += 'max-w-screen-lg';
            break;

        case 'xl':
            defaultContainerSize += 'max-w-screen-xl';
            break;

        default:
            defaultContainerSize += 'max-w-full';
    }
    return (
        <div className={twMerge(`mx-auto ${defaultContainerSize}`, className)} {...props}>
            {children}
        </div>
    )
}