import React, { useState } from "react";
import { motion } from "framer-motion";

export const TextAnimation = ({ children, color }) => {
    const [hovered, sethovered] = useState(false);
    return (
        <div className="relative h-fit w-fit my-1">
            <div className="opacity-0 pointer-events-none">{children}</div>
            <motion.div
                className="absolute top-0 left-0 overflow-hidden border-b-4"
                style={{
                    borderColor: `${color}`,
                }}
                onMouseEnter={() => sethovered(true)}
                onMouseLeave={() => sethovered(false)}
                initial={{ height: 0 }}
                whileInView={{ height: "fit-content" }}
                transition={{
                    type: "tween",
                    ease: [0.58, 0.02, 0.46, 0.99],
                    duration: 1,
                }}
            >
                <motion.div
                    initial={{
                        height: 0,
                    }}
                    animate={{
                        height: hovered ? "100%" : 0,
                    }}
                    transition={{
                        type: "tween",
                        ease: [0.29, -0.01, 0.02, 0.98],
                        duration: 0.5,
                    }}
                    className="absolute bottom-0 left-0 w-full opacity-40"
                    style={{
                        backgroundColor: `${color}`,
                    }}
                />
                {children}
            </motion.div>
        </div>
    );
};
