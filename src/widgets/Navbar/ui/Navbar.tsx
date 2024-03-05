import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { FC } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
    className?: string
}

export const Navbar:FC<INavbarProps> = ({className}) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to={'about'}theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
            </div>
        </div>
    )
}
