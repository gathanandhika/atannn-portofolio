import gsap from 'gsap';

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to('body', {
    duration: 0.1,
    css: { overflowY: 'hidden' },
    ease: 'power3.inOut',
  })
    .to('.text-container', {
      duration: 0,
      opacity: 1,
      ease: 'Power3.easeOut',
    })
    .from('.text-container span', {
      duration: 1.5,
      delay: 0.5,
      y: 70,
      skewY: 10,
      opacity: 0,
      ease: 'Power3.easeOut',
    })
    .to('.text-container span', {
      duration: 1,
      y: 70,
      skewY: -20,
      opacity: 0,
      ease: 'Power3.easeOut',
    })
    .to('.text-container p', {
        duration: 1,
        y: 70,
        skewY: -20,
        opacity: 0,
        ease: 'Power3.easeOut',
      })
    .to('body', {
      duration: 0.1,
      css: { overflowY: 'scroll' },
      ease: 'power3.inOut',
    })
    .to('.preloader', {
      duration: 1.5,
      height: '0vh',
      ease: 'Power3.easeOut',
      onComplete: () => {
        console.log('Preloader complete');
      },
    })
    .to('.preloader', {
      duration: 0,
      css: { display: 'none' },
    });
};
