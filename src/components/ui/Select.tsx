import React, { useId } from 'react';
import { ChevronDown } from 'lucide-react';
interface SelectOption {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}
export function Select({
  label,
  options,
  error,
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || useId();
  return <div className="w-full">
      {label && <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>}
      <div className="relative">
        <select id={selectId} className={`
            flex h-10 w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
            focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50
            transition-all duration-200 pr-8
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `} {...props}>
          {options.map(option => <option key={option.value} value={option.value}>
              {option.label}
            </option>)}
        </select>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>;
}