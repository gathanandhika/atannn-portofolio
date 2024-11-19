import { useNavigate, useParams } from "react-router-dom";
import { EXPERIENCES } from "../../constants";
import { PiCopyrightBold } from "react-icons/pi";
import Button from "../Button/Button";
import { FiArrowLeft } from "react-icons/fi";

const CDetailDesc = () => {

    const navigate = useNavigate();  // Hook untuk menavigasi

    const handleGoBack = () => {
      navigate(-1);  // Navigasi ke halaman sebelumnya
    };

    const { company } = useParams(); // Mendapatkan 'company' dari URL

    const experience = EXPERIENCES.flatMap(category => category.experiences) // Perbaiki .items menjadi .experiences
        .find(experience => experience.company === company);

    if (!experience) {
        return <p>Career not found</p>; // Jika pengalaman tidak ditemukan
    }

    return (
        <div className="lg:pb-4 lg:mb-2">
            <div className="flex flex-wrap justify-between items-start">
                <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-2 mb-[-30px] lg:mb-0 lg:py-2">
                    <h1 className="text-xs text-zinc-400 border-b w-full border-zinc-300 py-4">
                        YEAR & LOCATION
                    </h1>
                    <h1 className="text-lg text-zinc-950 py-5">
                        {experience.year} {experience.location}
                        <span className="text-xs font-semibold text-zinc-500"> &mdash; {experience.ket}</span>
                    </h1>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-2 mb-[-30px] lg:mb-0 lg:py-2">
                    <h1 className="text-xs text-zinc-400 border-b w-full border-zinc-300 py-4">
                        TECH
                    </h1>
                    <h1 className="text-lg text-zinc-950 py-5 relative">
                        {experience.technologies.map((credit, index) => (
                            <div key={index}>{credit}</div>
                        ))}
                    </h1>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-2 lg:mb-0 lg:py-2">
                    <h1 className="text-xs text-zinc-400 border-b w-full border-zinc-300 py-4">
                        COMPANY
                    </h1>
                    <h1 className="text-lg text-zinc-950 py-5 relative">
                        {experience.company}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2">
            <div className="lg:w-56 w-52 py-16 flex justify-center items-center mr-[-50px]">
                    <Button onClick={handleGoBack}>
                      <FiArrowLeft></FiArrowLeft>
                    </Button>
                </div>
                <div className="lg:w-56 w-52 py-16 flex justify-center items-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/gathanafrr/"
                        className="w-96"
                    >
                        <Button>More Details</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CDetailDesc;
