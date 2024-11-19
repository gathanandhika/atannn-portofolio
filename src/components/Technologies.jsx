import { GrReactjs } from "react-icons/gr";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { PiAndroidLogoThin } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }

})

const Technologies = () => {
  return (
    <div 
    data-scroll-section
    className="pb-24">
        <div className="flex flex-wrap items-center justify-center gap-4 mt-28">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-300 p-4">
                <FaLaravel className="text-7xl text-red-600"></FaLaravel>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-300 p-4">
                <GrReactjs className="text-7xl text-cyan-400"></GrReactjs>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-300 p-4">
                <GrMysql className="text-7xl text-cyan-700"></GrMysql>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-300 p-4">
                <PiAndroidLogoThin className="text-7xl text-lime-600"></PiAndroidLogoThin>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-300 p-4">
                <DiPhotoshop className="text-7xl text-blue-700"></DiPhotoshop>
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-300 p-4">
                <FaFigma className="text-7xl text-red-600"></FaFigma>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies
