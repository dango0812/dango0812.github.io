import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @param inputs - string, array, object
 *
 * ```
 * Example used string
 * Code : cn("text-base", "bg-white");
 * Return : "text-base bg-white"
 *
 * Example used array
 * Code : cn("text-base", ["bg-white", "rounded-lg"]);
 * Return : "text-base bg-white rounded-lg"
 *
 * Example used object
 * Code : const isAuthenticated = true;
 * cn("text-base", ["bg-white, "rounded-lg"], { hidden : !isAuthenticated, block : isAuthenticated });
 * Return : "text-base bg-white rounded-lg, block"
 * ```
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
