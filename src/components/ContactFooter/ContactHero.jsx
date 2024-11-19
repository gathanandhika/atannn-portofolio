import { motion } from "framer-motion"


const ContactHero = () => {
  return (
    <div data-scroll-section className="pb-4 lg:p-2">
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:px-28">
                <div className="flex flex-col items-center border-b border-zinc-600 ">
                    <motion.h1 
                    whileInView={{ opacity:1, y: 0 }}
                    initial={{ opacity:0, y:-100 }}
                    transition={{ duration: 0.5, type:"spring", stiffness:120}}
                    className="text-4xl lg:text-8xl text-white mb-12 pt-28"> 
                    Let's work together
                    </motion.h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactHero
