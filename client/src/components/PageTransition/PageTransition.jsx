import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const routeMap = {
    "/": "/home",
    "/about": "/about",
    "/contact": "/contact",
    "/work": "/work",
};

function getRoute(input) {
    return routeMap[input] || "/Where you going"; // If input doesn't match any key, return "/default"
}

export const PageTransition = (OriginalComponent) => {
    return () => {
        const location = useLocation();
        return (
            <>
                <OriginalComponent />
                <motion.div
                    className="fixed z-[51] top-0 left-0 min-h-screen w-full bg-black flex justify-center items-center"
                    initial={{ clipPath: "circle(0px at 50% 0%)" }}
                    animate={{ clipPath: "circle(0px at 50% 0%)" }}
                    exit={{ clipPath: "circle(5000px at 50% 0%)" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <motion.h1
                        initial={{ translateX: "0px", opacity: 1 }}
                        animate={{ translateX: "0px", opacity: 1 }}
                        exit={{ translateX: "100px", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                        className="font-bebas text-7xl tracking-wider text-honeydew uppercase"
                    >
                        {getRoute(location.pathname)}
                    </motion.h1>
                </motion.div>
                <motion.div
                    className="fixed z-[51] top-0 left-0 min-h-screen w-full bg-black flex justify-center items-center"
                    initial={{ clipPath: "circle(5000px at 50% 0%)" }}
                    animate={{ clipPath: "circle(0px at 50% 0%)" }}
                    exit={{ clipPath: "circle(0px at 50% 0%)" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <motion.h1
                        initial={{ translateX: "-100px", opacity: 0 }}
                        animate={{ translateX: "0px", opacity: 1 }}
                        exit={{ translateX: "0px", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                        className="font-bebas text-7xl tracking-wider text-honeydew uppercase"
                    >
                        {getRoute(location.pathname)}
                    </motion.h1>
                </motion.div>
            </>
        );
    };
};
