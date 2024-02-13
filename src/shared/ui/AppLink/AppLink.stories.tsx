import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ]
};

export const Inverted: Story = {
  args: {
    children: 'Inverted',
    theme: AppLinkTheme.INVERTED
  }
};
export const InvertedDark: Story = {
  args: {
    children: 'Inverted',
    theme: AppLinkTheme.INVERTED
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ]
};


