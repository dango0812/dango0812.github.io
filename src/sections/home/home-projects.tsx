// components
import Typography from 'src/components/typography'
import Card from 'src/components/card'
import Stack from 'src/components/stack'
import Label from 'src/components/label'

export default function HomeProjects() {

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

    return (
        <>
            <Typography variant='h6'>
                Projects 👻
            </Typography>
            <div className='grid grid-flow-row grid-cols-2 gap-6'>
                {PROJECTS.map((project) => (
                    <Card className='px-0 py-0 overflow-hidden w-full h-full'>
                        <img className="w-full h-[180px] object-cover " src={project.image} alt="project"/>
                        
                        <Stack direction='horizontal' align='start' className='px-4' spacing={8}>
                            <Stack direction='vertical' align='center' justify='between'>
                                <Typography variant='subtitle1'>
                                    {project.title}
                                </Typography>
                                <Label color='green'>
                                    {project.tag}
                                </Label>
                            </Stack>
                            <Typography variant='body1' color='gray' className='w-full line-clamp-2'>
                                {project.description}
                            </Typography>
                            <Stack direction='vertical' spacing={12}>
                                {project.useTechnology.map((language) => (
                                    <Label color='blue'>
                                        {language}
                                    </Label>
                                ))}
                            </Stack>
                            <Typography variant='body1' color='gray'>
                                {project.date}
                            </Typography>
                        </Stack>
                    </Card>
                ))}
            </div>
        </>
    )
}