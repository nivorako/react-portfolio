import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import Button from '../../components/button/Button';

import "./index.css";

/**
 * 
 * @function WorkItem
 */

const WorkItem: React.FC = () => {

    const [isHovered, setIsHovered] = useState(false);


    const { imgSrc, altText } = useParams();

    const projectsData: Record<string, { title: string; details: string[]; link: string; desc:string }> = {
        'weare2gether': {
            title: 'WEARE 2GETHER',
            desc:  "Mise en relation entre une association et ses membres.",
            details: [
                "Création de la maquette avec FIGMA",
                "Utilisation de Redux et Material UI",
                "Utilisation de Back4app", 
                "Création d'une page admin qui permet de gérer le site"
            ],
            link: 'https://weare2gether-rfwczgkiv-nivorako.vercel.app/',
        },
        'fisheye': {
            title: "Fish Eye",
            desc: "Projet OpenClassRooms",
            details:[
                "Intégration d'une maquette FIGMA avec html, css et js",
                "Construction d'une page dynamique",
                "Construction d'un site accessible pour tous"
            ],
            link:"https://nivorako.github.io/P6-Front-End-Fisheye/"
        },
       'kasa': {
            title: "Kasa",
            desc: "Projet OpenClassRooms",
            details:[
                "Utilisation Create react app",
                "Logique de routage fonctionnelle",
                "Utilisation react hooks",
                "Utilisation de SASS",
            ],
            link:"https://kasa-je8bk4yxl-nivorako.vercel.app/"
       },
       'booki': {
        title: "Booki",
        desc: "Projet OpenClassRooms",
        details:[
            "Intégration d'une maquette FIGMA avec html et css",
            "Site responsive"
        ],
        link:"https://nivorako.github.io/projet-P2/"
   }
    };

    if(altText === undefined){
        return <div>Alt Text non défini</div>;
    }

    const project = projectsData[altText];

    if (!project) {
        // Gérez le cas où le projet n'est pas trouvé
        return <div>Projet non trouvé</div>;
    }

    return (
        <main className='workItem'>
           
                <h2 className='wokItem_title'>{project.title}</h2>
           
            <div 
                className='wokItem_card'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='workItem_img'>
                    <img src={imgSrc} alt={altText}  />
                </ div>
                
                <div className={isHovered ? "hovered" : "hide"}>
                    <div className='hovered_details'>
                        <p className='hovered_detailDesc'>{project.desc}</p>
                        <h4>Compétences aquises :</h4>
                        <ul>
                            {
                                project.details.map((detail, index) => {
                                    return (                                   
                                        <li key={index}>{detail}</li>                                    
                                    )
                                })
                            }
                        </ul>
                    </div>  
                    <a
                        href={project.link}
                        target="_blank"
                        className='hovered_link'
                    >
                        Visiter le site par ici
                    </a>
                    {/* <Button /> */}
                        
                    
                </div>                   
            </div>
                
        </main>
    )
}

export default WorkItem
