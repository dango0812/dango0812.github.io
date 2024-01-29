import { memo } from 'react';
import Stack from './stack';
import Typography from './typography';

type Props = {
    title: string;
    description: string;
}

function EmptyContent({ title, description }: Props) {
    return (
        <Stack direction='horizontal' align='center' justify='center' spacing={8}>
            <img className='fill-slate-200' src="/assets/icons/empty/ic_content.svg" alt="empty"/>
            <Typography variant='h5' className='dark:text-white'>
                {title}
            </Typography>
            <Typography variant='subtitle2' className='text-center whitespace-pre dark:text-white'>
                {description}
            </Typography>
        </Stack>
    )
}

export default memo(EmptyContent);