import React from "react";
import { PageTransition } from "../../components/PageTransition/PageTransition";
import StickyMorphCursor from "../../components/customCursors/StickyMorphCursor";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { TextAnimation } from "../../components/textAnimation/TextAnimation";

const About = () => {
    return (
        <>
            <StickyMorphCursor />
            <div className="w-screen overflow-x-hidden">
                <div
                    className="w-full"
                    style={{
                        backgroundImage: "url('/HomeAssets/BG-9.svg')",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <Navbar />
                    <div className="mx-20">
                        <div className="mb-32">
                            <div className="mt-10 flex flex-row items-center justify-around">
                                <div className="w-1/2">
                                    <TextAnimation color="#f1faee">
                                        <h1 className=" text-6xl font-bebas text-red-pantone ">
                                            ABOUT ME
                                        </h1>
                                    </TextAnimation>
                                    <p className="text-3xl text-honeydew font-oswald tracking-wide pt-5 pr-5">
                                        Hello! I'm Arjun Tandon, a passionate
                                        and driven Full Stack Web Developer
                                        dedicated to building dynamic,
                                        responsive, and user-friendly web
                                        applications. With a robust foundation
                                        in both front-end and back-end
                                        technologies, I enjoy transforming ideas
                                        into functional and aesthetically
                                        pleasing digital experiences.
                                    </p>
                                </div>
                                <div className="w-1/2 pt-5 pl-5 flex justify-center items-center">
                                    <img
                                        className="my-10 rounded-xl"
                                        width={500}
                                        src="/AnimatedGIFs/working.gif"
                                        alt="confused gif"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-32">
                            <div className="mt-10 flex flex-row items-center justify-around">
                                <div className="w-1/2 pr-5 pt-5 flex justify-center items-center">
                                    <img
                                        className="my-10 rounded-xl"
                                        src="/AnimatedGIFs/working-2.gif"
                                        alt="confused gif"
                                    />
                                </div>
                                <div className="w-1/2 pl-5">
                                    <TextAnimation color="#f1faee">
                                        <h1 className=" text-6xl font-bebas text-red-pantone">
                                            SKILLS
                                        </h1>
                                    </TextAnimation>
                                    <div className="pt-5">
                                        <h1 className=" font-bebas tracking-tight text-3xl text-honeydew ">
                                            Frontend
                                        </h1>
                                        <div className=" mb-5 flex flex-row">
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                HTML
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                CSS
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                Javascript
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                React.js
                                            </h1>
                                        </div>
                                        <h1 className=" font-bebas tracking-tight text-3xl text-honeydew ">
                                            Backend
                                        </h1>
                                        <div className="mb-5 flex flex-row">
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                Node.js
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                Express.js
                                            </h1>
                                        </div>
                                        <h1 className=" font-bebas tracking-tight text-3xl text-honeydew ">
                                            Databases
                                        </h1>
                                        <div className="mb-5 flex flex-row">
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                MongoDB
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                MSSQL
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                PostgreSQL
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                Redis
                                            </h1>
                                        </div>
                                        <h1 className=" font-bebas tracking-tight text-3xl text-honeydew ">
                                            Programming Languages
                                        </h1>
                                        <div className="mb-5 flex flex-row">
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                Python
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                C++
                                            </h1>
                                            <h1 className="rounded-full bg-black font-oswald text-xl px-3 mr-2 text-honeydew">
                                                Javasript
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-32">
                            <div className="mt-10 flex flex-row items-center justify-around">
                                <div className="w-1/2">
                                    <TextAnimation color="#f1faee">
                                        <h1 className=" text-6xl font-bebas text-red-pantone ">
                                            MY JOURNEY
                                        </h1>
                                    </TextAnimation>
                                    <p className="text-3xl text-honeydew font-oswald tracking-wide pt-5 pr-5">
                                        As I embark on my professional journey,
                                        I bring a fresh perspective and a
                                        relentless desire to learn and innovate.
                                        While I may be at the start of my
                                        career, I've already undertaken several
                                        personal projects that have honed my
                                        skills and ignited my passion for web
                                        development.
                                    </p>
                                </div>
                                <div className="w-1/2 pt-5 pl-5 flex justify-center items-center">
                                    <img
                                        className="my-10 rounded-xl"
                                        src="/AnimatedGIFs/journey.gif"
                                        alt="confused gif"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-32">
                            <div className="mt-10 flex flex-row items-center justify-around">
                                <div className="w-1/2 pr-5 pt-5 flex justify-center items-center">
                                    <img
                                        className="my-10 rounded-xl"
                                        src="/AnimatedGIFs/motivation.gif"
                                        alt="confused gif"
                                    />
                                </div>
                                <div className="w-1/2 pl-5">
                                    <TextAnimation color="#f1faee">
                                        <h1 className=" text-6xl font-bebas text-red-pantone">
                                            WHAT DRIVES ME
                                        </h1>
                                    </TextAnimation>
                                    <p className="text-3xl text-honeydew font-oswald tracking-wide pt-5">
                                        I'm motivated by the challenge of
                                        solving complex problems and the
                                        satisfaction of seeing my work come to
                                        life on the web. I thrive in
                                        collaborative environments where I can
                                        contribute my ideas and learn from
                                        others.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-32">
                            <div className="mt-10 flex flex-row items-center justify-around">
                                <div className="w-1/2">
                                    <TextAnimation color="#f1faee">
                                        <h1 className=" text-6xl font-bebas text-red-pantone">
                                            FUTURE GOALS
                                        </h1>
                                    </TextAnimation>
                                    <p className="text-3xl text-honeydew font-oswald tracking-wide pt-5 pr-5">
                                        My goal is to continuously expand my
                                        knowledge and expertise, taking on more
                                        challenging projects and building a
                                        diverse portfolio. I'm particularly
                                        interested in working on projects that
                                        make a positive impact and push the
                                        boundaries of technology.
                                    </p>
                                </div>
                                <div className="w-1/2 pt-5 pl-5 flex justify-center items-center">
                                    <img
                                        className="my-10 rounded-xl"
                                        width={400}
                                        src="/AnimatedGIFs/goals.gif"
                                        alt="confused gif"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default PageTransition(About);
