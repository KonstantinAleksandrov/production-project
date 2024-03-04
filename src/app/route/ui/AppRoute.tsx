import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig"

const AppRoute = () => {
    return (
        <Suspense fallback={'....Загрузка'}>
            <Routes>
                {routeConfig.map((route)=>{
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