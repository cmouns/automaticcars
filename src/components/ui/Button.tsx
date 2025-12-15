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
  // MODIFICATIONS :
  // 1. rounded-none (carré)
  // 2. font-sans (Lato) + font-semibold + uppercase + tracking-wider (Style demandé)
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 rounded-none focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed font-sans font-semibold uppercase tracking-wider text-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-600 to-gold-400 text-black hover:from-gold-500 hover:to-gold-400 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(218,175,55,0.25)]",
    // Style secondaire ajusté : bordure grise par défaut, devient blanche au survol
    secondary: "bg-transparent text-white hover:bg-white/10 border border-gray-400 hover:border-white hover:text-white shadow-sm",
    link: "bg-transparent text-gold-500 hover:text-gold-400 underline decoration-transparent hover:decoration-gold-500 p-0 h-auto normal-case tracking-normal"
  };

  // Padding ajusté à px-8 py-3 (correspond environ à 12px 32px)
  const padding = variant === 'link' ? '' : 'py-3 px-8';

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