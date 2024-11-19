import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export const usePageTransition = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const getPageTitle = (path) => {
    // Mengubah path menjadi judul yang lebih readable
    const pathWithoutSlash = path.startsWith('/') ? path.slice(1) : path;
    if (pathWithoutSlash === '') return 'Home';
    return pathWithoutSlash
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const triggerPageTransition = useCallback((to) => {
    setIsTransitioning(true);
    setCurrentPage(getPageTitle(to));
    
    const tl = gsap.timeline();
    
    // Animasi masuk
    tl.to('.page-transition', {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: 'bottom',
      ease: 'power4.inOut'
    })
    .to('.transition-text', {
      duration: 0.3,
      opacity: 1,
      y: 0,
      ease: 'power4.out'
    }, '-=0.2')
    .add(() => {
      navigate(to);
    })
    // Animasi keluar
    .to('.transition-text', {
      duration: 0.3,
      opacity: 0,
      y: -50,
      ease: 'power4.in'
    }, '+=0.2')
    .to('.page-transition', {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'power4.inOut',
      onComplete: () => {
        setIsTransitioning(false);
        setCurrentPage('');
      }
    });
  }, [navigate]);

  return { triggerPageTransition, isTransitioning, currentPage };
};