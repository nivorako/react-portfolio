import React, {useEffect} from 'react';

import "./index.css";

/**
 * 
 * @returns {JSX.Element} - explanation of client' needs
 */

const Need: React.FC = (): JSX.Element => {

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
        <div className="need" id="need">
           <h2 className='need_title'>Evaluation des besoins</h2> 
           <div className="need_content">
                <p className="need_detail">

                    Lors de notre première rencontre, nous discuterons en détail de vos 
                    attentes pour votre futur site Internet. Cette étape cruciale me 
                    permettra de cerner précisément vos besoins, vos préférences en termes 
                    de design et vos objectifs. Nous aborderons également les 
                    fonctionnalités essentielles que vous souhaitez intégrer à votre site 
                    web. Cela m'aide à créer une carte détaillée de votre projet pour 
                    répondre au mieux à vos attentes et proposer un site qui répond à vos 
                    objectifs commerciaux et aux besoins de vos utilisateurs. 
                </p>
           </div>
        </div>
    )
}

export default Need
