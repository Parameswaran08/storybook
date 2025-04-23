import React, { forwardRef } from 'react';
import classNames from 'classnames';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label text for the input
   */
  label?: string;
  /**
   * The error message to display
   */
  error?: string;
  /**
   * The size of the input
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the input
   * @default 'outline'
   */
  variant?: 'outline' | 'filled' | 'flushed';
  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;
  /**
   * The helper text to display below the input
   */
  helperText?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error,
      size = 'medium',
      variant = 'outline',
      required = false,
      helperText,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputClasses = classNames(
      'w-full transition-colors duration-200',
      {
        // Sizes
        'px-3 py-2 text-sm': size === 'small',
        'px-4 py-2.5 text-base': size === 'medium',
        'px-5 py-3 text-lg': size === 'large',
        
        // Variants
        'border rounded-md': variant === 'outline',
        'border-b': variant === 'flushed',
        'bg-gray-50 rounded-md': variant === 'filled',
        
        // States
        'border-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500': !error && !disabled,
        'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500': error && !disabled,
        'bg-gray-100 border-gray-200 cursor-not-allowed': disabled,
      },
      className
    );

    const labelClasses = classNames(
      'block mb-1 font-medium',
      {
        'text-sm': size === 'small',
        'text-base': size === 'medium',
        'text-lg': size === 'large',
        'text-gray-700': !error,
        'text-red-500': error,
      }
    );

    return (
      <div className="w-full">
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${props.id}-error`} className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${props.id}-helper`} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput; 