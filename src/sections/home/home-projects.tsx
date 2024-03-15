// components
import Accordion from 'src/components/accordion';
import Badge from 'src/components/badge/badge';
import ShieldsBadge from 'src/components/badge/shields-badge';
import Container from 'src/components/container';
import Stack from 'src/components/stack';
import Typography from 'src/components/typography';

const PROJECTS = [
    {
        title: 'Portfolio Web 🐯',
        description: `페이지 한 장으로 모든 모습을 보여줄 수 없지만,\nUI를 어떻게 설계하면 나에 대해 빠르게 파악할 수 있을까? 고민을 많이 할 수 있어서 좋았던 프로젝트였어요.\n프로젝트를 통해 개발에 대한 나의 마음가짐, 기술적인 역량, 수상 내역, 프로젝트, 블로그를 확인할 수 있어요.`,
        image: "portfolio.jpg",
        tags: ['react', 'typescript', 'tailwind-css', 'react-query', 'eslint', 'prettierrc', 'pnpm', 'github-actions'],
        expanded: true,
        url: 'https://github.com/dango0812/dango0812.github.io',
        startDate: '2023. 12. 13',
        endDate: '2024. 01. 24'
    }
];

export default function HomeProjects() {

    return (
        <section className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Projects ✨
                </Typography>
                <hr className="w-full h-px border bg-red-500 dark:bg-gray-500" />

                {PROJECTS.map((project) => (
                    <Accordion key={project.title} title={project.title} expanded={project.expanded}>
                        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img className='rounded-xl' src={`assets/projects/${project.image}`} alt="" />
                            </div>

                            <Stack direction='horizontal' align='start' justify='between' spacing={24}>
                                <Typography variant='body1' className='whitespace-pre-wrap dark:text-white'>
                                    {project.description}
                                </Typography>

                                <Stack className='flex-wrap' direction='vertical' align='start' justify='start' spacing={16}>
                                    {project.tags.map((tag) => (
                                        <Badge color='blue'>
                                            {tag}
                                        </Badge>
                                    ))}
                                </Stack>

                                <Stack className='w-full' direction='vertical' align='center' justify='between'>
                                    <a href={project.url} target='_blank' rel="noreferrer noopener">
                                        <ShieldsBadge icon="github" color="black"/>
                                    </a>

                                    <div className='text-gray-300'>
                                        {project.startDate} ~ {project.endDate}
                                    </div>
                                </Stack>
                            </Stack>
                        </div>
                    </Accordion>
                ))}
            </Container>
        </section>
    )
}