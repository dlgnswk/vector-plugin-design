import * as React from "react";
import { cn } from "../util";
import { Loader2 } from "lucide-react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "warning" | "icon";
  isPending?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  isPending = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "vd-h-[28px] vd-rounded-[5px] vd-flex vd-items-center vd-justify-center vd-cursor-pointer",
        variant === "primary" &&
          "vd-w-full vd-bg-primary vd-text-white vd-px-4 vd-text-h2 vd-font-bold",
        variant === "secondary" &&
          "vd-bg-label vd-text-white vd-px-4 vd-text-h2 vd-font-bold",
        variant === "warning" &&
          "vd-bg-warning vd-text-white vd-px-4 vd-text-h2 vd-font-bold",
        variant === "icon" && "vd-text-label hover:vd-bg-hover vd-w-[28px]",
        props.disabled && "vd-opacity-50 !vd-cursor-not-allowed",
        className
      )}
      {...props}
    >
      {isPending ? (
        <Loader2 className="vd-w-4 vd-h-4 vd-animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
