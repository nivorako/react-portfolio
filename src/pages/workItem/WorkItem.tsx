import React from 'react';
//import { Link } from 'react-router-dom';

import Kizomba from "../../assets/kizomba1.jpg";

import "./index.css";

const WorkItem: React.FC = () => {

    const handleShowWork = () => {
        window.location.href = "/"
    }

    return (
        <main className='workItem'>
                <div className='wokItem_title'>
                    <h2>WEARE 2GETHER</h2>
                </div>
                <div className='wokItem_card'>
                    <a
                        href="https://weare2gether-7gzj5dx03-nivorako.vercel.app"
                        target="_blank" // Cela indique au navigateur d'ouvrir le lien dans un nouvel onglet
                        className=""
                    >
                        <div className='workItem_img' onClick={handleShowWork}>
                            <img src={Kizomba} alt="html skill" width={150} />
                        </ div>
                    </a>
                </div>
        </main>
    )
}

export default WorkItem
