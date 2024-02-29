import './styles/index.scss'
import { Route, Routes, Link } from "react-router-dom"
import { MainLazyPage } from './pages/MainLazyPage'
import { AboutLazyPage } from './pages/AboutLazyPage'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = ({}) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'about'}>О НАС</Link>
            <Suspense fallback={'....Загрузка'}>
                <Routes>
                    <Route path="/" element={<MainLazyPage/>}/>
                    <Route path="/about" element={<AboutLazyPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App