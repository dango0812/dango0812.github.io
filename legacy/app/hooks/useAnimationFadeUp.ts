import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationFadeUpProps {
    y?: number;
    duration?: number;
    stagger?: number;
    scrub?: boolean | number;
    markers?: boolean;
    ease?: string;
    start?: string;
    end?: string;
}    

export function useAnimationFadeUp<T extends HTMLElement>(props?: AnimationFadeUpProps) {
    const elementsRef = useRef<T[]>([]);
    const {
        y = 50,
        duration = 1,
        stagger = 0.5,
        scrub = false,
        markers = false,
        ease = "power3.out",
        start = "top 90%",
        end = "bottom 20%"
    } = props || {};

    useEffect(() => {
        if (!elementsRef.current || elementsRef.current.length === 0) {
            return;
        }

        gsap.fromTo(
            elementsRef.current,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                ease,
                stagger,
                scrollTrigger: {
                    trigger: elementsRef.current[0],
                    start,
                    end,
                    scrub,
                    markers,
                },
            }
        );
    }, [y, duration, stagger, ease, start, end, scrub, markers]);

    const applyAnimationFadeUp = (element: T | null) => {
        if (element && !elementsRef.current.includes(element)) {
            elementsRef.current.push(element);
        }
    };

    return applyAnimationFadeUp;
}
