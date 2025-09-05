import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  icon?: React.ReactElement;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, icon, onChange, ...props }: InputProps) => {
  const hasIcon = !!icon;
  return (
    <div className="vd-relative vd-w-full">
      {hasIcon && (
        <div className="vd-absolute vd-left-0 vd-top-0 vd-w-[28px] vd-h-[28px] vd-flex vd-items-center vd-justify-center vd-pointer-events-none vd-text-label">
          {icon}
        </div>
      )}
      <input
        type="text"
        className={`vd-w-full vd-h-[28px] vd-rounded-[5px] !vd-text-xs vd-ring-1 vd-ring-inset vd-ring-select
          ${
            hasIcon ? "vd-pr-2 vd-pl-[28px]" : "vd-px-2"
          } placeholder:vd-text-label focus:vd-outline-none focus:vd-ring-1 focus:vd-ring-primary focus:vd-ring-inset`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
