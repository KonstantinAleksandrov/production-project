import { lazy } from 'react'

export const MainLazyPage = lazy(async () => await import('./MainPage'))
