import React from 'react';

import Html from '../../assets/HTML5.png';
import Css from '../../assets/css3.png';
import Sass from '../../assets/sass48.png';
import Js from '../../assets/js.png';
import Ts from '../../assets/ts.png';
import ReactLogo from '../../assets/react.png';
import Git from '../../assets/git.png';
import Mui from '../../assets/material-ui-1.svg';
import B4App from '../../assets/b4app.png';

import './index.css';

type Skill = {
    id: number;
    name: string;
    mode: string;
    color: string;
    image: string;
  };
  
  type Skills = {
    [key: string]: Skill[];
  };

/**
 *
 * @returns {JSX.elements} - display all skillCard
 */

const Skill: React.FC = () => {
    const setMode = (theme: string) => {
        document.querySelector('body')?.setAttribute('data-theme', theme);
    };

    // const skills = [
    //     {
    //         id: 1,
    //         name: 'HTML5',
    //         mode: 'aqua',
    //         color: 'var(--one)',
    //         image: Html,
    //     },
    //     { id: 2, name: 'Css', mode: 'dark', color: 'var(--two)', image: Css },
    //     {
    //         id: 3,
    //         name: 'Sass',
    //         mode: 'gold',
    //         color: 'var(--three)',
    //         image: Sass,
    //     },
    //     { id: 4, name: 'Js', mode: 'cream', color: 'var(--for)', image: Js },
    //     {
    //         id: 5,
    //         name: 'React',
    //         mode: 'darkBlue',
    //         color: 'var(--five)',
    //         image: ReactLogo,
    //     },
    //     { id: 6, name: 'Typescript', mode: 'darkGold', color: 'var(--six)', image: Ts },
    //     { id: 7, name: 'Git', mode: 'gitMode', color: 'gitColor', image: Git },
    //     { id: 8, name: 'Material UI', mode: 'yellow-orange', color: 'var(--eight)', image: Mui },
    //     { id: 9, name: 'Material UI', mode: 'yellow-orange', color: 'var(--eight)', image: B4App }
    // ];

    const skills: Skills = {
        Intégration:[
            {
                id: 1,
                name: 'HTML5',
                mode: 'aqua',
                color: 'var(--one)',
                image: Html,
              },
              { id: 2, name: 'Css3', mode: 'dark', color: 'var(--two)', image: Css }
        ],
        FrontEnd:[
            {
                id: 3,
                name: 'Sass',
                mode: 'gold',
                color: 'var(--three)',
                image: Sass,
            },
            { id: 4, name: 'Javascript', mode: 'cream', color: 'var(--for)', image: Js },
            {
                id: 5,
                name: 'React',
                mode: 'darkBlue',
                color: 'var(--five)',
                image: ReactLogo,
            },
            { id: 6, name: 'Typescript', mode: 'darkGold', color: 'var(--six)', image: Ts },
            { id: 8, name: 'Material UI', mode: 'yellow-orange', color: 'var(--eight)', image: Mui },
        ],      
        BackEnd:[
            { id: 9, name: 'Back 4 App', mode: 'yellow-orange', color: 'var(--eight)', image: B4App }
        ],
        Versionning:[
            { id: 7, name: 'Git hub', mode: 'gitMode', color: 'gitColor', image: Git },
        ],
    };

    return (
        <div id="skill" className="skill">
            <div className="skill_title">
                <div>Mes compétences</div>
            </div>
            <div className="skill_cards">
               
                {Object.keys(skills).map((category) => (
                    <div key={category}>
                        {React.createElement('h2',{className:"category_title"}, `${category}`)}
                        <div className='items'>
                            {
                                skills[category].map((skill) => (
                                    
                                    React.createElement('div', null,
                                        React.createElement('div', {
                                            key:skill.id,
                                            className:"item",
                                            onClick:() => setMode(skill.mode)
                                        },
                                            React.createElement('img', {
                                            src: skill.image,
                                            alt: `${skill.name} skill`,
                                            width: 50
                                            }),
                                            React.createElement('span', {
                                                className: 'item_color',
                                                style: { backgroundColor: skill.color },
                                            }),  
                                        ),
                                        React.createElement('div', {className:'item_name'}, skill.name)
                                    )
                                ))
                            }
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
