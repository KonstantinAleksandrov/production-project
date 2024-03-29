import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { useTheme, Theme } from 'app/providers/ThemeProviders'
import { Button, ButtonTheme } from 'shared/ui/Button'

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme()
    const { className } = props

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >   { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}
