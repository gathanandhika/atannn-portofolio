import { motion } from "framer-motion";
import { PROJECTS } from "../../constants"; // Mengimpor data proyek
import CustomLink from "../CustomLink";

const WorkListDesign = () => {
  // Memfilter proyek berdasarkan tipe 'Development'
  const designProjects = PROJECTS.find((project) => project.type === "Design")?.items || [];

  return (
    <div className="my-10 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {designProjects.map((project) => (
          <CustomLink to={`/projects/${project.title}`} key={project.id} className="project-card">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.5,
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
              <h3 className="text-xl mt-2">{project.title}</h3>
              <p className="text-sm text-zinc-500">{project.description}</p>
            </motion.div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default WorkListDesign;
