// react
import React from 'react';
// tailwind merge

// hooks
import { useBoolean } from 'src/hooks/useBoolean';

// components
import Stack from './stack';
import Typography from './typography';

type Props = {
    children: React.ReactNode;
    title: string;
    expanded: boolean;
    className?: string;
}

export default function Accordion({ children, title, expanded, className, ...props }: Props) {
    const { value, onToggle } = useBoolean(expanded);

    return (
        <Stack direction='horizontal' align='start' justify='start' spacing={0}>
            <button type='button' className={`flex items-center justify-between ${value ? 'rounded-t-xl border-b-0 border border-slate-700 bg-[#212b36]' : 'border-b border-slate-700'} px-6 py-4 shadow-2xl w-full`} onClick={onToggle} {...props}>
                <Typography variant='subtitle2' className='dark:text-white'>
                    {title}
                </Typography>
                <div className='w-4 h-4'>
                    <img src={`${value ? '/assets/icons/caret-down.svg' : '/assets/icons/caret.svg'}`} alt="" />
                </div>
            </button>

            {value && (
                <div className="py-6 px-8 border text-white border-slate-700 rounded-b-xl">
                    {children}
                </div>
            )}
        </Stack>
    )
}