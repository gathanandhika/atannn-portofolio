import { motion } from "framer-motion"

const AboutHero = () => {
  return (
    <div 
    data-scroll-section
    className="pb-4 lg:mb-35 mt-[-50px]">
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full">
                <div className="flex flex-col items-center border-b border-zinc-300">
                    <motion.p 
                    whileInView={{ opacity:1, y: 0 }}
                    initial={{ opacity:0, y:100 }}
                    transition={{ duration: 0.5, type:"spring", stiffness:120}}
                    className="my-20 lg:text-7xl text-4xl text-zinc-950 lg:px-48 px-8"> 
                    Discover the art of design and development with Gathan.
                    </motion.p>
                </div>
                <div>
                  <br /><br /><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero
