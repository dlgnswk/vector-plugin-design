import React from "react";
import { cn } from "../util";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ disabled, onChange, ...props }: TextareaProps) => {
  return (
    <textarea
      onChange={onChange}
      className={cn(
        "vd-w-full vd-rounded-[5px] vd-p-2 !vd-text-xs vd-ring-1 vd-ring-inset vd-ring-select placeholder:vd-text-label focus:vd-outline-none focus:vd-ring-1 focus:vd-ring-primary focus:vd-ring-inset",
        disabled && "!vd-cursor-not-allowed !vd-text-label"
      )}
      disabled={disabled}
      {...props}
    />
  );
};
