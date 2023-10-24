import React from "react";
import { useNavigate } from "react-router-dom";

import Weare from "../../assets/WEARE2GETHER.png";
import "./index.css";

const Work: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/workItem");
    }
    return (
        <section className="work" id="work">
            <div className="work_title">
                <h2>Mes réalisations</h2>
            </div>
           
            <div className="cube">
                <div className="face front" onClick= {handleNavigate}>
                    <img src={Weare} alt="html skill"  />
                </div>
                <div className="face back">Back</div>
                <div className="face right">Right</div>
                <div className="face left">Left</div>
                <div className="face top">Top</div>
                <div className="face bottom">Bottom</div>
            </div>
        </section>
    )
}

export default Work
