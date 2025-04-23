import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold tracking-tight',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      h6: 'text-base font-semibold tracking-tight',
      p: 'text-base leading-relaxed',
      span: 'text-base',
      label: 'text-sm font-medium leading-none',
      caption: 'text-sm text-gray-500',
      helper: 'text-xs text-gray-500',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-gray-900 dark:text-gray-50',
      muted: 'text-gray-500 dark:text-gray-400',
      primary: 'text-blue-600 dark:text-blue-400',
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'p',
    weight: 'regular',
    color: 'default',
    align: 'left',
  },
});

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'caption' | 'helper';
type TypographyColor = 'default' | 'muted' | 'primary' | 'success' | 'error' | 'warning';

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyVariant;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, color, align, as, ...props }, ref) => {
    const Component = as || variant || 'p';
    const elementProps = {
      ref,
      className: cn(
        typographyVariants({ variant, weight, color: color as TypographyColor, align }),
        className
      ),
      ...props,
    };

    switch (Component) {
      case 'h1':
        return React.createElement('h1', elementProps);
      case 'h2':
        return React.createElement('h2', elementProps);
      case 'h3':
        return React.createElement('h3', elementProps);
      case 'h4':
        return React.createElement('h4', elementProps);
      case 'h5':
        return React.createElement('h5', elementProps);
      case 'h6':
        return React.createElement('h6', elementProps);
      case 'p':
        return React.createElement('p', elementProps);
      case 'span':
        return React.createElement('span', elementProps);
      case 'label':
        return React.createElement('label', elementProps);
      case 'caption':
        return React.createElement('span', elementProps);
      case 'helper':
        return React.createElement('span', elementProps);
      default:
        return React.createElement('p', elementProps);
    }
  }
);

Typography.displayName = 'Typography';

export { Typography }; 