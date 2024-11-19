import React from "react";
import AboutHero from "../components/AboutPage/AboutHero";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutPage/AboutContent";
import AboutWork from "../components/AboutPage/AboutWork";
import Footer from "../components/Footer";
import { useResetScroll } from "../hooks/useResetScroll";

const About = () => {
  useResetScroll();
  return (
    <div>
      <Navbar />

      <div className="lg:px-28">
        <AboutHero />
        {/* AboutWork dengan z-index lebih tinggi */}
        <div className="relative">
        <AboutContent />

        </div>

        {/* AboutContent dengan z-index lebih rendah */}
        <div className="relative bg-white">
        <AboutWork />

        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default About;
