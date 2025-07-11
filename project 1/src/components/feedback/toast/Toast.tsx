import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface ToastProps {
  /**
   * The message to display
   */
  message: string;
  /**
   * The variant of the toast
   */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Whether the toast is visible
   */
  isVisible?: boolean;
  /**
   * Callback when the toast is closed
   */
  onClose?: () => void;
  /**
   * Duration in milliseconds before the toast auto-closes
   */
  duration?: number;
  /**
   * Optional className for custom styling
   */
  className?: string;
}

const Toast: React.FC<ToastProps> = ({
  message,
  variant = 'info',
  isVisible = true,
  onClose,
  duration = 5000,
  className,
}) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  if (!visible) return null;

  const toastClasses = classNames(
    'fixed bottom-4 right-4 z-50 max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4',
    'transform transition-all duration-300 ease-in-out',
    {
      'border-l-4 border-blue-500': variant === 'info',
      'border-l-4 border-green-500': variant === 'success',
      'border-l-4 border-yellow-500': variant === 'warning',
      'border-l-4 border-red-500': variant === 'error',
    },
    className
  );

  const iconClasses = classNames('w-5 h-5', {
    'text-blue-500': variant === 'info',
    'text-green-500': variant === 'success',
    'text-yellow-500': variant === 'warning',
    'text-red-500': variant === 'error',
  });

  const Icon = () => {
    switch (variant) {
      case 'info':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'success':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'warning':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'error':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={toastClasses}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {message}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            type="button"
            className="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              setVisible(false);
              onClose?.();
            }}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast; 