import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shared/Button',
    component: Button,
    args: { children: 'text' }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE
    }
}
