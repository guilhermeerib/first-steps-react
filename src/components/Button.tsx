import React from 'react'
import { cn } from '../utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded'

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 focus:ring-primary',
    secondary:
      'bg-surface-container-low text-on-surface py-2 text-xs font-semibold hover:bg-surface-container-high transition-colors',
    danger:
      'bg-error-container text-error hover:bg-error hover:text-white transition-all',
    ghost:
      'bg-transparent text-primary hover:bg-primary-container-low focus:ring-primary',
    link: 'text-primary hover:underline focus:ring-primary',
    outline:
      'border border-outline text-primary hover:bg-surface-container-low focus:ring-primary',
  }

  const sizes = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
