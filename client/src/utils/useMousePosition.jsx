import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const updateMousePosition = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return mousePos;
};
