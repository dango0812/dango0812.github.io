// libs
import { cn } from "@libs/tailwind";

interface WaveProps {
  className?: string;
}

export default function Wave({
  className
}: WaveProps) {
  return (
    <svg
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={cn(
        "w-full h-32",
        className
      )}
    >
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff4e1e" />
          <stop offset="100%" stopColor="#ff6f00" />
        </linearGradient>
      </defs>
      
      <g transform="scale(1, -1) translate(0, -200)">
        <path fill="url(#orangeGradient)">
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0 100 Q 100 30 200 70 T 400 75 T 600 65 T 800 80 L800 200 L0 200 Z;
              M0 100 Q 100 50 200 90 T 400 85 T 600 65 T 800 60 L800 200 L0 200 Z;
              M0 100 Q 100 30 200 70 T 400 75 T 600 65 T 800 80 L800 200 L0 200 Z
            "
          />
        </path>
      </g>
    </svg>
  )
}