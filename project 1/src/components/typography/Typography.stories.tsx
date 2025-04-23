import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'caption', 'helper'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'error', 'warning'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph of text that demonstrates the typography component.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Label',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is a caption text',
  },
};

export const Helper: Story = {
  args: {
    variant: 'helper',
    children: 'This is helper text',
  },
};

export const WithCustomColor: Story = {
  args: {
    variant: 'p',
    color: 'primary',
    children: 'This text has a custom color',
  },
};

export const WithCustomWeight: Story = {
  args: {
    variant: 'p',
    weight: 'bold',
    children: 'This text has a custom weight',
  },
};

export const WithCustomAlignment: Story = {
  args: {
    variant: 'p',
    align: 'center',
    children: 'This text is center aligned',
  },
}; 