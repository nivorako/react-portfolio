import React from 'react';
import { useNavigate, Link } from "react-router-dom";

import Linked from "../../assets/linkedin.png";
import Youtube from "../../assets/youtube.png";
import Twitter from "../../assets/twitter.png";

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
        <footer className="footer" id='footer'>
            <div className='footer1'>
                <Button  onClick={() => scrollIntoSection("Contact")}>Contactez moi</Button>
                <div className='footer1_socNet'>
                    <div className='footer1_socNetItem'>
                        <Link to="https://www.linkedin.com/in/nivo-rakotondrabe" target="_blank" rel="noopener noreferrer">
                            <img src={Linked} alt="linked in" width={50} />
                        </Link>
                    </div>
                    <div className='footer1_socNetItem'>
                        <img src={Youtube} alt="youtube" width={50} />
                    </div>
                    <div className='footer1_socNetItem'>
                        <a >
                            <img src={Twitter} alt="twitter" width={50} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer2'></div>
        </footer>
    );
};

export default Footer;
