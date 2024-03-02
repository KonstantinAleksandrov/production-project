import './styles/index.scss'
import { Link } from "react-router-dom"
import { useTheme } from './providers/ThemeProviders'
import { classNames } from 'shared/lib/classNames'
import { AppRoute } from './route'

const App = ({}) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'about'}>О НАС</Link>
            <AppRoute/>
        </div>
    )
}

export default App