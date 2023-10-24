import React, { useState } from 'react';

import { Drawer } from '@mui/material';

import Weare from "../../assets/WEARE2GETHER.png";

import "./index.css";

const WorkItem: React.FC = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className='workItem'>
            <div className='wokItem_title'>
                <h2>WEARE 2GETHER</h2>
            </div>
            <div 
                className='wokItem_card'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='workItem_img'>
                    <img src={Weare} alt="html skill"  />
                </ div>
                
                <div className={isHovered ? "hovered" : "hide"}>
                    <p>
                        Réalisé avec react RTK et Material UI.
                    </p>
                    <p>Utilisation de Bck4app</p>
                    <p>Création de page admin qui permet de gérer</p>  
                    <a
                        href="https://weare2gether-7gzj5dx03-nivorako.vercel.app"
                        target="_blank"
                        className='workItem_link'
                    >
                        Voir le site par ici
                    </a>
                </div>                   
            </div>
                
        </main>
    )
}

export default WorkItem
