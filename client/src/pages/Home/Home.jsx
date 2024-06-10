import React, { useState } from "react";
import { PageTransition } from "../../components/PageTransition/PageTransition";
import { motion } from "framer-motion";
import { TextAnimation } from "../../components/textAnimation/TextAnimation";
import ScrollIndicator from "../../components/AnimatedSVGs/ScrollIndicator";
import { useNavigate } from "react-router-dom";
import { ParallexTextBanner } from "../../components/ParallaxTextBanner/ParallaxTextBanner";
import { useMousePosition } from "../../utils/useMousePosition";
import StickyMorphCursor from "../../components/customCursors/StickyMorphCursor";
import Navbar from "../../components/Navbar/Navbar";
import { RecentProjects } from "../../components/ProjectGallery/RecentProjects";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
    const navigate = useNavigate();
    const { x, y } = useMousePosition();
    const [active, setActive] = useState(false);

    const maskSize = active ? 200 : 0;

    return (
        <>
            <StickyMorphCursor />
            <div className="w-screen overflow-x-hidden">
                <section
                    className="h-screen w-full relative"
                    style={{
                        backgroundImage: "url('/HomeAssets/BG-3.png')",
                        backgroundSize: "cover",
                    }}
                >
                    <Navbar />

                    <div className="w-full flex flex-col items-center pt-20 justify-center">
                        <TextAnimation color="#e63946">
                            <h1 className="text-4xl font-oswald text-honeydew">
                                Hi! I'm
                            </h1>
                        </TextAnimation>

                        <TextAnimation color="#1d3557">
                            <h1 className="text-9xl pl-3 font-bebas font-extrabold text-honeydew tracking-widest">
                                ARJUN TANDON
                            </h1>
                        </TextAnimation>
                        <TextAnimation color="#e63946">
                            <h1 className="font-orbitron text-2xl font-bold text-red-pantone">
                                Full Stack Developer and Designer
                            </h1>
                        </TextAnimation>

                        <div className="flex flex-row justify-center items-center mt-5">
                            <a
                                href="/Resume/SampleResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    data-sticky
                                    className="m-5 text-2xl font-bold font-roboto-condensed px-5 py-3 text-berkeley-blue bg-honeydew/50 rounded-full"
                                >
                                    Download Resume
                                </button>
                            </a>

                            <button
                                onClick={() => navigate("/contact")}
                                data-sticky
                                className="m-5 text-2xl font-bold font-roboto-condensed px-12 py-3 text-berkeley-blue bg-honeydew/50 rounded-full"
                            >
                                Contact Me
                            </button>
                        </div>

                        <div className=" h-32 w-28 flex flex-col items-center justify-center">
                            <ScrollIndicator />
                        </div>
                    </div>

                    <ParallexTextBanner
                        baseVelocity={1}
                        tailwindtextstyles={
                            "text-6xl text-honeydew font-rubik-mono-one tracking-wide font-semibold"
                        }
                        positioncss={"absolute bottom-0"}
                    >
                        {"\u2022"}WHERE CREATVITY MEETS CODE
                    </ParallexTextBanner>
                </section>

                <section
                    className="w-full"
                    style={{
                        backgroundImage: "url('/HomeAssets/BG-4.png')",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="flex flex-row justify-between items-center px-10 pt-40">
                        <div className="h-fit w-3/4 px-16">
                            <div className="font-bebas tracking-wider text-2xl ml-10">
                                <TextAnimation color="#f1faee">
                                    Hello! I'm{" "}
                                    <span className="text-honeydew">
                                        Arjun Tandon
                                    </span>
                                    , a passionate{" "}
                                    <span className="text-honeydew">
                                        full-stack software engineer
                                    </span>{" "}
                                    with a love for creating
                                </TextAnimation>
                                <TextAnimation color="#f1faee">
                                    innovative solutions and bringing ideas to
                                    life. With a strong foundation in{" "}
                                    <span className="text-honeydew">C++</span>,{" "}
                                    <span className="text-honeydew">
                                        Python
                                    </span>
                                    , and
                                </TextAnimation>
                                <TextAnimation color="#f1faee">
                                    <span className="text-honeydew">
                                        {" "}
                                        HTML/CSS
                                    </span>
                                    , coupled with expertise in modern
                                    frameworks such as{" "}
                                    <span className="text-honeydew">
                                        React.js
                                    </span>
                                    ,
                                    <span className="text-honeydew">
                                        Express.js
                                    </span>
                                    , and{" "}
                                </TextAnimation>
                                <TextAnimation color="#f1faee">
                                    <span className="text-honeydew">
                                        Node.js
                                    </span>
                                    , I thrive on tackling complex challenges
                                    and crafting elegant solutions that make a
                                </TextAnimation>
                                <TextAnimation color="#f1faee">
                                    difference.
                                </TextAnimation>
                            </div>
                        </div>
                        <div className="h-fit w-1/4">
                            <TextAnimation color="#f1faee">
                                <p className="font-rubik-mono-one tracking-wider mx-5">
                                    Driven by a passion for continuous learning
                                    and growth, I'm always exploring new
                                    technologies and pushing the boundaries of
                                    what's possible in the world of software
                                    development.
                                </p>
                            </TextAnimation>
                        </div>
                    </div>
                    <div className=" mt-64 pb-20 mx-20 relative">
                        <div className="h-[2px] bg-berkeley-blue " />
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
                            onClick={() => navigate("/about")}
                            className="border-2 border-berkeley-blue cursor-pointer absolute left-3/4 -top-20 w-40 h-40 rounded-full bg-red-pantone flex items-center justify-center font-bebas tracking-wider text-xl"
                        >
                            About Me
                        </motion.div>
                    </div>
                    <RecentProjects />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </>
    );
};

export default PageTransition(Home);
