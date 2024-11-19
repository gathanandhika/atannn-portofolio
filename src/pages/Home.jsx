// src/pages/Home.jsx
import React from 'react';
import About from "../components/About";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import { useResetScroll } from '../hooks/useResetScroll';

const Home = () => {
  useResetScroll();
  return (
    <div >
      <div className="relative top-0 z-[-2] h-full w-full left-0" />
        <Navbar />
      <div className=" relative px-8 lg:px-24 lg:pb-32" >
        <Hero />
        <About />
        <Technologies />
        <Experience />     
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

// Pastikan menggunakan export default
export default Home;