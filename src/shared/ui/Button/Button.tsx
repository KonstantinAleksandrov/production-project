import cls from './Button.module.scss'
import { type FC, type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames'

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
    const { children, className, theme = ButtonTheme.CLEAR, ...otherProps } = props
    return (
        <button
            className={ classNames(cls.button, {}, [className, cls[theme]]) }
            { ...otherProps }
        >   { children }
        </button>
    )
}
