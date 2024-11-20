import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import Button from "./Button/Button";



const Projects = () => {
  // Menggunakan flatMap untuk menggabungkan semua items dari kategori menjadi satu array
  const allProjects = PROJECTS.flatMap(category => category.items);

  const experiencesToShow = allProjects.slice(0, 3);

  return (
    <div 
    data-scroll-section
    className="my-10 lg:px-24 mb-36">
      <p className="my-12 text-start text-base text-zinc-400 px-4">WORK</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {experiencesToShow.map((project) => (
          <CustomLink to={`/projects/${project.title}`} key={project.id} className="project-card">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 120,
                delay: 0.1,
              }}
              className="p-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <h3 className="lg:text-xl text-base mt-2">{project.title}</h3>
              <p className="lg:text-sm text-xs text-zinc-500">{project.description}</p>
            </motion.div>
          </CustomLink>
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
      <div className="lg:w-56 w-52 flex justify-center items-center">
        <CustomLink to="/work">
          <Button>More Work</Button>
        </CustomLink>
      </div>
    </div>
    </div>
  );
};

export default Projects;
