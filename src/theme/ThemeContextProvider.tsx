import { FC } from 'react'
import { ThemeContext } from './ThemeContext'
import { useState, useMemo } from 'react' 
import { Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext' 

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeContextProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(()=>({
        theme,
        setTheme
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider