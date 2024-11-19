import React from 'react';
import CustomLink from "../CustomLink";
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants'; // Mengimpor data pengalaman

const CareerWorkList = () => {
  // Ambil hanya pengalaman dengan status "Work"
  const workExperiences = EXPERIENCES.find(exp => exp.status === "Work")?.experiences || [];

  return (
    <div className="pb-4 lg:px-24">
      <div className="sm:grid-cols-2 md:grid-cols-3 gap-4">
        {workExperiences.length > 0 ? (
          workExperiences.map((experience) => (
            <CustomLink 
              to={`/experience/${experience.company}`} 
              key={experience.id}
              className="project-card0 mb-4 flex flex-wrap lg:justify-center lg:py-8 px-8"
            >
              <motion.div 
                key={experience.id}  // Gunakan key unik untuk setiap pengalaman
                className="w-full flex justify-between items-center border-b lg:py-8"
              >
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120,
                    delay: 0.1,
                  }}
                  className="flex-grow lg:mt-[-80px]"
                >
                  <p className="py-6 text-zinc-950 lg:text-5xl">
                    {experience.role}
                  </p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120,
                    delay: 0.1,
                  }}
                  className="flex-shrink-0 text-center"
                >
                  <p className="py-6 text-neutral-600 lg:text-base text-xs lg:mt-[-80px]">
                    <span>{experience.company}</span>
                  </p>
                </motion.div>
              </motion.div>
            </CustomLink>
          ))
        ) : (
          <p>No work experiences available.</p> // Tampilkan pesan jika tidak ada pengalaman
        )}
      </div>
    </div>
  );
};

export default CareerWorkList;
