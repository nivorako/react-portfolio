import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import WorkItem from '../workItem/WorkItem';

// import { useNavigate } from 'react-router-dom';
import Weare from '../../assets/WeareToWebp.webp';
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
    img: string;
    alt: string;
    title: string,
    details : string[],
    desc: string,
    link: string
}

/**
 * Component that displays all of my work in the form of a clickable card
 * @function Work
 * @returns {JSX.Element}
 */

const Work: React.FC = () => {

    const worksData: WorkData[] = [
        { 
            img: Weare, 
            alt: 'weare2gether',
            title: 'WEARE 2GETHER',
            desc: 'Site de mise en relation.',
            details: [
                'Création de la maquette avec FIGMA',
                'Utilisation de Redux et Material UI',
                'Utilisation de Back4app',
                "Création d'une page admin qui permet de gérer le site",
            ],
            link: 'https://weare2gether-hncxqzflp-nivorako.vercel.app/',
        },
        { 
            img: Fisheye, 
            alt: 'fisheye',
            title: 'Fish Eye',
            desc: 'Projet OpenClassRooms',
            details: [
                "Intégration d'une maquette FIGMA avec html, css et js",
                "Construction d'une page dynamique",
                "Construction d'un site accessible pour tous",
            ],
            link: 'https://nivorako.github.io/P6-Front-End-Fisheye/'
        },
        { 
            img: Kasa, 
            alt: 'kasa',
            title: 'Kasa',
            desc: 'Projet OpenClassRooms',
            details: [
                'Utilisation Create react app',
                'Logique de routage fonctionnelle',
                'Utilisation react hooks',
                'Utilisation de SASS',
            ],
            link: 'https://kasa-je8bk4yxl-nivorako.vercel.app/'
        },
        { 
            img: Booki,
            alt: 'booki',
            title: 'Booki',
            desc: 'Projet OpenClassRooms',
            details: [
                "Intégration d'une maquette FIGMA avec html et css",
                'Site responsive',
            ],
            link: 'https://nivorako.github.io/projet-P2/',
        },
        {
            img: PortFolio, 
            alt: 'portfolio',
            title: 'Mon Portfolio',
            desc: 'Projet Personnel',
            details: [
                "Intégration d'une maquette FIGMA avec html et css",
                'Site responsive',
                'etc etc ....',
            ],
            link: '#', 
        },
    ];

    return (
        <section className="work" id="work">
            <div className="work_title">
                <h2>Mes réalisations</h2>
            </div>
            <ul className="work_items">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    className='swiper'
                >
                    {worksData.map((work, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <WorkItem 
                                    title= {work.title}
                                    img= {work.img}
                                    desc={work.desc}
                                    alt= {work.alt}
                                    details= {work.details}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper> 
                    
            </ul>
           
           
        </section>
    );
};

export default Work;
