import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          firstname: 'John',
          lastname: 'Vasylyk',
          age: 12,
          currency: Currency.UAH,
          country: Country.Ukraine,
          city: 'Ternopil',
          username: 'Vasylyk',
          avatar,
        }
      }
    })
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { },
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ]
};


