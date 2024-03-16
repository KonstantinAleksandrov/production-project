import { screen, render, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('in the document', () => {
        render(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        render(<Sidebar/>)
        const togglebtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(togglebtn)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
})
