import React from "react";
import { useNavigate } from "react-router-dom";

import Weare from "../../assets/WEARE2GETHER.png";
import Fisheye from "../../assets/Fisheye.png";
import Kasa from "../../assets/kasa.png";

import "./index.css";

interface WorkData{
    class: string;
    img: string;
    alt: string;
}

const Work: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigate = (work: WorkData) => {
        navigate(`/workItem/${encodeURIComponent(work.img)}/${encodeURIComponent(work.alt)}` );
    };

    const worksData: WorkData[] = [
        {class:"one", img:Weare, alt: "weare2gether"}, 
        {class:"two", img:Fisheye, alt: "fisheye" },
        {class:"three", img:Kasa, alt: "kasa"}
    ];

    return (
        <section className="work" id="work">
            <div className="work_title">
                <h2>Mes réalisations</h2>
            </div>
            <div className = "workShow" >
                {
                    worksData.map((work, index) => {
                        return (
                            
                                <div className={`face ${work.class}`} key={index} onClick={() => handleNavigate(work)}>
                                    <img src={work.img} alt={work.alt} />
                                   
                                </div>
                            
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Work
