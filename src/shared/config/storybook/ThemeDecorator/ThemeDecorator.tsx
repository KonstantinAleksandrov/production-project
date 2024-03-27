import { type Theme } from 'app/providers/ThemeProviders'
import { type StoryFn } from '@storybook/react'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    )
}
