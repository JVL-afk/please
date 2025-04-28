
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input({
  className = '',
  type = 'text',
  ...props
}: InputProps) {
  const baseStyles = 'flex h-10 w-full rounded-md border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--text-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  
  const combinedClassName = `${baseStyles} ${className}`
  
  return (
    <input
      type={type}
      className={combinedClassName}
      {...props}
    />
  )
}
