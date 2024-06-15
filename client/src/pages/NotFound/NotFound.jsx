import React from "react";
import { PageTransition } from "../../components/PageTransition/PageTransition";
import StickyMorphCursor from "../../components/customCursors/StickyMorphCursor";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <StickyMorphCursor />
            <div
                className="w-screen h-screen overflow-x-hidden"
                style={{
                    backgroundImage: "url('/HomeAssets/BG-3.png')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <Navbar />
                <div className="w-full px-40 py-20">
                    <h1 className="text-8xl font-bebas tracking-wide font-bold text-honeydew">
                        404 - How did you get here ?
                    </h1>
                    <div className="flex justify-center items-center">
                        <img
                            className="w-40 h-40 my-10"
                            src="/AnimatedGIFs/confused.gif"
                            alt="confused gif"
                        />
                    </div>
                    <div className=" mt-20 pb-10 relative">
                        <div className="h-[2px] bg-honeydew " />
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
                            onClick={() => navigate("/")}
                            className="border-2 border-honeydew cursor-pointer absolute left-3/4 -top-20 w-40 h-40 rounded-full bg-red-pantone flex items-center justify-center font-bebas tracking-wider text-xl"
                        >
                            Go To Home
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PageTransition(NotFound);
