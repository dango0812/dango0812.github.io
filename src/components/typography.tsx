// react
import { createElement } from 'react';
// tailwind merge
import { twMerge } from "tailwind-merge";


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
    color?: 'black' | 'white' | 'gray' | 'red' | 'orange' | 'green' | 'blue'
    children: React.ReactNode
}

export default function Typography({ className, variant='body2', noWrap=false, color='black', children, ...props }: Props) {

    const defaultStyles = {
        root: `${noWrap && 'truncate' || ''} font-default`,
        color: '',
        size: ''
    }

    switch (variant) {
        case 'h1':
            defaultStyles.size = 'text-7xl font-bold leading-snug'
            break;
        case 'h2':
            defaultStyles.size = 'text-6xl font-bold leading-none'
            break;
        case 'h3':
            defaultStyles.size = 'text-5xl font-semibold leading-none'
            break;
        case 'h4':
            defaultStyles.size = 'text-4xl font-semibold leading-none'
            break;
        case 'h5':
            defaultStyles.size = 'text-3xl font-medium leading-9'
            break;
        case 'h6':
            defaultStyles.size = 'text-2xl font-medium leading-8'
            break;
        case 'subtitle1':
            defaultStyles.size = 'text-xl font-medium leading-8'
            break;
        case 'subtitle2':
            defaultStyles.size = 'text-lg font-medium leading-7'
            break;
        case 'body1':
            defaultStyles.size = 'text-md font-normal leading-7'
            break;
        // default body2
        default:
            defaultStyles.size = 'text-sm font-normal leading-none'
    }

    if (noWrap) {
        defaultStyles.root = twMerge(defaultStyles.root, 'truncate')
    }

    if (color === 'black') {
        defaultStyles.color = 'text-black';

    } else if (color === 'white') {
        defaultStyles.color = 'text-white';

    } else {
        defaultStyles.color = `text-${color}-500`;
    }

    const elementProps = {
        className: twMerge(`${defaultStyles.root} ${defaultStyles.color} ${defaultStyles.size}`, className),
        variant,
        noWrap,
        color,
        ...props
    };

    return createElement(variantMapping[variant], elementProps, children);
}