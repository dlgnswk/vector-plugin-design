import React from "react";
import { cn } from "../util";

interface ItemContainerProps {
  children: React.ReactNode;
  type: "col" | "row";
  className?: string;
}

export const ItemContainer = ({
  children,
  type,
  className,
}: ItemContainerProps) => {
  return (
    <div
      className={cn(
        "vd-flex vd-items-center vd-w-full vd-gap-2",
        type === "col" && "vd-flex-col vd-gap-0",
        type === "row" && "vd-flex-row vd-gap-2 vd-px-4 vd-py-[5px]",
        className
      )}
    >
      {children}
    </div>
  );
};
