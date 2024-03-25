import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Enter the value',
    options: [
      { value: '1' , content: 'Option 1' },
      { value: '2' , content: 'Option 2' },
      { value: '3' , content: 'Option 3' },
      { value: '4' , content: 'Option 4' },
      { value: '5' , content: 'Option 5' },
    ]
  },
};
