import { useTranslation } from 'react-i18next'
import { ButtonThrowError } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <div className='MainPage'>
            {t('Главная')}
            <ButtonThrowError/>
        </div>
    )
}

export default MainPage
