import { classNames } from 'shared/lib/classNames'
import cls from './Loader.module.scss'
import { type FC } from 'react'

interface ILoaderProps {
    className?: string
}

export const Loader: FC<ILoaderProps> = (props) => {
    const { className } = props
    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div className={cls.loader__ellips1}></div>
            <div className={cls.loader__ellips2}></div>
            <div className={cls.loader__ellips3}></div>
            <div className={cls.loader__ellips4}></div>
        </div>
    )
}
