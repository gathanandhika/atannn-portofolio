import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollToTop = () => {
  const location = useLocation();
  const locomotiveRef = useRef(null);

  useEffect(() => {
    // Inisialisasi Locomotive Scroll
    const scrollEl = document.querySelector("[data-scroll-container]");
    if (scrollEl && !locomotiveRef.current) {
      locomotiveRef.current = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    }

    // Update scroll setiap kali lokasi berubah
    if (locomotiveRef.current) {
      locomotiveRef.current.scrollTo(0, { duration: 0, disableLerp: true });
    }

    return () => {
      // Cleanup Locomotive Scroll ketika komponen di-unmount
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
        locomotiveRef.current = null;
      }
    };
  }, [location]);

  return null;
};

export default ScrollToTop;
