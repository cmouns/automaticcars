import React from 'react';
import type { InputProps } from '../../types'; 

export const Input: React.FC<InputProps> = ({ label, icon, className, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs uppercase tracking-widest text-gold-500 font-serif ml-1">
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-500 transition-colors duration-300">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-dark-800/50 border border-gray-700 
            text-white placeholder-gray-600 rounded-lg py-3 
            ${icon ? 'pl-12' : 'pl-4'} pr-4
            focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500
            transition-all duration-300
            ${className || ''}
          `}
          {...props}
        />
      </div>
    </div>
  );
};