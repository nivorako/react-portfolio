import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import "./index.css";

const WorkItem: React.FC = () => {

    const [isHovered, setIsHovered] = useState(false);


    const { imgSrc, altText } = useParams();

    const projectsData: Record<string, { title: string; details: string[]; link: string }> = {
        'weare2gether': {
            title: 'WEARE 2GETHER',
            details: [
                'Réalisé avec react RTK et Material UI.', 
                "Utilisation de Back4app", 
                "Création de page admin qui permet de gérer le site"
            ],
            link: 'https://weare2gether-7gzj5dx03-nivorako.vercel.app',
        },
        'fisheye': {
            title: "Fish Eye",
            details:[
                "création d fish eye",
                "blablabla et toto tata"
            ],
            link:"https://nivorako.github.io/P6-Front-End-Fisheye/"
        },
       'kasa': {
            title: "Kasa",
            details:[
                "création kasa file",
                "blalalalalal"
            ],
            link:"https://kasa-je8bk4yxl-nivorako.vercel.app/"
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
            <div className='wokItem_title'>
                <h2>{project.title}</h2>
            </div>
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
                    
                        {
                            project.details.map((detail, index) => {
                                return (
                                    <p key={index}>{detail}</p>
                                )
                            })
                        }
                    </div>  
                    <a
                        href={project.link}
                        target="_blank"
                        className='hovered_link'
                    >
                        Voir le site par ici
                    </a>
                </div>                   
            </div>
                
        </main>
    )
}

export default WorkItem
