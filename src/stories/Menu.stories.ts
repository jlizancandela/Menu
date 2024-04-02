import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '../components/menu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items : [
      { href: "#", anchor: "elemento 1" },
      { href: "#", anchor: "elemento 2" },
      { href: "#", anchor: "elemento 3" },
      { href: "#", anchor: "elemento 4" },
      { href: "#", anchor: "elemento 5" },
      { href: "#", anchor: "elemento 6" },
    ],
    title: "Esto es un menu"
  },
};

