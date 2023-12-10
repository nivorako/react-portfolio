import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from '../button/Button';

import './index.css';

/**
 *
 * @returns {JSX.Element} - display Footer Elt
 */

const Footer: React.FC = (): JSX.Element => {

    const navigate = useNavigate();

	const scrollIntoSection = (sectionId: string) => {
		if(sectionId){
			console.log("sectionId", sectionId);
			navigate(`/${sectionId}/#${sectionId.toLocaleLowerCase()}`)
            
		}
	}
    return (
        <footer className="footer">
            <div className='footer1'>
                <Button  onClick={() => scrollIntoSection("contact")}>Contactez moi</Button>
                <div>doudou</div>
            </div>
            <div className='footer2'></div>
        </footer>
    );
};

export default Footer;
