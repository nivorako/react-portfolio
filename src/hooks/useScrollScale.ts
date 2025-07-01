import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollScale = (ref: React.RefObject<HTMLElement>) => {
  const [scale, setScale] = useState(1);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementPosition = ref.current.getBoundingClientRect();
      
      // Si l'élément est visible
      if (inView) {
        // Si on est à 50px du haut ou du bas
        if (scrollPosition <= 50 || 
            document.documentElement.scrollHeight - windowHeight - scrollPosition <= 50) {
          setScale(0);
        } else {
          setScale(1);
        }
      } else {
        // Si l'élément n'est pas visible
        if (scrollPosition <= 50 || 
            document.documentElement.scrollHeight - windowHeight - scrollPosition <= 50) {
          setScale(1);
        } else {
          setScale(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]);

  return scale;
};
