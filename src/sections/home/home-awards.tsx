import { memo } from 'react';

// components
import Container from 'src/components/container';
import Stack from 'src/components/stack';
import Typography from 'src/components/typography';

function HomeAwards() {

    return (
        <section className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Awards 🏆
                </Typography>
                <hr className="w-full h-px bg-slate-500" />
                <Stack direction='horizontal' align='center' justify='center' className='md:flex-row gap-16'>
                    {['award_1.jpg', 'award_2.jpg'].map((image, idx) => (
                        <img key={idx} loading="lazy" src={`/assets/awards/${image}`} alt="" className='w-auto md:w-[35%] h-24' />
                    ))}
                </Stack>
            </Container>
        </section>
    )
}

export default memo(HomeAwards)