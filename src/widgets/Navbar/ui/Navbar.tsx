import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { FC } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'

interface INavbarProps {
    className?: string
}

export const Navbar:FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={'about'}theme={AppLinkTheme.SECONDARY} >О НАС</AppLink>
            </div>
        </div>
    )
}
