import React from "react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="vd-flex vd-items-center vd-w-full vd-h-8 vd-gap-2.5 vd-pl-4 vd-pr-2 vd-font-bold vd-text-title vd-text-base">
      {children}
    </div>
  );
};
