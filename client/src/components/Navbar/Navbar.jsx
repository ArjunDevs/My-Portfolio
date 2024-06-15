import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSideNavOpened, setIsSideNavOpened] = useState(false);

    const sideNavVariants = {
        open: {
            opacity: 1,
            background: "#F1FAEE",
            x: "0%",
            clipPath: `circle(${window.innerHeight * 2 + 500}px at 460px 40px)`,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                background: {
                    duration: 1,
                },
            },
        },
        closed: {
            opacity: 1,
            x: "0%",
            background: "rgba(0,0,0,0)",
            clipPath: "circle(32px at 460px 40px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                background: {
                    duration: 2,
                },
            },
        },
    };

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: {
                        delay,
                        type: "spring",
                        duration: 0.5,
                        bounce: 0,
                    },
                    opacity: { delay, duration: 0.01 },
                },
            };
        },
    };

    const handleSideNavOpenClose = () => {
        setIsSideNavOpened((prevValue) => !prevValue);
    };

    return (
        <div>
            <motion.div
                onViewportLeave={() => setIsNavVisible(false)}
                onViewportEnter={() => setIsNavVisible(true)}
                className="flex flex-row justify-between items-center px-10 py-2 bg-transparent"
            >
                <div>
                    <Link to={`/`}>
                        <div
                            data-sticky
                            className="flex flex-row justify-between items-center rounded-full py-2 px-3"
                        >
                            <h1 className=" font-libre-barcode font-normal text-6xl text-honeydew">
                                #ARJUN TANDON#
                            </h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className="flex flex-row justify-between items-center">
                        <li
                            data-sticky
                            className="mr-10 h-20 w-20 flex justify-center items-center rounded-full"
                        >
                            <Link to={`/work`}>
                                <h1 className=" font-bebas text-2xl text-honeydew font-semibold tracking-wider">
                                    WORK
                                </h1>
                            </Link>
                        </li>
                        <li
                            data-sticky
                            className="mx-10 h-20 w-20 flex justify-center items-center rounded-full"
                        >
                            <Link to={`/about`}>
                                <h1 className=" font-bebas text-2xl text-honeydew font-semibold tracking-wider">
                                    ABOUT
                                </h1>
                            </Link>
                        </li>
                        <li
                            data-sticky
                            className="ml-10 h-20 w-20 flex justify-center items-center rounded-full"
                        >
                            <Link to={`/contact`}>
                                <h1 className=" font-bebas text-2xl text-honeydew font-semibold tracking-wider">
                                    CONTACT
                                </h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <AnimatePresence>
                {(!isNavVisible || isSideNavOpened) && (
                    <motion.div
                        variants={sideNavVariants}
                        initial={{
                            opacity: 0,
                            x: "100%",
                            clipPath: "circle(32px at 460px 40px)",
                        }}
                        animate={isSideNavOpened ? "open" : "closed"}
                        exit={{
                            x: "100%",
                            transition: {
                                duration: 1,
                                type: "tween",
                            },
                        }}
                        className="fixed h-screen w-[500px] z-40 flex justify-center items-center top-0 right-0"
                    >
                        <motion.svg
                            onClick={handleSideNavOpenClose}
                            className="h-8 w-8 font-extrabold absolute top-[24px] left-[444px] cursor-pointer"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            initial="hidden"
                            animate="visible"
                        >
                            {isSideNavOpened && (
                                <>
                                    <motion.line
                                        x1="0"
                                        y1="20"
                                        x2="20"
                                        y2="0"
                                        stroke="#1D3557"
                                        strokeWidth={2}
                                        variants={draw}
                                        custom={0}
                                    />
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="20"
                                        y2="20"
                                        stroke="#1D3557"
                                        strokeWidth={2}
                                        variants={draw}
                                        custom={0.5}
                                    />
                                </>
                            )}
                            {!isSideNavOpened && (
                                <>
                                    <motion.line
                                        x1="0"
                                        y1="5"
                                        x2="20"
                                        y2="5"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                        variants={draw}
                                        custom={0}
                                    />
                                    <motion.line
                                        x1="0"
                                        y1="10"
                                        x2="20"
                                        y2="10"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                        variants={draw}
                                        custom={0.5}
                                    />
                                    <motion.line
                                        x1="0"
                                        y1="15"
                                        x2="20"
                                        y2="15"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                        variants={draw}
                                        custom={1}
                                    />
                                </>
                            )}
                        </motion.svg>
                        <div className="w-full">
                            <h1 className="mx-10 font-bebas font-bold text-lg">
                                # NavLinks
                            </h1>
                            <ul className="m-10">
                                <li className="mb-10">
                                    <Link to={`/`}>
                                        <motion.h1
                                            initial={{ scale: 1 }}
                                            whileHover={{
                                                scale: 1.1,
                                                color: "#1d3557",
                                            }}
                                            className=" font-bebas text-8xl text-red-pantone w-fit"
                                        >
                                            HOME
                                        </motion.h1>
                                    </Link>
                                </li>
                                <li className="mb-10">
                                    <Link to={`/work`}>
                                        <motion.h1
                                            initial={{ scale: 1 }}
                                            whileHover={{
                                                scale: 1.1,
                                                color: "#1d3557",
                                            }}
                                            className=" font-bebas text-8xl text-red-pantone w-fit"
                                        >
                                            WORK
                                        </motion.h1>
                                    </Link>
                                </li>
                                <li className="mb-10">
                                    <Link to={`/about`}>
                                        <motion.h1
                                            initial={{ scale: 1 }}
                                            whileHover={{
                                                scale: 1.1,
                                                color: "#1d3557",
                                            }}
                                            className=" font-bebas text-8xl text-red-pantone w-fit"
                                        >
                                            ABOUT
                                        </motion.h1>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/contact`}>
                                        <motion.h1
                                            initial={{ scale: 1 }}
                                            whileHover={{
                                                scale: 1.1,
                                                color: "#1d3557",
                                            }}
                                            className=" font-bebas text-8xl text-red-pantone w-fit"
                                        >
                                            CONTACT
                                        </motion.h1>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="absolute bottom-0 left-0 px-5 flex flex-row justify-center items-center">
                            <span>
                                <img
                                    src="/NavbarAssets/copyright.svg"
                                    alt="copyright"
                                    className="w-4 h-4"
                                />
                            </span>
                            <h1 className="font-bebas font-bold text-lg">
                                <span>ARJUN TANDON</span>
                            </h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;
