import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../constants";
import thumbnail from "../../assets/projects/PodPunk/podpunk-hero.png";
import PDetailDesc from "./PDetailDesc";

const PDetailHero = () => {

    const { title } = useParams(); // Mendapatkan 'title' dari URL

    // Mencari proyek berdasarkan title
    const project = PROJECTS.flatMap(category => category.items)
        .find(project => project.title === title);

    if (!project) {
        return <p>Project not found</p>; // Jika proyek tidak ditemukan
    }

  return (
    <div data-scroll-section className="pb-2 lg:mb-35 mt-[-50px] relative">
  <div className="flex flex-wrap justify-center items-center relative">
    <div className="w-full">
      <div className="flex flex-col items-start">
        <p className="lg:my-20 my-12 lg:text-7xl text-4xl text-zinc-950 lg:px-24 px-8">
          {project.title}
        </p>
      </div>
      {/* PDetailDesc berada di atas dengan z-index lebih tinggi */}
      <div
        data-scroll
        data-scroll-speed={-1}
        className="items-start lg:px-12 bg-white relative z-10 pb-12"
      >
        <PDetailDesc />
      </div>
      {/* Gambar berada di bawah dengan z-index lebih rendah */}
      <div
        data-scroll
        data-scroll-speed={-2}
        className="flex flex-col items-center relative z-0"
      >
        <img
          className="max-w-full h-auto"
          src={project.thumbnail}
          alt="Thumbnail"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default PDetailHero
