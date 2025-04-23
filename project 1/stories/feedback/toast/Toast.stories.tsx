import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../../src/components/feedback/toast/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Toast component provides a non-intrusive notification that appears temporarily to provide feedback to users.

## Features
- Multiple variants (default, success, error, warning, info)
- Auto-dismissal after a specified duration
- Manual dismissal with close button
- Dark mode support
- Accessible with proper ARIA attributes

## Accessibility
- Uses appropriate ARIA roles and attributes
- Keyboard accessible
- Screen reader friendly
- Proper focus management

## Usage
\`\`\`tsx
<Toast
  variant="success"
  message="Operation completed successfully"
  duration={5000}
  onClose={() => console.log('Toast closed')}
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
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'The visual variant of the toast',
    },
    message: {
      control: 'text',
      description: 'The message to display in the toast',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before the toast auto-dismisses (0 for no auto-dismiss)',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'This is a default toast message',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Operation completed successfully',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'An error occurred while processing your request',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Please review your changes before proceeding',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'New features are available in the latest update',
  },
};

export const WithoutCloseButton: Story = {
  args: {
    message: 'This toast cannot be manually dismissed',
    showCloseButton: false,
  },
};

export const LongDuration: Story = {
  args: {
    message: 'This toast will stay visible for 10 seconds',
    duration: 10000,
  },
};

export const NoAutoDismiss: Story = {
  args: {
    message: 'This toast will stay visible until manually dismissed',
    duration: 0,
  },
}; 