import Html from "../../assets/HTML5.png";
import Css from "../../assets/css3.png";
import Sass from "../../assets/sass48.png";
import Js from "../../assets/js.png";
import Ts from "../../assets/ts.png";
import ReactLogo from "../../assets/react.png";
import Git from "../../assets/git.png";

import './index.css';

const Skill = () => {

    const setMode = (theme: string) => {
        document.querySelector("body")?.setAttribute("data-theme", theme)
    };
    
    return (
        <section id="skill" className='skill'>
            <div className='skill_title'>
                <h2>Mes compétences</h2>
            </div>
            <div className='skill_cards'>
                <div className="item"  onClick={() => setMode("aqua")}>
                    <img src={Html} alt="html skill" width={50} />
                </div>
                <div className="item" onClick={() => setMode("dark")}>
                    <img src={Css} alt="html skill" width={50} />
                </div>
                <div className="item" onClick={() => setMode("gold")}>
                    <img src={Sass} alt="html skill" width={50} />
                </div>
                <div className="item" onClick={() => setMode("cream")}>
                    <img src={Js} alt="html skill" width={50} />
                </div>
                <div className="item"  onClick={() => setMode("darkBlue")}>
                    <img src={ReactLogo} alt="html skill" width={50} />
                </div>
                <div className="item" onClick={() => setMode("darkGold")}>
                    <img src={Ts} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={Git} alt="html skill" width={50} />
                </div>
                <div className="item">
                    
                </div>
               
            </div>
            
        </section>
    )
};

export default Skill;
