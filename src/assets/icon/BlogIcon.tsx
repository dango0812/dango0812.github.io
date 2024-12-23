import { memo } from "react";

const BlogIcon = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="M4 4h7.5a4 4 0 0 1 0 8H4V4zm0 8h7.5a4 4 0 0 1 0 8H4v-8z"
            />
        </svg>
    )
}

export default memo(BlogIcon);