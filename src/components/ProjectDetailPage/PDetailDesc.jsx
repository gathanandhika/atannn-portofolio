import { PROJECTS } from "../../constants"
import { useParams } from "react-router-dom";
import { PiCopyrightLight } from "react-icons/pi";

const PDetailDesc = () => {
    const { title } = useParams(); // Mendapatkan 'title' dari URL

    // Mencari proyek berdasarkan title
    const project = PROJECTS.flatMap(category => category.items)
        .find(project => project.title === title);

    if (!project) {
        return <p>Project not found</p>; // Jika proyek tidak ditemukan
    }
    
  return (
<div className="lg:pb-4 lg:mb-2">
      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-2 mb-[-30px] lg:mb-0 lg:py-2">
        <h1
        className="text-xs text-zinc-400 border-b w-full border-zinc-300 py-4"
        >
            WORK
        </h1>
        <h1
        className="text-lg text-zinc-950 py-5" 
        >
            {project.description}
        </h1>
        </div>
        <div className="w-full lg:w-1/3 items-start px-6 lg:px-12 py-2 mb-[-30px] lg:py-2">
        <h1
        className="text-xs text-zinc-400 border-b w-full border-zinc-300 py-4" 
        >
            CREDITS
        </h1>
        <h1 className="text-lg text-zinc-950 py-5 relative">
    {Array.isArray(project.credits) ? (
        project.credits.map((credit, index) => (
            <div key={index}>{credit}</div>
        ))
    ) : (
        <div>{project.credits}</div> // jika project.credits hanya satu nilai
    )}
</h1>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col items-start px-6 lg:px-12 py-2 mb-[-30px] lg:py-2">
        <h1
        className="text-xs text-zinc-400 border-b w-full border-zinc-300 py-4"
        >
            YEAR & LOCATION
        </h1>
        <h1
        className="text-lg text-zinc-950 py-5 flex flex-shrink-0 items-center" 
        >
            {project.location}<PiCopyrightLight />{project.year}
        </h1>
        </div>
      </div>
</div>
  )
}

export default PDetailDesc
