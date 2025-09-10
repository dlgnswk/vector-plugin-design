import React from "react";
import { cn } from "../util";
import { ChevronDown, ChevronUp } from "lucide-react";

type Option = { value: string; label: string };

interface SelectProps {
  value?: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const Select = ({
  value,
  onChange,
  options,
  placeholder,
  className = "",
  disabled = false,
}: SelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [highlight, setHighlight] = React.useState<number>(-1);
  const ref = React.useRef<HTMLDivElement>(null);

  const current = options.find((o) => o.value === value);

  React.useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        if (!disabled) setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (
      !open &&
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
    ) {
      setOpen(true);
      setHighlight(0);
      e.preventDefault();
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      setHighlight((i) => Math.min(options.length - 1, (i < 0 ? 0 : i) + 1));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setHighlight((i) => Math.max(0, (i < 0 ? 0 : i) - 1));
      e.preventDefault();
    } else if (e.key === "Enter") {
      const opt = options[highlight];
      if (opt) onChange(opt.value);
      setOpen(false);
      e.preventDefault();
    } else if (e.key === "Escape") {
      setOpen(false);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={ref}
      className={cn(`vd-relative ${className}`)}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className="vd-flex vd-w-full vd-h-[28px] vd-box-border vd-border vd-border-1 vd-border-select vd-rounded-[5px] vd-text-xs vd-items-center vd-justify-between vd-bg-white focus:vd-outline-none focus:vd-border-primary"
      >
        <span
          className={`${
            current ? "vd-text-title" : "vd-text-label"
          } vd-text-xs vd-pl-2`}
        >
          {current ? current.label : placeholder}
        </span>
        <div className="vd-flex vd-justify-center vd-items-center vd-w-6 vd-h-6">
          {open ? (
            <ChevronUp size={10} className="vd-text-label" />
          ) : (
            <ChevronDown size={10} className="vd-text-label" />
          )}
        </div>
      </button>

      {open && (
        <ul
          role="listbox"
          className="vd-absolute vd-z-10 vd-left-0 vd-right-0 vd-mt-1 vd-max-h-48 vd-overflow-auto vd-box-border vd-bg-white vd-border vd-border-1 vd-border-select vd-rounded-[5px] vd-shadow-sm vd-overflow-y-auto"
        >
          {options.map((opt, idx) => {
            const selected = opt.value === value;
            const active = idx === highlight;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setHighlight(idx)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`vd-px-2 vd-h-[28px] vd-flex vd-items-center vd-text-xs vd-cursor-default
                  ${selected ? "vd-bg-primary vd-text-white" : "vd-text-title"}
                  ${active ? "vd-bg-gray-50" : ""}`}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
