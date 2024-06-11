import React, { useState, useEffect } from "react";
import { PageTransition } from "../../components/PageTransition/PageTransition";
import StickyMorphCursor from "../../components/customCursors/StickyMorphCursor";
import Navbar from "../../components/Navbar/Navbar";
import { TextAnimation } from "../../components/textAnimation/TextAnimation";
import { motion } from "framer-motion";

const Contact = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const showTime =
        time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        NameOfOrganization: "",
        services: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };
    return (
        <>
            <StickyMorphCursor />
            <div
                className="w-screen overflow-x-hidden"
                style={{
                    backgroundImage: "url('/HomeAssets/BG-8.svg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <Navbar />

                <div className=" px-40 pt-10">
                    <TextAnimation color="#f1faee">
                        <h1 className="text-6xl text-honeydew font-oswald tracking-wide py-10">
                            Let's Start A Project Together
                        </h1>
                    </TextAnimation>

                    <form
                        className="flex flex-col pt-16 w-3/4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col py-10 border-b-2 border-honeydew">
                            <label
                                className="font-oswald text-honeydew pb-3 font-bold text-2xl"
                                htmlFor="name"
                            >
                                What's Your Name?
                            </label>
                            <input
                                type="text"
                                className=" bg-transparent h-10 focus:outline-none text-honeydew font-poppins text-xl"
                                id="name"
                                name="name"
                                placeholder="Jane Smith *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col py-10 border-b-2 border-honeydew">
                            <label
                                className="font-oswald text-honeydew pb-3 font-bold text-2xl"
                                htmlFor="email"
                            >
                                What's Your Email?
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                placeholder="example@gmail.com *"
                                className=" bg-transparent h-10 focus:outline-none text-honeydew font-poppins text-xl"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col py-10 border-b-2 border-honeydew">
                            <label
                                className="font-oswald text-honeydew pb-3 font-bold text-2xl"
                                htmlFor="NameOfOrganization"
                            >
                                What's the name of your organization?
                            </label>
                            <input
                                type="text"
                                id="NameOfOrganization"
                                name="NameOfOrganization"
                                placeholder="organization name/ Personal *"
                                value={formData.NameOfOrganization}
                                className=" bg-transparent h-10 focus:outline-none text-honeydew font-poppins text-xl"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col py-10 border-b-2 border-honeydew">
                            <label
                                className="font-oswald text-honeydew pb-3 font-bold text-2xl"
                                htmlFor="services"
                            >
                                What services are you looking for?
                            </label>
                            <textarea
                                id="services"
                                name="services"
                                value={formData.services}
                                placeholder="Web Development/ Full Stack Web Development *"
                                className=" bg-transparent h-10 focus:outline-none text-honeydew font-poppins text-xl"
                                onChange={handleChange}
                                rows="4"
                                required
                            />
                        </div>

                        <div className="flex flex-col py-10">
                            <label
                                className="font-oswald text-honeydew pb-3 font-bold text-2xl"
                                htmlFor="message"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                placeholder="Your Message Here*"
                                className=" bg-transparent h-10 focus:outline-none text-honeydew font-poppins text-xl"
                                onChange={handleChange}
                                rows="4"
                                required
                            />
                        </div>
                        <div className=" mt-40 pb-40 relative">
                            <div className="h-[2px] bg-honeydew " />
                            <motion.button
                                data-sticky
                                type="submit"
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
                                className="border-2 border-honeydew cursor-pointer absolute left-3/4 -top-20 w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center font-bebas tracking-wider text-xl"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </form>
                </div>
                <div className=" h-20 w-full p-5 flex flex-row justify-between items-center">
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
        </>
    );
};

export default PageTransition(Contact);
