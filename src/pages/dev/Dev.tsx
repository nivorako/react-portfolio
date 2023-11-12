import React from 'react';

import "./index.css";

const dev: React.FC = () => {
  return (
        <div className='dev'>
            <h2 className='dev_title'>Développement du site</h2>
            <div className='dev_content'>
                <p className='dev_detail'>
                    J'utilise une méthodologie rigoureuse basée sur les bonnes pratiques 
                    de développement. 
                    Je privilégie l'utilisation de langages de programmation éprouvés tels 
                    que HTML, CSS, JavaScript et PHP pour construire des sites web robustes 
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
