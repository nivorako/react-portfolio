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
            <Button  onClick={() => scrollIntoSection("contact")}>Contactez moi</Button>
        </footer>
    );
};

export default Footer;
