import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { ThemeContextProvider } from 'app/providers/ThemeProviders'
import { Suspense } from 'react'

import './shared/config/i18nConfig'

render(
    <Suspense fallback="Загрузка языка">
        <BrowserRouter>
            <ThemeContextProvider>
                <App/>
            </ThemeContextProvider>
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
)
