import { motion } from "framer-motion"

const AboutWork = () => {
  return (
    <div 
    data-scroll-section
    className="pb-4 mb-36">
      <div className="flex flex-wrap justify-between items-start">
        {/* Kolom untuk Teks */}
        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-12 lg:py-24">
        <motion.h1
        className="text-base text-zinc-400 border-b w-full border-zinc-300 py-4"
        whileInView={{ opacity:1, scale: 1 }}
        initial={{ opacity:0, scale:0.5 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Let's work
        </motion.h1>
        <motion.h1
        className="text-4xl text-zinc-950 py-9" 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Web Development
        </motion.h1>
        <motion.p
        className="text-lg text-zinc-900" 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Specialize in building dynamic and interactive web applications using Laravel and React (2022 - 2023 Experienced as Freelance).
        </motion.p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-12 lg:py-24">
        <motion.h1
        className="text-base text-zinc-400 border-b w-full border-zinc-300 py-4" 
        whileInView={{ opacity:1, scale: 1 }}
        initial={{ opacity:0, scale:0.5 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Let's work
        </motion.h1>
        <motion.h1
        className="text-4xl text-zinc-950 py-9" 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            UI/UX Design
        </motion.h1>
        <motion.p
        className="text-lg text-zinc-950" 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Focus on creating intuitive, visually appealing, and user-centered digital experiences. My expertise lies in desingering user interfaces that are not only aesthetically pleasing but also highly functional and user-friendly.
        </motion.p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-12 lg:py-24">
        <motion.h1
        className="text-base text-zinc-400 border-b w-full border-zinc-300 py-4"
        whileInView={{ opacity:1, y: 1 }}
        initial={{ opacity:0, y:0.5 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Let's work
        </motion.h1>
        <motion.h1
        className="text-4xl text-zinc-950 py-9" 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Graphic Design
        </motion.h1>
        <motion.p
        className="text-lg text-zinc-900" 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration: 0.5, type:"spring", stiffness:120}}
        >
            Combine creativity with a deep understanding of design principles, color theory, and typography to craft visually striking and cohesive designs. 
        </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutWork
