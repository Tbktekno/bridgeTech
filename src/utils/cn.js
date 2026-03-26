import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind class names
 * @param inputs - Class names
 * @returns - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
