import { lazy } from 'react'

export const AboutLazyPage = lazy(async () => await import('./AboutPage'))
