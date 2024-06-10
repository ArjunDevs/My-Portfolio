import React from "react";
import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
    const lenisOptions = {
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
        smooth: true,
    };
    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
