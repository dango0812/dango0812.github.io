// react
import { memo } from "react";

interface StarIconProps {
    className?: string;
    width: number;
    height: number;
}

function StarIcon({
    className,
    width,
    height
}: StarIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            className={className}
        >
            <path
                d="M24 2l6.9 14 15.1 2.2-11 10.7 2.6 15.1L24 36.6 10.4 44l2.6-15.1L2 18.2 17.1 16z"
            />
        </svg>
    );
}

export default memo(StarIcon);