import { screen, render } from '@testing-library/react'
import { LanguageSwitcher } from './LanguageSwitcher'

describe('LanguageSwitcher', () => {
    test('in the document', () => {
        render(<LanguageSwitcher/>)
        expect(screen.getByTestId('languageSwitcher')).toBeInTheDocument()
    })
})
