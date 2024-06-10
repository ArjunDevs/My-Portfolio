import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useVelocity,
    useTransform,
    useMotionValue,
    useAnimationFrame,
} from "framer-motion";

const useDimensions = () => {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});
    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setDimensions(ref.current.getBoundingClientRect().toJSON());
            }
        };

        if (ref.current) {
            setDimensions(ref.current.getBoundingClientRect().toJSON());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return [ref, dimensions];
};

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const ParallexTextBanner = ({
    children,
    tailwindtextstyles,
    positioncss = "",
    baseVelocity = 100,
}) => {
    const [bannerRef, bannerSize] = useDimensions();
    const [childRef, childSize] = useDimensions();
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => {
        return `${wrap(0, -((childSize.width / bannerSize.width) * 100), v)}%`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={`overflow-hidden select-none ${positioncss}`}>
            <motion.div
                ref={bannerRef}
                className="flex flex-nowrap w-fit"
                style={{ x }}
            >
                {[...Array(10)].map((_, index) => (
                    <h1
                        key={index}
                        ref={index === 0 ? childRef : null}
                        className={`pl-5 whitespace-nowrap ${tailwindtextstyles}`}
                    >
                        {children}
                    </h1>
                ))}
            </motion.div>
        </div>
    );
};
