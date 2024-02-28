import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: 'user', password: 'user' }
    })
  ],
};

export const WithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: 'user', password: 'user', error: 'User unauthorized' }
    })
  ],
};

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true }
    })
  ],
};
