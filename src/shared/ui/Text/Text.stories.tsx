import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
};

export const Error: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem Ipsum'
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Lorem Ipsum'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};
