import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shared/AppLink',
    component: AppLink,
    args: { children: 'text' }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Light: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const Dark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}
