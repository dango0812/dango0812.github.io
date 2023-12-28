// react
import { memo } from 'react'
// components
import Typography from 'src/components/typography';
import Stack from 'src/components/stack';
import Container from 'src/components/container';

function HomeHero() {

    const CONTACT_CHANNEL_INFORMATION = [
        {
            icon: '✉️',
            value: 'ehdrbsla12000@gmail.com',
            link: 'mailto:ehdrbsla12000@gmail.com'
        },
        {
            icon: '🧑‍💻',
            value: 'Github',
            link: 'https://github.com/dango0812'
        },
        {
            icon: '📚',
            value: 'Study Log',
            link: 'https://github.com/dango0812/study-log'
        },
    ];

    return (
        <section>
            <Container size='lg'>
                <div className='grid grid-flow-row md:grid-cols-2 gap-8'>
                    <div className='flex justify-center items-center'>
                        <img className="h-48 md:h-72" src="/assets/profile.jpg" alt="profile"/>
                    </div>
                    <div className='flex flex-col justify-center gap-8'>
                        <Stack direction='horizontal' className='items-center md:items-start' spacing={8}>
                            <Typography variant='h4' className='dark:text-white'>
                                김 동 규
                            </Typography>
                            <Typography variant='h6' className='font-normal dark:text-white'>
                                Web Frontend Developer 🫠
                            </Typography>
                        </Stack>
                        <Stack direction='horizontal' justify='start' align='start' spacing={8}>
                            <hr className="w-full h-px border bg-red-500 dark:bg-gray-500" />
                            {CONTACT_CHANNEL_INFORMATION.map((info) => (
                                <a className='max-w-max md:hover:scale-110 transition-transform ease-in-out duration-300' href={info.link} target='_blank' rel="noreferrer noopener">
                                    <Typography variant='subtitle1' className='dark:text-white'>
                                        {info.icon} {info.value}
                                    </Typography>
                                </a>
                            ))}
                            <hr className="w-full h-px border bg-red-500 dark:bg-gray-500" />
                        </Stack>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default memo(HomeHero);