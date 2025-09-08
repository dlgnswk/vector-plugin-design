import React from "react";
import { cn } from "../util";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <div
      className={cn(
        "vd-flex vd-items-center vd-w-full vd-h-8 vd-gap-2.5 vd-pl-4 vd-pr-2 vd-font-bold vd-text-title vd-text-base",
        className
      )}
    >
      {children}
    </div>
  );
};
