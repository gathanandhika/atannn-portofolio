// Hero.jsx (Updated)
import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/nnathProfil.png";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
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
                        className="lg:pb-0 pb-8 text-[50px] text-transparent tracking-tight lg:text-[175px] lg:text-zinc-950 text-start lg:text-center mt-[-20px]"
                    >
                        GATHAN ANDHIKA
                    </p>
                </div>

                <div data-scroll data-scroll-speed="-2">
                    <span
                        className="lg:text-2xl text-lg lg:text-end block text-start mb-[0px] lg:mb-[0px] text-transparent lg:text-zinc-950"
                    >
                        Developer &mdash; Designer
                    </span>
                </div>

                <div data-scroll data-scroll-speed="-4">
                    <span
                        className="lg:text-5xl font-thin text-lg lg:text-start block text-start mb-[0px] lg:mb-[0px]"
                    >
                        <FiArrowDownRight />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;