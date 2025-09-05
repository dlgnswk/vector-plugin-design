import { cn } from "../util";

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("vd-w-full vd-h-[1px] vd-bg-divider", className)} />
  );
};
