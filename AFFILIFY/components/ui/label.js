
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: React.ReactNode;
}

export function Label({
  className = '',
  children,
  ...props
}: LabelProps) {
  const baseStyles = 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
  
  const combinedClassName = `${baseStyles} ${className}`;
  
  return (
    <label className={combinedClassName} {...props}>
      {children}
    </label>
  );
}
