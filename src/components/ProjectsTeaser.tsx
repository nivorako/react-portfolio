
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import weare2getherImg from '../assets/wearetogether.png';
import vtcImg from '../assets/VTC.png';

const ProjectsSection = styled.section`
    padding: 5rem 2rem;
    background: var(--background);
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text);
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ProjectContent = styled.div`
    padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProjectLink = styled.a`
    color: var(--primary);
    font-size: 1.2rem;
    transition: color 0.3s ease;
    &:hover {
        color: var(--secondary);
    }
`;

const ProjectSkills = styled.ul`
    color: var(--text);
    width: 100%;
    text-align: left;
    padding-left: 0;
`;

const ViewMoreButton = styled(Link)` 
    display: block;
    width: max-content;
    margin: 3rem auto 0; 
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: var(--secondary);
    color: var(--text);
    border: none;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-2px);
        background: #1E293B;
        color: var(--primary);
    }
    &:active {
        transform: scale(0.98);
    }
`;

const ProjectsTeaser = () => {
    const projects = [
        {
            title: "WeAre2gether",
            description: "Site pour une association de danse avec espace administrateur",
            skills: "Création d’un blog interactif avec authentification, publication de photos et commentaires. Développement d’un espace admin pour gérer le contenu du site de manière autonome. 👉 Maîtrise de Back4App et conception d’une expérience fluide pour utilisateurs et administrateurs.",
            image: weare2getherImg,
            url: "https://weare2gether.vercel.app/",
        },
        {
            title: "VTC",
            description: "Application de réservation de véhicules avec chauffeur",
            skills: "Création d’un design moderne avec une UX fluide. Intégration de Stripe pour les paiements, réservation de trajets avec carte interactive. Génération de devis/factures, envoi de messages via formulaire ou WhatsApp. 💡 Connexion sécurisée et gestion serveur avec Node/Express/MongoDB.",
            image: vtcImg,
            url: "https://vtc-mu.vercel.app/",          
        }
    ];

    return (
        <ProjectsSection id="projects">
            <SectionTitle>Mes Projets Récents</SectionTitle>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ amount: 0.5 }}
                    >
                        <ProjectImage 
                            src={project.image} 
                            alt={`Capture d'écran du projet ${project.title}`} 
                            loading="lazy"
                        />
                        <ProjectContent>
                            <ProjectTitle>
                                {project.title}
                                <ProjectLink 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`Voir le projet ${project.title}`}
                                >
                                    <span style={{ marginRight: '6px' }}>Visiter le site</span>
                                    <FaExternalLinkAlt />
                                </ProjectLink>
                            </ProjectTitle>
                            <p style={{ color: 'var(--text)' }}>{project.description}</p>
                            <ProjectSkills>
                                {/* {project.skills.map((s, i) => (
                                    <SkillTag key={i}>{s}</SkillTag>
                                ))} */}
                                {project.skills}
                            </ProjectSkills>
                            
                        </ProjectContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
            <ViewMoreButton to="/projects">
                Voir plus de projets
            </ViewMoreButton>
        </ProjectsSection>
    );
};

export default ProjectsTeaser;
