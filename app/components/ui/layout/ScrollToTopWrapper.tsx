"use client";

// react
import { useEffect } from "react";

interface ScrollToTopWrapperProps {
    children: React.ReactNode;
}

export default function ScrollToTopWrapper({
    children
}: ScrollToTopWrapperProps) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="scroll-smooth"
        >
            {children}
        </div>
    );
}