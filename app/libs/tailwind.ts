// clsx
import { ClassValue, clsx } from "clsx";
// tailwind merge
import { twMerge } from "tailwind-merge";

/**
 * @param inputs - string, array, object
 * @returns 병합된 string 을 반환합니다.
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