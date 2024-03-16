import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div data-testid='languageSwitcher'>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleLang}
            >
                {t('RU')}
            </Button>
        </div>
    )
}
