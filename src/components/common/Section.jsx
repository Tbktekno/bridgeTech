import React from "react";
import { cn } from "../../utils/cn";

const Section = ({ 
  children, 
  id, 
  className, 
  bg = "white",
  title,
  subtitle,
  centerTitle = true
}) => {
  const bgClasses = {
    white: "bg-white",
    slate: "bg-slate-50",
    dark: "bg-professional text-white",
    gradient: "bg-gradient-to-b from-slate-50 to-white",
  };

  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24 overflow-hidden", bgClasses[bg], className)}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-16 max-w-7xl">
        {(title || subtitle) && (
          <div className={cn("mb-12", centerTitle ? "text-center" : "text-left")}>
            {subtitle && (
              <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs mb-2">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className={cn(
                "text-2xl md:text-4xl font-extrabold mb-4",
                bg === "dark" ? "text-white" : "text-professional"
              )}>
                {title}
              </h2>
            )}
            <div className={cn(
                "w-12 h-1 bg-gold rounded-full",
                centerTitle ? "mx-auto" : "mr-auto"
              )} 
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
