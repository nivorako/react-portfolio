import React from 'react';

import Html from '../../assets/HTML5.png';
import Css from '../../assets/css3.png';
import Sass from '../../assets/sass48.png';
import Js from '../../assets/js.png';
import Ts from '../../assets/ts.png';
import ReactLogo from '../../assets/react.png';
import Git from '../../assets/git.png';
import Mui from '../../assets/material-ui-1.svg';

import './index.css';

/**
 *
 * @returns {JSX.elements} - display all skillCard
 */

const Skill: React.FC = () => {
    const setMode = (theme: string) => {
        document.querySelector('body')?.setAttribute('data-theme', theme);
    };

    const skills = [
        {
            id: 1,
            name: 'HTML5',
            mode: 'aqua',
            color: 'var(--one)',
            image: Html,
        },
        { id: 2, name: 'Css', mode: 'dark', color: 'var(--two)', image: Css },
        {
            id: 3,
            name: 'Sass',
            mode: 'gold',
            color: 'var(--three)',
            image: Sass,
        },
        { id: 4, name: 'Js', mode: 'cream', color: 'var(--for)', image: Js },
        {
            id: 5,
            name: 'React',
            mode: 'darkBlue',
            color: 'var(--five)',
            image: ReactLogo,
        },
        { id: 6, name: 'Ts', mode: 'darkGold', color: 'var(--six)', image: Ts },
        { id: 7, name: 'Git', mode: 'gitMode', color: 'gitColor', image: Git },
        { id: 8, name: 'Git', mode: 'yellow-orange', color: 'var(--eight)', image: Mui },
    ];

    return (
        <section id="skill" className="skill">
            <div className="skill_title">
                <h2>Mes compétences</h2>
            </div>
            <div className="skill_cards">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="item"
                        onClick={() => setMode(skill.mode)}
                    >
                        <img
                            src={skill.image}
                            alt={`${skill.name} skill`}
                            width={50}
                        />
                        <span
                            className="item_color"
                            style={{ backgroundColor: skill.color }}
                        ></span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
