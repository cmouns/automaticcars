import React, { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils"; 

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
      className,
      label,
      icon,
      withShowPassword = false,
      error,
      variant = "dark",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-xs uppercase tracking-widest text-gold-500 ml-1 mb-1.5 block font-bold"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative group">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-gold-500 transition-colors duration-300">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={inputType}
            className={cn(
              "w-full py-3 pr-4 rounded-lg border outline-none transition-all duration-300",
              "placeholder:text-gray-500 font-medium",
              "disabled:cursor-not-allowed disabled:opacity-50",

              variant === "dark" &&
                "bg-dark-800 border-gray-700 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400/20",

              variant === "light" &&
                "bg-white border-gold-400 text-dark-900 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20",

              icon ? "pl-11" : "pl-4",
              withShowPassword ? "pr-12" : "",

              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",

              className
            )}
            {...props}
          />

          {withShowPassword && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gold-500 transition-colors focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -5, height: 0 }}
              className="mt-1.5 text-xs text-red-400 font-medium ml-1 flex items-center gap-1"
            >
              • {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";
