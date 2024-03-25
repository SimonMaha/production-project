import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from 'entity/Profile';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      firstname: 'John',
      lastname: 'Vasylyk',
      age: 12,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'Ternopil',
      username: 'Vasylyk',
      avatar,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'Error message'
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
