import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

/**
 * Hook to track the scroll position of an element and scale it accordingly.
 *
 * @param {React.RefObject<HTMLElement | null>} ref - The ref of the element to track.
 *
 * @returns {number} - The scale of the element based on its scroll position.
 */
export const useScrollScale = (ref: React.RefObject<HTMLElement | null>) => {
    const [scale, setScale] = useState(1);
    const { inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const elementRect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Si l'élément est visible dans le viewport
            if (inView) {
                // Si l'élément est à 50px du haut ou du bas du viewport
                if (
                    elementRect.top <= 50 ||
                    elementRect.bottom >= windowHeight - 50
                ) {
                    setScale(0); // Disparaît quand à 50px du haut ou bas
                } else {
                    setScale(1); // Apparaît quand au milieu
                }
            } else {
                // Si l'élément n'est pas visible
                setScale(0); // Disparaît quand il n'est pas dans le viewport
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [inView]);

    return scale;
};
