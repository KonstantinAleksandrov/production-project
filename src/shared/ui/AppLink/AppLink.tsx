import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const { children, className, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props

    return (
        <Link 
        to={to} 
        className={classNames(cls.appLink,{},[className,cls[theme]])} 
        {...otherProps}
        >
            {children}
        </Link>
    )
}