import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRoute = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routeConfig.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<div className="app__content-wrapper content__wrapper">{route.element}</div>}
                            key={route.path}
                        />
                    )
                })}
            </Routes>
        </Suspense>
    )
}

export default AppRoute
