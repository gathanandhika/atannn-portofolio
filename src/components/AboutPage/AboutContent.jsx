import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { ABOUT_DESC } from "../../constants";
import aboutImage from "../../assets/aboutImage.jpg";
import { Parallax } from "react-scroll-parallax";

const AboutContent = () => {
  return (
    <div 
    data-scroll-section
    className="pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between items-start">
        {/* Kolom untuk Teks */}
        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-0 py-12 lg:py-24 lg:mt-0 mt-[-40px]">
        <div data-scroll data-scroll-speed={-2} className="z-40 bg-white">
          <div className="lg:flex items-start mb-6 text-zinc-950">
            {/* Icon dengan animasi */}
            <div
            >
              <FiArrowDownRight className="text-4xl lg:text-5xl mr-20" style={{ strokeWidth: 0.8 }} />
            </div>
            {/* Teks Deskripsi */}
            <p
            >
              {ABOUT_DESC}
            </p>
          </div>
          </div>
        </div>

        {/* Kolom untuk Gambar */}
        <div className="w-full lg:w-2/3 flex justify-center p-6 lg:p-12">
        <div data-scroll data-scroll-speed={-5}>
          <img
            className="max-w-full h-auto lg:mt-2"
            src={aboutImage}
            alt="About Image"
          />
        </div>
        </div>
    </div>
    </div>
  );
};

export default AboutContent;
