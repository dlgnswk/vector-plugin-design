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
        "vector-design vd-h-[28px] vd-rounded-[5px] vd-flex vd-items-center vd-justify-center vd-cursor-pointer",
        variant === "primary" &&
          "vd-w-full vd-bg-primary vd-text-white vd-px-4 vd-text-h2 vd-font-bold",
        variant === "icon" && "vd-text-label hover:vd-bg-hover vd-w-[28px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
