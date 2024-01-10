// tailwind merge
import { twMerge } from "tailwind-merge";

import Typography from '../typography';

type Props = {
    children: React.ReactNode;
    value?: string;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | 'large';
    color: 'blue' | 'dark';
    onClick?: any;
    className?: string;
}

export default function RoundButton({ children, value, fullWidth, size='medium', color, className, ...props }: Props) {

    const defaultStyles = {
        root: 'border rounded-full px-5 py-2.5 me-3 mb-4 flex-grow md:flex-grow-0',
        color: '',
        size: ''
    }

    if (fullWidth) {
        defaultStyles.size = 'w-full md:w-auto';

    } else {
        defaultStyles.size += 'w-auto';
    }

    if (color === 'blue') {
        defaultStyles.color = 'border-blue-600 bg-blue-600';

    } else if (color === 'dark') {
        defaultStyles.color += 'border-[#212b36] bg-[#212b36] hover:bg-slate-700 outline-none';
    }

    switch(size) {
        case 'small':
            defaultStyles.size += twMerge(defaultStyles.size, 'h-[36px]');
            break;

        case 'large':
            defaultStyles.size += twMerge(defaultStyles.size, 'h-[48px]');
            break;

        // default medium
        default:
            defaultStyles.size += twMerge(defaultStyles.size, 'h-[46px]');
    }

    return (
        <button type="button" value={value} className={twMerge(`${defaultStyles.root} ${defaultStyles.color} ${defaultStyles.size}`, className)} {...props}>
            <Typography variant='body1' color='white'>
                {children}
            </Typography>
        </button>
    )
}