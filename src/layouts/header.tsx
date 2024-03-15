import { useLocation } from 'react-router-dom';

// components
import ThemeChangeButton from 'src/components/button/theme-change-button';
import Container from 'src/components/container';
import Stack from 'src/components/stack';
import Typography from 'src/components/typography';
// hooks
import { useThemeContext } from 'src/theme/theme-context';
// config
import { navConfig } from './nav-config';

export default function Header() {
    const { pathname } = useLocation();
    const { currentTheme, changeTheme } = useThemeContext();

    console.log(pathname)
    return (
        <Container size='lg' className='max-w-md:px-3 px-6'>
            <Stack direction='vertical' align='center' justify='between' className='h-16'>
                <nav className='flex justify-start items-center gap-10'>
                    {navConfig.map((nav) => (
                        <a key={nav.title} href={nav.path} className={`${pathname === nav.path && 'border-b-2 border-black dark:border-white'}`}>
                            {pathname === nav.path ? (
                                <Typography variant='subtitle2' className='max-w-md:text-md dark:text-white'>
                                    {nav.title}
                                </Typography>
                            ) : (
                                <Typography variant='subtitle2' className='max-w-md:text-md relative before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:w-full before:h-[2px] before:transition-transform before:duration-300 before:bg-black dark:before:bg-white before:absolute before:left-0 before:bottom-0 text-slate-500 hover:text-black dark:text-slate-200 dark:hover:text-white'>
                                    {nav.title}
                                </Typography>
                            )}
                        </a>
                    ))}
                </nav>
                <ThemeChangeButton themeColor={currentTheme || 'dark'} handleThemeColor={changeTheme}/>
            </Stack>
        </Container>
    );
}
