// react
import { useEffect, useCallback, useMemo, useState } from 'react'
// theme-context
import { ThemeContext } from './theme-context'

type Props = {
    children: React.ReactNode;
}

const defaultColor = 'dark';
const storageKey = 'theme-color';

export default function ThemeProvider({ children }: Props) {
    
    const [themeColor, setThemeColor] = useState(window.localStorage.getItem(storageKey) || null)

    useEffect(() => {
        if (themeColor === 'dark' || themeColor === 'light') {
            const root = window.document.documentElement;

            if (themeColor === 'dark') {
                root.classList.remove('light');
                
            } else {
                root.classList.remove('dark');
            }

            root.classList.add(themeColor);
            
        } else {
            window.localStorage.setItem(storageKey, defaultColor);
            setThemeColor(defaultColor);
        }

    }, [themeColor]);

    const changeTheme = useCallback(() => {
        let newThemeColor = null;

        if (themeColor === 'dark') {
            newThemeColor = 'light'
            
        } else {
            newThemeColor = 'dark'
        }

        window.localStorage.setItem(storageKey, newThemeColor);
        setThemeColor(newThemeColor)
    }, [themeColor]);

    const memoizedValue = useMemo(
        () => ({
            currentTheme: themeColor,
            changeTheme
        }),
        [themeColor, changeTheme]
    );

    return (
        <ThemeContext.Provider value={memoizedValue}>
            {children}
        </ThemeContext.Provider>
    )
}