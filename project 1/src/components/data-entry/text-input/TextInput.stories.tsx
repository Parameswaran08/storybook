import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Data Entry/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A text input component that supports various states and sizes.

### Features:
- Multiple variants (outline, filled, flushed)
- Different size options (small, medium, large)
- Disabled state
- Error state with message
- Helper text
- Required field indication
- Proper accessibility attributes
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const WithError: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: 'This field is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'This is a helper text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    size: 'large',
  },
};

export const Filled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    variant: 'filled',
  },
};

export const Flushed: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    variant: 'flushed',
  },
}; 