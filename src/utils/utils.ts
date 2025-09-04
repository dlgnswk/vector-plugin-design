import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge({
    extend: {
      classGroups: {
        "font-size": [{ text: ["h1", "h2"] }],
      },
    },
  });

  return twMerge(clsx(inputs));
}
