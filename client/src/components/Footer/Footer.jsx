import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TextAnimation } from "../textAnimation/TextAnimation";
import { useNavigate } from "react-router-dom";

const emailid = "arjuntandonprofessional@gmail.com";

export const Footer = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const showTime =
        time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

    return (
        <div
            className="h-screen relative"
            style={{
                backgroundImage: "url('/HomeAssets/BG-7.png')",
                backgroundSize: "cover",
            }}
        >
            <div className="h-full w-full pt-20 px-60">
                <h1 className="text-honeydew pt-10 font-bebas tracking-wider text-8xl">
                    <TextAnimation color="#1d3557">Let's Work</TextAnimation>
                    <TextAnimation color="#1d3557">Together</TextAnimation>
                </h1>
                <div className="my-20 h-[2px] bg-honeydew relative">
                    <motion.div
                        data-sticky
                        animate={{
                            scale: [1, 1.2, 1, 1.1, 1],
                        }}
                        whileHover={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            type: "tween",
                            duration: 2,
                        }}
                        onClick={() => navigate("/contact")}
                        className="border-2 border-honeydew cursor-pointer absolute left-3/4 -top-20 w-40 h-40 rounded-full bg-red-pantone flex items-center justify-center font-bebas tracking-wider text-xl"
                    >
                        Contact Me
                    </motion.div>
                </div>
                <div className="my-20 flex flex-row">
                    <a href={`mailto:${emailid}`}>
                        <motion.button
                            whileHover={{ backgroundColor: "#e63946" }}
                            transition={{
                                type: "tween",
                                duration: 0.5,
                            }}
                            className="p-5 tracking-wide mr-10 text-honeydew bg-transparent font-oswald text-2xl rounded-full border-2 border-honeydew"
                        >
                            {emailid}
                        </motion.button>
                    </a>
                </div>
            </div>
            <div className=" h-20 w-full p-5 flex flex-row justify-between items-center absolute bottom-0 left-0">
                <div className="flex flex-row justify-between items-center">
                    <div className="pr-5">
                        <h1 className=" text-gray-200 font-oswald tracking-tighter text-sm pb-5">
                            {" "}
                            VERSION
                        </h1>
                        <h1 className=" text-honeydew font-bebas tracking-wide text-xl">
                            2024 Edition
                        </h1>
                    </div>
                    <div className="pl-5">
                        <h1 className=" text-gray-200 font-oswald tracking-tighter text-sm pb-5">
                            {" "}
                            LOCAL TIME
                        </h1>
                        <h1 className=" text-honeydew font-bebas tracking-wide text-xl">
                            {showTime} IST
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="pr-5">
                        <h1 className=" text-gray-200 font-oswald tracking-tighter text-sm pb-5">
                            {" "}
                            SOCIALS
                        </h1>
                        <div className="flex flex-row justify-start">
                            <h1
                                data-sticky
                                className=" text-honeydew font-bebas tracking-wide text-xl pr-5 rounded-full p-1 cursor-pointer"
                            >
                                LinkedIn
                            </h1>
                            <h1
                                data-sticky
                                className=" text-honeydew font-bebas tracking-wide text-xl pr-5 rounded-full p-1 cursor-pointer"
                            >
                                GitHub
                            </h1>
                            <h1
                                data-sticky
                                className=" text-honeydew font-bebas tracking-wide text-xl pr-5 rounded-full p-1 cursor-pointer"
                            >
                                Instagram
                            </h1>
                            <h1
                                data-sticky
                                className=" text-honeydew font-bebas tracking-wide text-xl rounded-full p-1 cursor-pointer"
                            >
                                Twitter
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
