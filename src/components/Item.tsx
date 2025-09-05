import React from "react";
import { cn } from "../util";

interface ItemProps {
  children: React.ReactNode;
  type: "single" | "multi";
  className?: string;
}

export const Item = ({ children, type, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "vd-flex vd-flex-col vd-justify-center vd-w-full vd-gap-[3px]",
        type === "single" && "vd-px-4 vd-py-[5px]",
        type === "multi" && "vd-px-0",
        className
      )}
    >
      {children}
    </div>
  );
};
