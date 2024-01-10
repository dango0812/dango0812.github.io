// react
import { useCallback, useState } from 'react';

// components
import RoundButton from 'src/components/button/round-button';
import Container from 'src/components/container';
import Stack from 'src/components/stack';
import Typography from 'src/components/typography';

/*
const PROJECTS = [
    {
        title: 'Portfolio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        useTechnology: ['react', 'typescript', 'tailwindcss', 'eslint', 'pnpm'],
        tag: 'Front-end',
        image: '/assets/port.png',
        date: '2022년 09월 01일'
    },
    {
        title: 'Blur.Me (Video)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        useTechnology: ['React'],
        tag: 'Full-stack',
        image: '/logo192.png',
        date: '2022년 09월 01일'
    },
    {
        title: '비식별화',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        useTechnology: ['React'],
        tag: 'Full-stack',
        image: '/logo192.png',
        date: '2022년 09월 01일'
    },
    {
        title: 'GS엠비즈 EV-Smart & 한전 Ai-Ev',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        useTechnology: ['React'],
        tag: 'Front-end',
        image: '/logo192.png',
        date: '2022년 09월 01일'
    }
];
*/

const SELECT_TYPE = ['전체', '소스코드 포함', '소스코드 미포함']

export default function HomeProjects() {
    const [selected, setSelected] = useState(SELECT_TYPE[0]);

    const handleSelect = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setSelected(event.currentTarget.value);
    }, []);

    return (
        <section className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Projects ✨
                </Typography>
                <hr className="w-full h-px border bg-red-500 dark:bg-gray-500" />

                <Stack direction='vertical' justify='start' align='center' className='flex-wrap w-full md:justify-center mt-4'>
                    {SELECT_TYPE.map((text) => (
                        <RoundButton key={text} value={text} color={selected === text ? 'blue' : 'dark'} fullWidth={text === SELECT_TYPE[0]} size='medium' onClick={handleSelect}>
                            {text}
                        </RoundButton>
                    ))}
                </Stack>


                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="t"/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="s"/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                    </div>
                </div>


            </Container>
        </section>
    )
}