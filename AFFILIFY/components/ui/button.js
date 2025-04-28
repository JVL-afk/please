'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variantStyles = {
    default: 'bg-[var(--button-primary)] text-white hover:bg-[var(--button-primary-hover)] focus-visible:ring-[var(--button-primary)]',
    primary: 'bg-[var(--button-primary)] text-white hover:bg-[var(--button-primary-hover)] focus-visible:ring-[var(--button-primary)]',
    outline: 'border border-[rgba(255,255,255,0.2)] bg-transparent hover:bg-[rgba(255,255,255,0.1)] text-white',
    ghost: 'bg-transparent hover:bg-[rgba(255,255,255,0.1)] text-white',
    link: 'bg-transparent underline-offset-4 hover:underline text-[var(--button-primary)] hover:text-[var(--button-primary-hover)]'
  }
  
  const sizeStyles = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-11 px-8 text-base'
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
