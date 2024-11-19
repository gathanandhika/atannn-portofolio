import { motion } from "framer-motion"
import mockup from "../../assets/projects/PodPunk/podpunk-mockup.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { PROJECTS } from "../../constants";
import ButtonFooter from "../ButtonFooter/ButtonFooter";
import { FiArrowLeft } from "react-icons/fi";


const PDetailTypograph = () => {
  const navigate = useNavigate();  // Hook untuk menavigasi

  const handleGoBack = () => {
    navigate(-1);  // Navigasi ke halaman sebelumnya
  };

    const { title } = useParams(); // Mendapatkan 'title' dari URL

    // Mencari proyek berdasarkan title
    const project = PROJECTS.flatMap(category => category.items)
      .find(project => project.title === title);
  
    if (!project) {
      return <p>Project not found</p>; // Jika proyek tidak ditemukan
    }
  
  return (
<div data-scroll-section className="pb-2 lg:mb-35 bg-zinc-800">
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full">
                <div className="flex flex-col items-center">
                    <div 
                            data-scroll
                            data-scroll-speed={1}
                    className="lg:mt-32 my-12 lg:text-7xl text-4xl text-zinc-950 px-4"> 
                    <motion.img
                        initial={{ opacity: 1, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 120}}
                        className="lg:max-w-[1200px] h-auto "
                        src={project.typograph}
                        alt="Mockup"
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-grid gap- justify-center items-center mb-16">
                <div className="lg:w-42 w-52 pb-24 pt-8 flex justify-center items-center mr-[-50px]">
                  
                    <ButtonFooter onClick={handleGoBack}>
                      <div className="text-2xl">
                      <FiArrowLeft></FiArrowLeft>
                      </div>
                    </ButtonFooter>
                </div>
                <div className="lg:w-42 w-52 pb-24 pt-8 flex justify-center items-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link}
                        className="lg:w-96 ml-[-10px] lg:ml-0"
                    >
                        <ButtonFooter>More Details</ButtonFooter>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default PDetailTypograph
