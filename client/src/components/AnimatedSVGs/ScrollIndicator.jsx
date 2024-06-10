import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
    return (
        <>
            <motion.svg
                style={{
                    width: "100%",
                    height: "100%",
                }}
                viewBox="0 0 128 255"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    initial={{
                        pathLength: 0,
                        pathOffset: 0,
                    }}
                    animate={{
                        pathLength: [0, 1, 1],
                        pathOffset: [0, 0, 1],
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.5,
                    }}
                    strokeWidth={8}
                    stroke="#f1faee"
                    fill="none"
                    d="M 20,85 A 44,44 0 0,1 108,85 L 108,170 A 44,44 0 0,1 20,170 L 20,85 M 64,63 L 64,95 L 86,113 L 42,141 L 64,160 L 64,190 M 48,174 L 64,190 L 80,174"
                />
            </motion.svg>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 1.75,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className=" font-oswald tracking-tight text-honeydew"
            >
                scroll down
            </motion.h1>
        </>
    );
};

export default ScrollIndicator;
