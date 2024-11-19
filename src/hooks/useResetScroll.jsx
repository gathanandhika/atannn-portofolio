import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotive } from './useLocomotive';

export const useResetScroll = () => {
  const location = useLocation();
  const locomotiveRef = useLocomotive();

  useEffect(() => {
    const resetScroll = () => {
      // Reset normal window scroll
      window.scrollTo(0, 0);
      
      // Reset locomotive scroll if available
      if (locomotiveRef) {
        locomotiveRef.scrollTo(0, { duration: 0, disableLerp: true });
      }
    };

    resetScroll();
    
    // Tambahan untuk memastikan reset setelah content dimuat
    const timeoutId = setTimeout(resetScroll, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname, locomotiveRef]);
};