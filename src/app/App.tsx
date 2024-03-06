import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders'
import { classNames } from 'shared/lib/classNames'
import { AppRoute } from './route'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='app__content'>
                <Sidebar />
                <AppRoute />
            </div>
        </div>
    )
}

export default App
