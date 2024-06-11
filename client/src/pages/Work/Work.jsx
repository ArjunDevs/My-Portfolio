import React from "react";
import { PageTransition } from "../../components/PageTransition/PageTransition";
import { Footer } from "../../components/Footer/Footer";
import StickyMorphCursor from "../../components/customCursors/StickyMorphCursor";
import Navbar from "../../components/Navbar/Navbar";
import { AllWork } from "../../components/ProjectGallery/AllWork";

const Work = () => {
    return (
        <>
            <StickyMorphCursor />
            <div
                className="w-screen overflow-x-hidden"
                style={{
                    backgroundImage: "url('/HomeAssets/BG-4.png')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <Navbar />
                <AllWork />
                <Footer />
            </div>
        </>
    );
};

export default PageTransition(Work);
