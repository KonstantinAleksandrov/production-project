import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <div className='MainPage'>
            {t('Главная')}
        </div>
    )
}

export default MainPage
