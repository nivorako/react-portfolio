import React from 'react';
import { useNavigate } from 'react-router-dom';

import Weare from '../../assets/WEARE2GETHER.png';
import Fisheye from '../../assets/Fisheye.png';
import Kasa from '../../assets/kasa.png';
import Booki from '../../assets/Booki.png';
import PortFolio from '../../assets/MyPortfolio.png';
import './index.css';

/**
 * Interface decsribing the data structure for each work Item
 * @interface WorkData
 */

interface WorkData {
    class: string;
    img: string;
    alt: string;
}

/**
 * Component that displays all of my work in the form of a clickable card
 * @function Work
 * @returns {JSX.Element}
 */

const Work: React.FC = () => {
    const navigate = useNavigate();

    /**
     * manage navigation to WorkItem
     * @param {WorkData} work - work data to display
     *
     */
    const handleNavigate = (work: WorkData) => {
        navigate(
            `/workItem/${encodeURIComponent(work.img)}/${encodeURIComponent(
                work.alt,
            )}`,
        );
    };

    const worksData: WorkData[] = [
        { class: 'one', img: Weare, alt: 'weare2gether' },
        { class: 'two', img: Fisheye, alt: 'fisheye' },
        { class: 'three', img: Kasa, alt: 'kasa' },
        { class: 'four', img: Booki, alt: 'booki' },
        { class: 'five', img: PortFolio, alt: 'portfolio' },
    ];

    return (
        <section className="work" id="work">
            <div className="work_title">
                <h2>Mes réalisations</h2>
            </div>
            <div className="workShow">
                {worksData.map((work, index) => {
                    return (
                        <div
                            className={`face ${work.class}`}
                            key={index}
                            onClick={() => handleNavigate(work)}
                        >
                            <img src={work.img} alt={work.alt} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Work;
