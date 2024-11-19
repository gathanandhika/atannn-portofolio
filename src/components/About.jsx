import imageLogo from "../assets/nnathLogo.png"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"


const About = () => {
  return (
    <div 
    data-scroll-section
    className="pb-4 text-zinc-950">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.h1
                    whileInView={{ opacity:1, x: 0 }}
                    initial={{ opacity:0, x:-100 }}
                    transition={{ duration: 0.5, type:"spring", stiffness:120}}
                    className="text-start text-5xl "> 
                        Captivating Stories about 
                        <span className="text-5xl tracking-tight "> Gathanandd.
                        </span>
                    </motion.h1>
                </div>
            </div>
            <div className="w-full lg:w-2/3 text-zinc-950">
                <div className="flex justify-center lg:justify-start ">
                    <motion.p
                    whileInView={{ opacity:1, x: 0 }}
                    initial={{ opacity:0, x:100 }}
                    transition={{ duration: 0.7 }}
                    className="my-2 maxw-xl py-6">{ABOUT_TEXT}</motion.p>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-4 mb-2">
                    <div className="">
                        <motion.p 
                        whileInView={{ opacity:1, y: 0 }}
                        initial={{ opacity:0, y: -50 }}
                        transition={{ duration: 1, delay:0.5, type: "spring", stiffness: 120}}
                        className="text-zinc-950 font-semibold">DEVELOPER &mdash; DESIGNER </motion.p>
                    </div>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-4">
                    <motion.div 
                        whileInView={{ opacity:1, y: 0 }}
                        initial={{ opacity:0, y: -50 }}
                        transition={{ duration: 1, delay:0.5, type: "spring", stiffness: 120}}
                         className="">
                        <img src={imageLogo} alt="Logo" className="border border-neutral-400 rounded bg-neutral-100 py-2 w-[70px]"/>
                    </motion.div>
                    <div className="mt-[-5px]">
                        <motion.p
                        whileInView={{ opacity:1, y:0 }}
                        initial={{ opacity:0, y: -50 }}
                        transition={{ duration: 1, delay:0.5, type: "spring", stiffness: 120}}
                        className="text-zinc-950"> Gathan Andhika Febriansyah </motion.p>
                        <motion.p
                        whileInView={{ opacity:1, y:0 }}
                        initial={{ opacity:0, y: -50 }}
                        transition={{ duration: 1, delay:0.5, type: "spring", stiffness: 120}}
                        className="text-zinc-950"> @gathanandd </motion.p>

                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About
