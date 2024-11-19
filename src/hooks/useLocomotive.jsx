// src/hooks/useLocomotive.js
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotive = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('[data-scroll-container]');
    const locomotive = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Update locomotive scroll on page content change
    setTimeout(() => {
      locomotive.update();
    }, 500);

    // Cleanup
    return () => {
      locomotive.destroy();
    };
  }, [start]);
};