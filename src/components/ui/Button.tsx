import React from "react";
import { Loader2 } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "link";
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  isLoading = false,
  icon,
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <motion.button
      whileHover={!disabled && variant !== "link" ? { y: -2 } : {}}
      whileTap={!disabled && variant !== "link" ? { scale: 0.98 } : {}}
      disabled={isLoading || disabled}
      className={cn(
        "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-wider text-sm transition-all focus:outline-none rounded-none",
        "disabled:opacity-60 disabled:cursor-not-allowed",

        variant === "primary" &&
          "bg-gradient-to-r from-gold-600 to-gold-400 text-black shadow-[0_4px_20px_rgba(218,175,55,0.25)] hover:from-gold-500 hover:to-gold-400 border-none py-3 px-8",
        variant === "secondary" &&
          "bg-transparent text-white border border-gray-400 hover:border-white hover:bg-white/5 py-3 px-8",
        variant === "link" &&
          "bg-transparent text-gold-500 underline decoration-transparent hover:decoration-gold-500 p-0 h-auto normal-case tracking-normal hover:text-gold-400",

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};
