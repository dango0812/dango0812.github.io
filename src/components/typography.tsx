import React, { createElement } from 'react'

const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p'
}

type Props = {
    className?: string,
    variant?: keyof typeof variantMapping,
    noWrap?: boolean,
    color?: 'black' | 'gray' | 'white' | 'red' | 'orange' | 'green' | 'blue'
    children: React.ReactNode
}

export default function Typography({ className='', variant='body2', noWrap=false, color='black', children, ...props }: Props) {

    let defaultTypographyStyle = `${noWrap && 'truncate' || ''} font-default text-${color}-500 `

    switch (variant) {
        case 'h1':
            defaultTypographyStyle += 'text-8xl font-bold leading-snug'
            break;
        case 'h2':
            defaultTypographyStyle += 'text-7xl font-bold leading-none'
            break;
        case 'h3':
            defaultTypographyStyle += 'text-6xl font-semibold leading-none'
            break;
        case 'h4':
            defaultTypographyStyle += 'text-5xl font-semibold leading-none'
            break;
        case 'h5':
            defaultTypographyStyle += 'text-4xl font-medium leading-9'
            break;
        case 'h6':
            defaultTypographyStyle += 'text-3xl font-medium leading-8'
            break;
        case 'subtitle1':
            defaultTypographyStyle += 'text-2xl font-medium leading-8'
            break;
        case 'subtitle2':
            defaultTypographyStyle += 'text-xl font-medium leading-7'
            break;
        case 'body1':
            defaultTypographyStyle += 'text-lg font-medium leading-7'
            break;
        // default body2
        default:
            defaultTypographyStyle += 'text-md font-medium leading-none'
    }

    const elementProps = {
        noWrap,
        className: `${defaultTypographyStyle} ${className}`,
        color,
        ...props
    };

    return createElement(variantMapping[variant], elementProps, children);
}