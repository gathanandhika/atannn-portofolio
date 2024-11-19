import { motion } from "framer-motion"
import mockup from "../../assets/projects/PodPunk/podpunk-mockup.png"
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../constants";


const PDetailMockup = () => {

    const { title } = useParams(); // Mendapatkan 'title' dari URL

    // Mencari proyek berdasarkan title
    const project = PROJECTS.flatMap(category => category.items)
      .find(project => project.title === title);
  
    if (!project) {
      return <p>Project not found</p>; // Jika proyek tidak ditemukan
    }
  
  return (
<div data-scroll-section className="pb-2 lg:mb-35 lg:mt-[80px] bg-zinc-800">
        <div data-scroll className="flex flex-wrap justify-center items-center">
            <div data-scroll className="w-full">
                <div data-scroll className="flex flex-col items-center">
                    <div
                            data-scroll
                            data-scroll-speed={1}
                    className="lg:mt-32 my-12 lg:text-7xl text-4xl text-zinc-950 px-4"> 
                    <img
                        className="lg:max-w-[1200px] h-auto "
                        src={project.mockup}
                        alt="Mockup"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PDetailMockup
