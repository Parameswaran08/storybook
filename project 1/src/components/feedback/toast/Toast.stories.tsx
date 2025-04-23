import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toast Component

The Toast component provides a non-intrusive notification system for displaying messages to users. It supports different variants, auto-dismissal, and manual dismissal.

## Features
- Multiple variants (info, success, warning, error)
- Auto-dismissal after a configurable duration
- Manual dismissal with close button
- Accessible with proper ARIA attributes
- Dark mode support
- Responsive design

## Accessibility
- Uses \`role="alert"\` for important messages
- Provides proper focus management
- Includes screen reader text for close button
- Maintains proper color contrast

## Usage
\`\`\`tsx
<Toast
  message="Operation completed successfully"
  variant="success"
  duration={5000}
  onClose={() => console.log('Toast closed')}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The message to display in the toast',
    },
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The variant of the toast',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before the toast auto-closes',
    },
    isVisible: {
      control: 'boolean',
      description: 'Whether the toast is visible',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    message: 'This is an informational message',
    variant: 'info',
    duration: 5000,
    isVisible: true,
  },
};

export const Success: Story = {
  args: {
    message: 'Operation completed successfully',
    variant: 'success',
    duration: 5000,
    isVisible: true,
  },
};

export const Warning: Story = {
  args: {
    message: 'Please review your changes before proceeding',
    variant: 'warning',
    duration: 5000,
    isVisible: true,
  },
};

export const Error: Story = {
  args: {
    message: 'An error occurred while processing your request',
    variant: 'error',
    duration: 5000,
    isVisible: true,
  },
};

export const WithCustomDuration: Story = {
  args: {
    message: 'This toast will stay visible for 10 seconds',
    variant: 'info',
    duration: 10000,
    isVisible: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsVisible(true)}
        >
          Show Toast
        </button>
        {isVisible && (
          <Toast
            {...args}
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
          />
        )}
      </div>
    );
  },
  args: {
    message: 'Click the button to show/hide this toast',
    variant: 'info',
    duration: 5000,
  },
}; 