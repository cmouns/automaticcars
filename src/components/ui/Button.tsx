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
          "bg-[#D4AF37] hover:bg-gold-500 border-none py-3 px-8 text-black",
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
