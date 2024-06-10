import React from "react";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
    const location = useLocation();
    return (
        <SmoothScroll>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </SmoothScroll>
    );
};

export default App;
