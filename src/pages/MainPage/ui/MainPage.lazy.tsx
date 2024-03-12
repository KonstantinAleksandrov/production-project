import { lazy } from 'react'

export const MainLazyPage = lazy(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import('./MainPage'))
        }, 1000)
    })
})
