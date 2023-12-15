import React from 'react';

type Props = {
    className?: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full',
    children: React.ReactNode
}

export default function Container({ className='', size='full', children, ...props }: Props) {
    
    let defaultContainerSize = 'mx-auto ';
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
        <div className={`${defaultContainerSize} ${className}`} {...props}>
            {children}
        </div>
    )
}