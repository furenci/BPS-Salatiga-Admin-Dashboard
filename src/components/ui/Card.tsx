import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false,
  ...props
}: CardProps) {
  return <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${!noPadding ? 'p-6' : ''} ${className}`} {...props}>
      {children}
    </div>;
}