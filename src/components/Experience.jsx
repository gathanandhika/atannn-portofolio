import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import Button from "./Button/Button";

const Experience = () => {
  // Menggunakan flatMap untuk meratakan semua experiences dari setiap kategori
  const allExperiences = EXPERIENCES.flatMap(category => category.experiences);

  // Mengambil hanya 4 pengalaman pertama
  const experiencesToShow = allExperiences.slice(0, 3);

  return (
    <div 
    data-scroll-section 
    className="pb-4 lg:px-24">
      <h1 className="text-start lg:text-base text-xs lg:px-12 px-8 lg:py-20 py-8 text-zinc-400">
        EXPERIENCE
      </h1>
      <div>
        {experiencesToShow.map((experience) => (
          <CustomLink
            to={`/experience/${experience.company}`} // Misalnya menggunakan company sebagai ID
            key={experience.company}
            className="project-card0 mb-4 flex flex-wrap lg:justify-center lg:py-8 px-8"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full flex justify-between items-center border-b lg:py-8"
            >
              <div className="flex-grow lg:mt-[-80px]">
                <p className="py-6 text-zinc-950 lg:text-5xl">
                  {experience.role}
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <p className="py-6 text-neutral-600 lg:text-base text-xs lg:mt-[-80px]">
                  <span className="">{experience.company}</span>
                </p>
              </div>
            </motion.div>
          </CustomLink>
        ))}
      </div>
      <div className="flex justify-center items-center">
      <div className="lg:w-56 w-52 flex justify-center items-center">
          <CustomLink to="/career">
            <Button>More Experience</Button>
          </CustomLink>
        </div>
      </div>

    </div>
  );
};

export default Experience;
