import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    // Inisialisasi Locomotive Scroll
    if (!locomotiveInstance.current) {
      locomotiveInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    }

    // Cleanup
    return () => {
      if (locomotiveInstance.current) {
        locomotiveInstance.current.destroy();
        locomotiveInstance.current = null;
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
