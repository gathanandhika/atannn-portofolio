// Hero.jsx (Updated)

import { useEffect, useState } from "react";
import profilPic from "../assets/nnathProfil.png";

import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.src = profilPic;
    img.onload = () => {
      setImageLoaded(true);
      // Refresh locomotive scroll after image loads
      if (window.locomotiveScroll) {
        window.locomotiveScroll.update();
      }
    };
  }, []);
    return (
        <div 
        className="pb-4 lg:mb-24 text-zinc-950 relative h-screen flex flex-col items-center justify-center overflow-hidden" data-scroll-section>
            {/* Parallax Gambar */}
            <div data-scroll data-scroll-speed="-5">
                <div 
                className="lg:w-[650px] relative h-auto z-0">
                    <img 
                        src={profilPic}
                        alt="Hero Image" 
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            {/* Parallax Kontainer Teks */}
            <div className="absolute top-0 z-[-2] text-center w-full px-4">
                <div data-scroll data-scroll-speed="-1">
                    <p
                        className="lg:pb-0 pb-8 text-[20px] text-transparent tracking-tight lg:text-[175px] lg:text-zinc-950 text-start lg:text-center mt-[-20px]"
                    >
                        GATHAN ANDHIKA
                    </p>
                </div>

                <div data-scroll data-scroll-speed="-2">
                    <span
                        className="lg:text-2xl text-lg lg:text-end block text-start mb-[0px] lg:mt-[50px] text-transparent lg:text-zinc-950 lg:mr-32"
                    >
                        Developer &mdash; Designer
                    </span>
                </div>

                <div data-scroll data-scroll-speed="-4">
                    <span
                        className="lg:text-5xl font-thin text-lg lg:text-start block text-start mb-[0px] lg:mb-[0px] lg:ml-32"
                    >
                        <FiArrowDownRight />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;