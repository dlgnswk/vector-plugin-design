import * as React from "react";
import { cn } from "../util";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "icon";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseClass = " h-[28px] rounded-[5px]";

  const variantClass = cn(
    variant === "primary" &&
      "w-full bg-primary text-white px-4 text-h2 font-bold",
    variant === "icon" && "bg-transparent text-label hover:bg-hover w-[28px]"
  );

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
