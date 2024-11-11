import { memo } from "react";

function IconExternalLink({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#454545"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
        </svg>
    )
}

export default memo(IconExternalLink);