import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Typography Component

The Typography component provides a consistent text styling system across the application. It supports various text elements, colors, weights, and truncation.

## Accessibility
- Uses semantic HTML elements (h1-h6, p)
- Supports dark mode
- Maintains proper contrast ratios
- Responsive text sizes

## Usage
\`\`\`tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="p" color="secondary">Paragraph text</Typography>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'],
      description: 'The variant of the typography',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
      description: 'The color of the text',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'The weight of the text',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether the text should be truncated',
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
    children: 'This is a paragraph of text that demonstrates the default paragraph styling.',
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
    children: 'Caption text',
  },
};

export const Helper: Story = {
  args: {
    variant: 'helper',
    children: 'Helper text for form fields',
  },
};

export const WithColor: Story = {
  args: {
    variant: 'p',
    children: 'Colored text example',
    color: 'error',
  },
};

export const WithWeight: Story = {
  args: {
    variant: 'p',
    children: 'Bold text example',
    weight: 'bold',
  },
};

export const Truncated: Story = {
  args: {
    variant: 'p',
    children: 'This is a very long text that will be truncated when it exceeds the container width.',
    truncate: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of truncated text that will show ellipsis when it overflows.',
      },
    },
  },
}; 