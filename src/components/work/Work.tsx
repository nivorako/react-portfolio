import React from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Weare from '../../assets/WEARE2GETHER2.png';
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

    const animationPaused = () => {
        const workShow = document.querySelector('.workShow');
        if(workShow){
            workShow.classList.add('paused');
            workShow.classList.remove('slower');
        }
    }

    const animationSlower = () => {
        const workShow = document.querySelector('.workShow');
        if(workShow){
            workShow.classList.add('slower');
            workShow.classList.remove('paused');
        }
    }

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
            <div className='workControll'>               
                <StopIcon className='icon' onClick={animationPaused}/>
                <PlayArrowIcon className='icon' onClick={animationSlower}/>
            </div>
        </section>
    );
};

export default Work;
