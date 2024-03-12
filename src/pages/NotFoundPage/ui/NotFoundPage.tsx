import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.notFoundPage)}>
            <div className={cls.title}>{t('Страница не найдена')}</div>
        </div>
    )
}
