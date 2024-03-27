import type { Preview } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StyleDecorator,
        RouteDecorator
    ]
}

export default preview
