import React from 'react';
import { usePageTransition } from '../hooks/usePageTransition';

const CustomLink = ({ to, children, className }) => {
  const { triggerPageTransition } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    triggerPageTransition(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;