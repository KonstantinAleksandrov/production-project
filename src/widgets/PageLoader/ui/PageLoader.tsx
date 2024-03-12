import { classNames } from 'shared/lib/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'

export const PageLoader = () => {
    return (
        <div className={classNames(cls.pageLoader)}>
            <Loader/>
        </div>
    )
}
