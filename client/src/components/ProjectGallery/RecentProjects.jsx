import React, { useState, useRef, useContext, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { TextAnimation } from "../textAnimation/TextAnimation";

export const RecentWorksFiveData = [
    {
        name: "OrganizeIT",
        type: "MERN stack TODO List app",
        ImgUrl: "/ProjectGalleryAssets/Photos/OrganizeIT.jpg",
        VidUrl: "/ProjectGalleryAssets/Videos/OrganizeIT.mp4",
        bg: "#f43f5e",
    },
    {
        name: "coming soon",
        type: "coming soon",
        ImgUrl: "/ProjectGalleryAssets/Photos/more_coming_soon.jpg",
        VidUrl: "/ProjectGalleryAssets/Videos/more_coming_soon.mp4",
        bg: "#fcd34d",
    },
    {
        name: "coming soon",
        type: "coming soon",
        ImgUrl: "/ProjectGalleryAssets/Photos/more_coming_soon.jpg",
        VidUrl: "/ProjectGalleryAssets/Videos/more_coming_soon.mp4",
        bg: "#84cc16",
    },
    {
        name: "coming soon",
        type: "coming soon",
        ImgUrl: "/ProjectGalleryAssets/Photos/more_coming_soon.jpg",
        VidUrl: "/ProjectGalleryAssets/Videos/more_coming_soon.mp4",
        bg: "#60a5fa",
    },
    {
        name: "coming soon",
        type: "coming soon",
        ImgUrl: "/ProjectGalleryAssets/Photos/more_coming_soon.jpg",
        VidUrl: "/ProjectGalleryAssets/Videos/more_coming_soon.mp4",
        bg: "#c084fc",
    },
];

export const RecentProjects = () => {
    const [hoverstate, sethoverstate] = useState({ active: false, index: 0 });

    return (
        <div className="mx-20 pb-20 mt-20 p-5 flex flex-col">
            <h1 className="py-5 text-lg font-bebas tracking-tightest">
                <TextAnimation color="#f1faee">Recent Projects</TextAnimation>
            </h1>

            <div
                onMouseEnter={() => {
                    sethoverstate((prevState) => ({
                        ...prevState,
                        active: true,
                    }));
                }}
                onMouseLeave={() => {
                    sethoverstate((prevState) => ({
                        ...prevState,
                        active: false,
                    }));
                }}
            >
                {RecentWorksFiveData.map((data, index) => (
                    <motion.div
                        initial={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                        }}
                        whileHover={{
                            paddingLeft: "4rem",
                            paddingRight: "4rem",
                            color: "#f1faee",
                        }}
                        key={index}
                        className="h-40 py-5 border-t-2 border-t-slate-300 flex flex-row justify-between items-center"
                        onMouseEnter={() => {
                            sethoverstate((prevState) => ({
                                ...prevState,
                                index: index,
                            }));
                        }}
                    >
                        <h1 className="text-7xl font-oswald tracking-tighter">
                            {data.name}
                        </h1>
                        <h2 className="text-lg font-oswald tracking-wide">
                            {data.type}
                        </h2>
                    </motion.div>
                ))}
            </div>
            <HoverComponent stateinfo={hoverstate} />
        </div>
    );
};

const HoverComponent = ({ stateinfo }) => {
    const ref = useRef(null);
    const curX = useMotionValue(0);
    const curY = useMotionValue(0);

    useEffect(() => {
        const moveCursor = (e) => {
            if (ref.current) {
                const { offsetWidth, offsetHeight } = ref.current;
                curX.set(e.clientX - offsetWidth / 2);
                curY.set(e.clientY - offsetHeight / 2);
            }
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    const variants = {
        active: {
            scale: 1,
        },
        notactive: {
            scale: 0,
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial={"notactive"}
            animate={stateinfo.active ? "active" : "notactive"}
            style={{
                translateX: curX,
                translateY: curY,
                transitionTimingFunction: "ease-out",
                transitionDuration: "0.2s",
            }}
            transition={{
                ease: [0.72, 0, 0.35, 0.99],
                duration: 0.6,
            }}
            className="fixed top-0 left-0 pointer-events-none h-[450px] w-[450px] flex flex-col items-center justify-center overflow-hidden"
        >
            <motion.div
                animate={{
                    translateY: `-${100 * stateinfo.index}%`,
                }}
                transition={{
                    ease: [0.72, 0, 0.35, 0.99],
                    duration: 0.8,
                }}
                className="h-[450px] w-[450px]"
            >
                {RecentWorksFiveData.map((data, index) => (
                    <div
                        key={`hover-${index}`}
                        className="h-[450px] w-[450px] flex items-center justify-center"
                        style={{
                            backgroundColor: `${data.bg}`,
                        }}
                    >
                        <video
                            className="object-fill h-[225px] w-[400px]"
                            height={225}
                            width={400}
                            loop
                            autoPlay
                            muted
                            poster={data.ImgUrl}
                        >
                            <source src={data.VidUrl} type="video/mp4" />
                            Video file not supported
                        </video>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};
