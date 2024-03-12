import { lazy } from 'react'

export const AboutLazyPage = lazy(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import('./AboutPage'))
        }, 1000)
    })
})
