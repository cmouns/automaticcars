import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'primary', isLoading = false, icon, fullWidth = false, className = '', disabled, ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold hover:from-gold-500 hover:to-gold-400 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(218,175,55,0.25)]",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 hover:scale-[1.02] shadow-sm",
    link: "bg-transparent text-gold-500 hover:text-gold-400 underline decoration-transparent hover:decoration-gold-500 p-0 h-auto"
  };

  const padding = variant === 'link' ? '' : 'py-3.5 px-4';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${padding} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};