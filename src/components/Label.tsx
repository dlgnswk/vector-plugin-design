import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className="vd-text-label vd-text-xs" {...props}>
      {children}
    </label>
  );
};
