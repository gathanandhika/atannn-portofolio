import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { ABOUT_DESC } from "../../constants";
import aboutImage from "../../assets/aboutImage.jpg";
import { useEffect, useState } from "react";

const AboutContent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.src = aboutImage;
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
      data-scroll-section
      className="pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap justify-between items-start">
        {/* Text Column */}
        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-0 py-12 lg:py-24 lg:mt-0 mt-[-40px]">
          <div 
            data-scroll 
            data-scroll-speed={-2} 
            className="z-40 bg-white"
          >
            <div className="lg:flex items-start mb-6 text-zinc-950">
              <FiArrowDownRight 
                className="text-4xl lg:text-5xl mr-20" 
                style={{ strokeWidth: 0.8 }} 
              />
              <p>{ABOUT_DESC}</p>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-2/3 flex justify-center p-6 lg:p-12">
          <motion.div
            data-scroll
            data-scroll-speed={-5}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <img
              className="max-w-full h-auto lg:mt-2"
              src={aboutImage}
              alt="About Image"
              style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;