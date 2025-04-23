import React from 'react';
import classNames from 'classnames';

export interface TypographyProps {
  /**
   * The variant of the typography
   */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'caption' | 'helper';
  /**
   * The content to display
   */
  children: React.ReactNode;
  /**
   * Optional className for custom styling
   */
  className?: string;
  /**
   * The color of the text
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
  /**
   * The weight of the text
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /**
   * Whether the text should be truncated
   */
  truncate?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  color = 'primary',
  weight = 'normal',
  truncate = false,
}) => {
  const baseClasses = classNames(
    // Base styles
    'transition-colors duration-200',
    // Colors
    {
      'text-gray-900 dark:text-white': color === 'primary',
      'text-gray-600 dark:text-gray-300': color === 'secondary',
      'text-red-500 dark:text-red-400': color === 'error',
      'text-green-500 dark:text-green-400': color === 'success',
      'text-yellow-500 dark:text-yellow-400': color === 'warning',
      'text-blue-500 dark:text-blue-400': color === 'info',
    },
    // Weights
    {
      'font-light': weight === 'light',
      'font-normal': weight === 'normal',
      'font-medium': weight === 'medium',
      'font-semibold': weight === 'semibold',
      'font-bold': weight === 'bold',
    },
    // Variants
    {
      'text-4xl font-bold tracking-tight': variant === 'h1',
      'text-3xl font-bold tracking-tight': variant === 'h2',
      'text-2xl font-bold tracking-tight': variant === 'h3',
      'text-xl font-bold tracking-tight': variant === 'h4',
      'text-lg font-bold tracking-tight': variant === 'h5',
      'text-base font-bold tracking-tight': variant === 'h6',
      'text-base': variant === 'p',
      'text-sm font-medium': variant === 'label',
      'text-xs': variant === 'caption',
      'text-sm text-gray-500 dark:text-gray-400': variant === 'helper',
    },
    // Truncation
    { 'truncate': truncate },
    className
  );

  // Map custom variants to HTML elements
  const getElement = (variant: TypographyProps['variant']): keyof JSX.IntrinsicElements => {
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return variant;
      case 'label':
        return 'label';
      case 'caption':
        return 'span';
      case 'helper':
        return 'span';
      default:
        return 'p';
    }
  };

  const Element = getElement(variant);

  return (
    <Element className={baseClasses}>
      {children}
    </Element>
  );
};

export default Typography; 