import { screen, render } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('button', () => {
    test('in the document', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('add theme ', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
})
