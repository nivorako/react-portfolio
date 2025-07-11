
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import devImage from "../assets/devIMG.webp";

const AboutContainer = styled.div`
    min-height: 100vh;
    padding: 10rem 2rem 2rem;
    background: var(--background);
    color: var(--text);
    
    .about-content {
        max-width: 1200px;
        margin: 0 auto;
        min-height: 80vh;
        padding: 2rem 0;
        
        h1 {
            text-align: center;
            margin-bottom: 3rem;
            grid-column: 1 / -1;
        }
        
        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: 
                "image"
                 "text";
            gap: 2rem;
            
            @media (max-width: 768px) {
                grid-template-columns: 1fr 1fr;
                grid-template-areas: 
                    "image text"
                align-items: start;
                gap: 4rem;
            }
        }
    }
    
    .image-container {
        grid-area: image;
        position: relative;
        img {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            top: 0;
            margin: 0 auto;
            display: block; 
        }
        @media (min-width: 769px) {
                position: sticky;
                top: 2rem;
                
                img {
                    margin: 0;
                }
            }
    }
    
    .text-container {
        grid-area: text;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        
        .text-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        &.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        @media (max-width: 768px) {
            opacity: 1;
            transform: none;
            transition: none;
            
            &.visible {
                opacity: 1;
                transform: none;
            }
        }
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: var(--text);
        @media (max-width: 768px) {
            font-size: 2rem;
            text-align: center;
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--textSecondary);
        margin-bottom: 1.5rem;
    }
`;


const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    
    return (
        <AboutContainer>
            <div className="about-content">
                <h1>À propos de moi</h1>
                <div className="content-wrapper">
                    <div className="image-container">
                        <img src={devImage} alt="Développeur web" />
                    </div>
                    <div 
                        className={`text-container ${inView ? 'visible' : ''}`}
                        ref={ref}
                    >
                        <div className="text-content">
                            <p>Je suis un développeur fullstack passionné, animé par la volonté de créer des expériences web modernes, réactives et intuitives. Après avoir suivi une formation complète en développement web, j'ai poursuivi mon apprentissage en autodidacte, m'immergeant dans des projets concrets et explorant en profondeur les nouvelles tendances technologiques.</p>
                            <p>Ma formation initiale m'a permis d'acquérir des bases solides en HTML, CSS, JavaScript, ainsi qu'en frameworks tels que React, node js et Express. Ce socle technique s'enrichit continuellement grâce à une veille active et une pratique constante, car je crois que la curiosité et l'envie de progresser sont les meilleurs moteurs d'un développeur.</p>
                            <p>Au fil du temps, j'ai développé une réelle sensibilité pour les problématiques UX/UI, l'optimisation des performances, et l'architecture backend. J'accorde une attention particulière à l'écriture d'un code propre, modulaire et évolutif. Mon objectif est toujours de construire des applications robustes, faciles à maintenir, et centrées sur les besoins de l'utilisateur.</p>
                            <p>J'aime relever de nouveaux défis techniques et collaborer sur des projets ambitieux. Que ce soit en frontend ou backend, je m'efforce de proposer des solutions pertinentes et innovantes, tout en restant à l'écoute des retours pour progresser en continu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AboutContainer>
    );
};

export default About;
