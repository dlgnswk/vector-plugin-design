import * as React from "react";
import { cn } from "src/util";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "icon";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseClass =
    "w-full h-[28px] rounded-[5px] text-h2 ring-inset ring-1 ring-select";

  const variantClass = cn(
    variant === "primary" && "bg-primary text-white",
    variant === "icon" && "bg-transparent text-label"
  );

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
