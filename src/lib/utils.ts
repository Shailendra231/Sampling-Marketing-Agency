import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// The custom type scale in styles.css. Without this, tailwind-merge reads
// `text-heading` as a colour, so it neither drops a component's default size
// (e.g. `text-lg`) nor keeps its default text colour.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "heading", "title", "subtitle", "copy", "button", "caption", "eyebrow"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
