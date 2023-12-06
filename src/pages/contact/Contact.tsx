import React, { useEffect } from 'react'

const Contact: React.FC = (): JSX.Element =>{

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
        <div className='contact' id='contact'>
            Contactez moizzz
        </div>
    )
}

export default Contact
