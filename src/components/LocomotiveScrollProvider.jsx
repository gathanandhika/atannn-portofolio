// src/components/providers/LocomotiveScrollProvider.jsx
import React, { useEffect } from 'react';
import { useLocomotive } from '../hooks/useLocomotive';
import { useLocation } from 'react-router-dom';

const LocomotiveScrollProvider = ({ children }) => {
    const locomotiveRef = useLocomotive();
    const location = useLocation();
  
    useEffect(() => {
      if (locomotiveRef) {
        // Reset scroll position saat route berubah
        locomotiveRef.scrollTo(0, { duration: 0, disableLerp: true });
        
        // Update locomotive scroll setelah content dimuat
        setTimeout(() => {
          locomotiveRef.update();
        }, 500);
      }
    }, [location.pathname, locomotiveRef]);
  
    return (
      <main data-scroll-container ref={locomotiveRef}>
        {children}
      </main>
    );
  };

export default LocomotiveScrollProvider;