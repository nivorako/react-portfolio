import React, {useEffect} from 'react';

import "./index.css";

/**
 * 
 * @returns {JSX.Element} - explanation of develeppment actions
 */
const dev: React.FC = () => {

    useEffect(() => {
        /**
         * Retrieves the section ID from the URL hash and scrolls to the corresponding section
         * @param {string} sectionId - The ID of the section to scroll to.
         */

        const sectionId = window.location.hash.substring(1);
        
        const section = document.getElementById(sectionId)
        if(section){
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

     return (
        <div className='dev' id="dev">
            <h2 className='dev_title'>Développement du site</h2>
            <div className='dev_content'>
                <p className='dev_detail'>
                    J'utilise une méthodologie rigoureuse basée sur les bonnes pratiques 
                    de développement. 
                    Je privilégie l'utilisation de langages de programmation éprouvés tels 
                    que HTML, CSS, JavaScript et React pour construire des sites web robustes 
                    et performants. Chaque ligne de code est écrite avec soin,
                    en respectant les normes du web pour assurer la compatibilité, 
                    la performance et l'accessibilité. Mon but est de créer un site web 
                    qui non seulement est esthétiquement attrayant, mais qui est 
                    aussi fonctionnel et facile à utiliser. 
                </p>
            </div>
        </div>
  )
}

export default dev
