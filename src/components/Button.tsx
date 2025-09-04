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
  return (
    <button
      className={cn(
        "h-[28px] rounded-[5px] flex items-center justify-center cursor-pointer",
        variant === "primary" &&
          "w-full bg-primary text-white px-4 text-h2 font-bold",
        variant === "icon" && "bg-hover text-label hover:bg-hover w-[28px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
