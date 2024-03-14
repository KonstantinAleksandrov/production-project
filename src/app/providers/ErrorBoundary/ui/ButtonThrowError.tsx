import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export const ButtonThrowError = () => {
    const { t } = useTranslation()
    const [error, setError] = useState <boolean>(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const onThrow = () => {
        setError(true)
    }
    return (
        <button onClick={onThrow}>{t('Выбросить ошибку')}</button>
    )
}
