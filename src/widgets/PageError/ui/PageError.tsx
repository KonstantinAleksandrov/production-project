import { useTranslation } from 'react-i18next'
import cls from './PageError.module.scss'
import errorImg from '../../../shared/assets/errorImg.jpg'
import { Button } from 'shared/ui/Button'

export const PageError = () => {
    const { t } = useTranslation()
    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={cls.pageError}>
            <div className={cls.pageError__img}>
                <img src={errorImg} alt="errorImg" />
            </div>
            <Button onClick={reloadPage}>{t('Перезагрузить')}</Button>
        </div>
    )
}
