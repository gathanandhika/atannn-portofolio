import { motion } from "framer-motion";
import { PROJECTS } from "../../constants";
import { useParams } from "react-router-dom";
import ButtonFooter from "../ButtonFooter/ButtonFooter";
import PDetailTypograph from "./PDetailTypograph";

const PDetailDisplay = () => {

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
                    <img
                        className="lg:max-w-[1200px] h-auto "
                        src={project.display}
                        alt="Mockup"
                    />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default PDetailDisplay;
