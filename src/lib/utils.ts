import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function c(...inputs: unknown[]) {
  return [...inputs].filter((input) => Boolean(input)).join(" ");
}

// TODO list:
// 1. sort class names?
// 2. which one?
