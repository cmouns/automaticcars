import React, { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  withShowPassword?: boolean;
  error?: string;
  variant?: "dark" | "light";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = "text",
      placeholder,
      required = false,
      label,
      icon,
      withShowPassword = false,
      className = "",
      value,
      onChange,
      disabled,
      error,
      variant = "dark",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    const styles = {
      dark: "border-gray-700 bg-dark-800 text-white placeholder-gray-500",
      light: "border border-gold-500 bg-white text-black placeholder-gray-400",
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-sm uppercase text-gold-500 ml-1 mb-1 block"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative group">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-gold-500 transition-colors">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={inputType}
            className={`
                        w-full py-3 pr-4 rounded-lg border
                        focus:border-gold-500 focus:outline-none
                        disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-gray-200
                        transition-all duration-300
                        ${styles[variant]} 
                        ${icon ? "pl-11" : "pl-4"} 
                        ${withShowPassword ? "pr-12" : ""}
                        ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                        ${className}
                    `}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...props}
          />
          {withShowPassword && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gold-500 focus:outline-none transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
