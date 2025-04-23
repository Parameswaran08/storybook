import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../../src/components/data-entry/text-input/TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Data Entry/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The TextInput component provides a styled input field with support for various states and variants.

## Features
- Label and helper text support
- Error and success states
- Different sizes (sm, md, lg)
- Disabled state
- Dark mode support
- Accessible with proper ARIA attributes

## Accessibility
- Proper label association
- Error state indication
- Helper text for additional context
- Keyboard navigation support
- Screen reader friendly

## Usage
\`\`\`tsx
<TextInput
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual variant of the input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    label: {
      control: 'text',
      description: 'The label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    success: {
      control: 'boolean',
      description: 'Whether to show success state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

export const SuccessState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    success: true,
    helperText: 'Email is valid',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Search',
    size: 'sm',
    placeholder: 'Search...',
  },
};

export const Large: Story = {
  args: {
    label: 'Search',
    size: 'lg',
    placeholder: 'Search...',
  },
}; 