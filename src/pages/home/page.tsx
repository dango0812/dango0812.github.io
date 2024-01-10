// components
import Container from 'src/components/container'
import ThemeToggle from 'src/components/theme-toggle'
// sections
import HomeBlogPosts from 'src/sections/home/home-blog-posts'
import HomeHero from 'src/sections/home/home-hero'
import HomeIntroduce from 'src/sections/home/home-introduce'
import HomeProjects from 'src/sections/home/home-projects'
import HomeTechStack from 'src/sections/home/home-tech-stack'
// useTheme
import { useThemeContext } from 'src/theme/theme-context'

const rootStyle = 'bg-gradient-to-r from-blue-100 to-blue-100 dark:bg-none dark:bg-[#161c24] min-h-screen p-6';

export default function HomePage() {

    const { currentTheme, changeTheme } = useThemeContext();

    return (
        <main className={rootStyle}>
            <header>
                <Container size='md' className='h-20 flex items-center justify-end'>
                    <ThemeToggle themeColor={currentTheme || 'dark'} handleThemeColor={changeTheme}/>
                </Container>
            </header>
            <article className='flex flex-col justify-center gap-14 md:gap-16'>
                <HomeHero />
                <HomeIntroduce />
                <HomeTechStack />
                <HomeProjects />
                <HomeBlogPosts />
            </article>
        </main>
    );
}
