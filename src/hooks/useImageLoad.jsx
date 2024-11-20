import { useState, useEffect } from 'react';

export const useImageLoad = (imageSrc) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setLoaded(true);
      if (window.locomotiveScroll) {
        window.locomotiveScroll.update();
      }
    };
  }, [imageSrc]);

  return loaded;
};