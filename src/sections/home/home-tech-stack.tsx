import { memo } from 'react'

// components
import ShieldsBadge from 'src/components/badge/shields-badge'
import Container from 'src/components/container'
import Stack from 'src/components/stack'
import Typography from 'src/components/typography'

// useTheme
import { useThemeContext } from 'src/theme/theme-context'

const TECH_STACK = [
    {
        id: 'core',
        title: '코어',
        list: ['react', 'next.js', 'javascript', 'typescript']
    },
    {
        id: 'state-management',
        title: '상태 관리',
        list: ['recoil', 'reactquery', 'swr']
    },
    {
        id: 'style',
        title: '스타일링',
        list: ['css3', 'emotion', 'styledcomponents','mui', 'tailwindcss']
    },
    {
        id: 'action',
        title: 'CI/CD',
        list: ['githubactions']
    },
    {
        id: 'aws',
        title: 'AWS',
        list: ['awslambda', 'amazonapigateway', 'amazons3', 'amazondynamodb', 'awsamplify', 'awscognito']
    }
];

function HomeTechStack() {

    const { currentTheme } = useThemeContext();

    return (
        <section className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Tech Stack 👨‍🔧
                </Typography>
                <hr className="w-full h-px bg-slate-500" />

                <Stack direction='horizontal' align='start' justify='start' spacing={8}>
                    {TECH_STACK.map((tech) => (
                        <Stack key={tech.id} direction='horizontal' align='start' justify='start' spacing={4}>
                            <Typography variant='body1' className='dark:text-white'>
                                {tech.title}
                            </Typography>
                            <div className='flex flex-wrap gap-4 '>
                                {tech.list.map((badge) => (
                                    <ShieldsBadge icon={badge} color={`${currentTheme === 'dark' ? 'black' : 'white'}`}/>
                                ))}
                            </div>
                        </Stack>
                    ))}
                </Stack>

            </Container>
        </section>
    )
}

export default memo(HomeTechStack)