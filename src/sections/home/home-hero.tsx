// react
import { memo } from 'react'
// components
import Typography from 'src/components/typography';
import Stack from 'src/components/stack';
import Container from 'src/components/container';

function HomeHero() {
    return (
        <Container size='lg' className='pt-16'>
            <Stack direction='horizontal' align='center' justify='center' spacing={16}>
                <img className="rounded-full w-32 h-32" src="/assets/profile.jpg" alt="profile"/>
                <Stack direction='horizontal' spacing={4}>
                    <Typography variant='h6'>
                        김동규
                    </Typography>
                    <Typography variant='body1' className='font-normal'>
                        Web Frontend Developer 🫠
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default memo(HomeHero);