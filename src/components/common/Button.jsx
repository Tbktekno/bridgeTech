import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  icon: Icon,
  iconPosition = "right",
  ...props 
}) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    gold: "bg-gold text-white hover:bg-gold-dark shadow-lg shadow-gold/25",
    ghost: "text-primary hover:bg-primary/10",
    dark: "bg-professional text-white hover:bg-professional-light shadow-lg shadow-professional/25",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
};

export default Button;
