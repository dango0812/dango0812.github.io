"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

interface AnimationWrapperProps {
    children: React.ReactNode;
}

export default function AnimationWrapper({
    children
}: AnimationWrapperProps) {
    useEffect(() => {
        gsap.fromTo(
            "main",
            { opacity: 0 },
            { opacity: 1, duration: 3, ease: "power4.out" }
        );
    }, []);

    return (
        <main>
            {children}
        </main>
    );
}