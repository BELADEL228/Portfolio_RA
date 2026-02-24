import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Locale } from "@/app/providers"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Return a localized value based on the current locale. If the value is a
 * plain string it is returned unchanged. If it's a record, the locale is used
 * to pick the right translation with sensible fallbacks.
 */
export function localize(
  value: string | Record<Locale, string>,
  locale: Locale
): string {
  if (typeof value === "string") {
    return value;
  }
  if (value[locale]) return value[locale];
  if (value["fr"]) return value["fr"]; // default to french
  const first = Object.values(value)[0];
  return first || "";
}
