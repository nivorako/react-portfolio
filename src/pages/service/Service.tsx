import React, {useEffect} from 'react';

import "./index.css";

/**
 * 
 * @returns {JSX.Element} - explanation of services actions
 */

const Service: React.FC = (): JSX.Element => {

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
   }, [])

    return (
        <div className='service' id='service'>
            <h2 className='service_title'>Maintenance et améliorations</h2> 
            <div className="service_content">
                    <p className="service_detail">

                    Je sais que le lancement du site internet n'est que le 
                    début de votre aventure en ligne. Pour cette raison, 
                    j'offre des services de maintenance afin de veiller à 
                    ce que votre site reste à jour et continue de répondre 
                    aux besoins de vos clients. Cela comprend la mise à jour 
                    régulière du code, l'amélioration de la performance 
                    du site et l'implémentation de nouvelles fonctionnalités 
                    demandées. Mon objectif est de garantir que votre site 
                    web continue d'être un atout pour votre entreprise sur 
                    le long terme. 
                    </p>
            </div>
        </div>
    )
}

export default Service
