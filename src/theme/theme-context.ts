import { createContext, useContext } from "react"

type ContextType = {
    currentTheme: string | null,
    changeTheme: () => void
};

export const ThemeContext = createContext({} as ContextType);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
};