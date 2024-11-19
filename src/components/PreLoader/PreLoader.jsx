import React, { useEffect } from 'react';
import './preloader.css';
import { preLoaderAnim } from '../animations';
import { PiCopyrightLight } from 'react-icons/pi';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim(); // Memanggil animasi GSAP
  }, []);

  return (
    <div className="preloader">
      <div className="text-container flex gap-2">
        <p> 
        <PiCopyrightLight />
        </p>
        <span>Code by Atannn.</span>
      </div>
    </div>
  );
};

export default PreLoader;
