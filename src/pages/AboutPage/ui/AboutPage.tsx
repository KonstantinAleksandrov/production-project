import { useTranslation } from "react-i18next"

const AboutPage = ({}) => {
    const { t } = useTranslation('about')

    return (
        <div className='AboutPage'>
            {t('О нас')}
        </div>
    )
}

export default AboutPage