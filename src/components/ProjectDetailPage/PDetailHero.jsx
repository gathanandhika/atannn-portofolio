import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../constants";
import PDetailDesc from "./PDetailDesc";

const PDetailHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { title } = useParams();

  const project = PROJECTS.flatMap(category => category.items)
    .find(project => project.title === title);

  if (!project) {
    return <p>Project not found</p>;
  }

  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.src = project.thumbnail;
    img.onload = () => {
      setImageLoaded(true);
      // Refresh locomotive scroll after image loads
      if (window.locomotiveScroll) {
        window.locomotiveScroll.update();
      }
    };
  }, [project.thumbnail]);


  return (
    <div data-scroll-section className="pb-2 lg:mb-35 mt-[-50px] relative">
      <div className="flex flex-wrap justify-center items-center relative">
        <div className="w-full">
          <div className="flex flex-col items-start">
            <h1 className="lg:my-20 my-12 lg:text-7xl text-4xl text-zinc-950 lg:px-24 px-8">
              {project.title}
            </h1>
          </div>
          
          <div
            data-scroll
            data-scroll-speed={-1}
            className="items-start lg:px-12 bg-white relative z-10 pb-12"
          >
            <PDetailDesc />
          </div>

          {/* Image container with opacity transition */}
          <motion.div
            data-scroll
            data-scroll-speed={-2}
            className="flex flex-col items-center relative z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              loading="lazy"
              decoding="async"
              className="max-w-full h-auto"
              src={project.thumbnail}
              alt="Thumbnail"
              style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PDetailHero;