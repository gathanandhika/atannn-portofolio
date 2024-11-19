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
        <div data-scroll-section className="lg:pb-4 lg:px-48 bg-zinc-900 ">
            {/* Parent flex container */}
            <div className="flex flex-wrap justify-center items-start relative z-0">
                {/* Setiap item diatur dengan width 1/3 pada layar besar dan tengah */}
                <div className="w-full lg:w-1/3 items-center px-4 py-2 lg:py-8 flex justify-center">
                    <img
                        className="lg:max-w-[300px] h-auto"
                        src={project.disp1}
                        alt="Display1"
                    />
                </div>
                <div className="w-full lg:w-1/3 items-center px-4 py-2 lg:py-8 flex justify-center">
                    <img
                        className="lg:max-w-[300px] h-auto"
                        src={project.disp2}
                        alt="Display2"
                    />
                </div>
                <div className="w-full lg:w-1/3 items-center px-4 py-2 lg:py-8 flex justify-center">
                    <img
                        className="lg:max-w-[300px] h-auto"
                        src={project.disp3}
                        alt="Display3"
                    />
                </div>
            </div>
        </div>
    );
}

export default PDetailDisplay;
