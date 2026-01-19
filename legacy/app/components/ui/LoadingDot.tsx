// cn
import { cn } from "@libs/tailwind";

const dotConfig = [
    { color: "bg-amber-100", delay: "-0.3s" },
    { color: "bg-amber-300", delay: "-0.15s" },
    { color: "bg-amber-500", delay: "0s" }
];

export default function LoadingDot() {
    return (
        <div
            className="flex items-center justify-center space-x-2"
        >
            {dotConfig.map(({ color, delay }, idx) => (
                <div
                    key={idx}
                    className={cn(
                        color,
                        `w-4 h-4 rounded-full animate-bounce [animation-delay:${delay}]`
                    )}
                />
            ))}
        </div>
    )
}