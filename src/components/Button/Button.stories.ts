import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '버튼',
    size: 56,
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    children: '버튼',
    size: 56,
    variant: 'secondary',
  },
};
export const Text: Story = {
  args: {
    children: '버튼',
    size: 56,
    variant: 'text',
  },
};
