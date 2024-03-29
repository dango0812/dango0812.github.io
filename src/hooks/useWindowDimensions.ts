import { useState, useEffect } from 'react'

type WindowSize = {
    width: number,
    height: number
};

export default function useWindowDimensions(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0
    });
    
    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleSize);

        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return windowSize;
}