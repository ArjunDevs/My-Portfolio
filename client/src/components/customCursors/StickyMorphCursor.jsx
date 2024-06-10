import React, { useState, useRef, useEffect } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    transform,
    animate,
} from "framer-motion";

const UNSTICK_DISTANCE_THRESHOLD = 10;

const getDistanceFromRect = (rect, x, y) => {
    const { top, left, width, height } = rect;
    const right = left + width;
    const bottom = top + height;
    const nearestX = Math.max(left, Math.min(x, right));
    const nearestY = Math.max(top, Math.min(y, bottom));
    const dx = x - nearestX;
    const dy = y - nearestY;

    return Math.sqrt(dx * dx + dy * dy);
};

function StickyMorphCursor() {
    const cursorRef = useRef(null);
    const hoveredElementRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const springOptions = {
        mass: 1,
        stiffness: 150,
        damping: 20,
    };

    const initialValues = {
        height: 32,
        width: 32,
        borderRadius: 9999,
    };
    const MotionHeight = useMotionValue(initialValues.height);
    const smoothHeight = useSpring(MotionHeight, springOptions);
    const MotionWidth = useMotionValue(initialValues.width);
    const smoothWidth = useSpring(MotionWidth, springOptions);
    const MotionBorderRadius = useMotionValue(initialValues.borderRadius);
    const smoothRadius = useSpring(MotionBorderRadius, springOptions);

    const cursorPos = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothCursorPos = {
        x: useSpring(cursorPos.x, springOptions),
        y: useSpring(cursorPos.y, springOptions),
    };

    const handleMouseMove = (e) => {
        e.stopPropagation();
        const { clientX, clientY } = e;

        if (isHovered && hoveredElementRef.current) {
            // console.log(
            //     "in if statement",
            //     isHovered,
            //     hoveredElementRef.current
            // );
            const { width, height, borderRadius } = window.getComputedStyle(
                hoveredElementRef.current
            );
            const boundingRect =
                hoveredElementRef.current.getBoundingClientRect();
            const hoveredCenter = {
                x: boundingRect.left + boundingRect.width / 2,
                y: boundingRect.top + boundingRect.height / 2,
            };
            const hoveredRFromCenter = {
                x: clientX - hoveredCenter.x,
                y: clientY - hoveredCenter.y,
            };

            const distanceFromRect = getDistanceFromRect(
                boundingRect,
                clientX,
                clientY
            );

            //
            cursorPos.x.set(boundingRect.left + hoveredRFromCenter.x * 0.12);
            cursorPos.y.set(boundingRect.top + hoveredRFromCenter.y * 0.12);
            MotionHeight.set(height);
            MotionWidth.set(width);
            MotionBorderRadius.set(borderRadius);

            animate(
                hoveredElementRef.current,
                {
                    x: hoveredRFromCenter.x * 0.1,
                    y: hoveredRFromCenter.y * 0.1,
                },
                { duration: 0 }
            );

            if (distanceFromRect > UNSTICK_DISTANCE_THRESHOLD) {
                setIsHovered(false);
                animate(
                    hoveredElementRef.current,
                    { x: 0, y: 0 },
                    { type: "spring", stiffness: 300, damping: 10, mass: 1 }
                );
                hoveredElementRef.current = null;
            }
        } else {
            // console.log(
            //     "in else statement",
            //     isHovered,
            //     hoveredElementRef.current
            // );
            cursorPos.x.set(clientX - initialValues.width / 2);
            cursorPos.y.set(clientY - initialValues.height / 2);
            MotionHeight.set(initialValues.height);
            MotionWidth.set(initialValues.width);
            MotionBorderRadius.set(initialValues.borderRadius);
        }
    };

    const handleMouseOver = (e) => {
        e.stopPropagation();
        setIsHovered(true);
        hoveredElementRef.current = e.currentTarget;
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        document.querySelectorAll("[data-sticky]").forEach((el) => {
            el.addEventListener("mouseover", handleMouseOver);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll("[data-sticky]").forEach((el) => {
                el.removeEventListener("mouseover", handleMouseOver);
            });
        };
    }, [isHovered]);

    return (
        <motion.div
            className="z-[50] backdrop-invert fixed pointer-events-none"
            style={{
                height: smoothHeight,
                width: smoothWidth,
                borderRadius: smoothRadius,
                left: smoothCursorPos.x,
                top: smoothCursorPos.y,
            }}
            ref={cursorRef}
        />
    );
}

export default StickyMorphCursor;
