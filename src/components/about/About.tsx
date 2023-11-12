import React from 'react';

import avatar from '../../assets/avatar.jpg';
import './index.css';

/**
 *
 * @returns {JSX.Element} - display about section
 */

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div className="about_title">
                <h2>A propos de moi</h2>
            </div>
            <div className="about_content">
                <div className="about_img">
                    <img src={avatar} alt="la peche" />
                    <h2>NIVO RAKOTO</h2>
                </div>

                <div className="about_all">
                    <p className="about_desc">
                        Mon parcours professionnel m'a toujours conduit vers le
                        secteur de la logistique et du transport, où j'ai acquis
                        une solide expérience au fil des années. Cependant, ma
                        passion pour le développement m'a récemment poussé à
                        suivre une formation intensive en développement
                        front-end chez OpenClassroom.
                    </p>
                    <p className="about_desc">
                        Aujourd'hui, je suis fier de vous présenter mes
                        compétences en tant que développeur front-end. Ma
                        transition vers ce nouvel univers m'a apporté une
                        perspective unique, alliant la rigueur et l'efficacité
                        du monde logistique à la créativité et à la technicité
                        du développement web.
                    </p>
                    <div className="about_links">
                        <button>télécharger mon cv</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
