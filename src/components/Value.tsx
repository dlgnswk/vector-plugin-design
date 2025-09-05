import { cn } from "../util";

interface ValueProps {
  icon?: string;
  value: string;
  className?: string;
}

export const Value = ({ icon, value, className }: ValueProps) => {
  return (
    <div
      className={cn(
        "vd-flex vd-items-center vd-w-full vd-h-[28px] vd-bg-value vd-rounded-[5px] vd-pr-2",
        !icon && "vd-pl-2",
        className
      )}
    >
      {icon && (
        <div className="vd-w-[28px] vd-h-[28px] vd-flex vd-items-center vd-justify-center vd-text-xs vd-text-label">
          {icon}
        </div>
      )}
      <div className="vd-text-xs">{value}</div>
    </div>
  );
};
