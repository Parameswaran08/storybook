import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../src/components/typography/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Typography component provides a consistent text styling system across the application.
It supports various text variants, weights, colors, and alignments.

## Accessibility
- Uses semantic HTML elements (h1-h6, p, span)
- Maintains proper heading hierarchy
- Supports screen readers with appropriate ARIA attributes
- Ensures sufficient color contrast
- Responsive text sizing

## Usage
\`\`\`tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="p" color="muted">Regular paragraph text</Typography>
<Typography variant="label" weight="medium">Form label</Typography>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'caption', 'helper'],
      description: 'The typography variant to use',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight to apply',
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'error', 'warning'],
      description: 'The text color variant',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'The text alignment',
    },
    as: {
      control: 'text',
      description: 'Override the rendered HTML element',
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
    children: 'This is a paragraph of text that demonstrates the default typography style. It includes proper line height and spacing for optimal readability.',
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

export const HelperText: Story = {
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