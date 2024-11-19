import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button"; // Mengimpor komponen Button
import WorkListDev from "./WorkListDev"; // Mengimpor WorkListDev
import { Link } from "react-router-dom";

const WorkHeroDev = () => {
   return (
    <div data-scroll-section className="pb-4 lg:mb-35 mt-[-50px]">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="my-20 lg:text-7xl text-4xl text-black px-8 lg:px-48"
            >
              Future &mdash; Proof Development Clean Code, Clear Solutions
            </motion.p>
          </div>

          {/* Tombol kategori */}
          <div className="lg:flex relative items-center lg:px-48 px-42 gap-4 border-b border-zinc-300 pb-12 mb-16">

              <div className="mb-2 lg:mb-0 px-8 lg:px-0">
                <Link to='/work'>
                <Button
                >
                  All
                </Button>
                </Link>
              </div>
              <div className="mb-2 lg:mb-0 px-8 lg:px-0">
                <Link to='/work-dev'>
                <Button
                isActive="#455ce9"
                >
                  Development
                </Button>
                </Link>
              </div>
              <div className="mb-2 lg:mb-0 px-8 lg:px-0">
                <Link to='/work-design'>
                <Button
                >
                  Design
                </Button>
                </Link>
              </div>
          </div>

          {/* Tampilkan semua proyek */}
          <WorkListDev/>
        </div>
      </div>
    </div>
  );
};

export default WorkHeroDev;
