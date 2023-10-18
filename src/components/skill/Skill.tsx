import Html from "../../assets/HTML5.png";
import Css from "../../assets/css3.png";
import Sass from "../../assets/sass48.png";
import Js from "../../assets/js.png";
import Ts from "../../assets/ts.png";
import ReactLogo from "../../assets/react.png";
import Git from "../../assets/git.png";

import './index.css';

const Skill = () => {
    const test = () => {
        console.log("toto")
    }
    return (
        <section id="skill" className='skill'>
            <div className='skill_title'>
                <h2>Mes compétences</h2>
            </div>
            <div className='skill_cards'>
                <div className="item" onClick={test}>
                    <img src={Html} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={Css} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={Sass} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={Js} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={ReactLogo} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={Ts} alt="html skill" width={50} />
                </div>
                <div className="item">
                    <img src={Git} alt="html skill" width={50} />
                </div>
               
            </div>
            
        </section>
    )
};

export default Skill;
