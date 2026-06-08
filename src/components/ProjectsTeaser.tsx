import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import weare2getherImg from "../assets/wearetogether.png";
import vtcImg from "../assets/VTC.png";
import w2gImg from "../assets/w2g.png";
import portfolioImg from "../assets/PortfolioIMG.png";
import familienImg from "../assets/FAMILIEN.png";

const ProjectsSection = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 5rem 1rem;
    background: var(--background);
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 3rem 0;
    }
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary);
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
`;

const ProjectCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;

    /* Centrer la carte orpheline sur la dernière ligne */
    @media (min-width: 768px) {
        &:last-child:nth-child(3n + 1) {
            grid-column: 2 / 3;
        }
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 480px) {
        margin-bottom: 1.5rem;
        max-width: 100%;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ProjectContent = styled.div`
    padding: 0.5rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding:0 6rem
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 1rem;
    }
`;

const CaseStudyButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    background: var(--primary);
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    transition:
        transform 0.3s ease,
        background 0.3s ease;

    &:hover {
        background: var(--secondary);
        transform: translateY(-2px);
    }
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
    padding: 0;
    list-style: none;
    margin: 0.5rem 0;
`;

const ClosingText = styled.p`
    text-align: center;
    color: var(--text);
    font-size: 1.1rem;
    max-width: 900px;
    margin: 3rem auto 0;
    padding: 0 1rem;
    line-height: 1.6;
`;

const SkillTag = styled.li`
    display: block;
    with: 100%;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: var(--text);
    font-size: 0.9rem;
    word-wrap: break-word;
    white-space: normal;
    text-align: left;
    box-sizing: border-box;
`;


/**
 * Component displaying a teaser of recent projects.
 *
 * It displays a title, a grid of project cards with images, titles, descriptions and skills.
 * Each project card has a link to the project's website.
 *
 * The component animates the opacity and x position of the project cards when they come into view.
 *
 * @returns {JSX.Element} A JSX element displaying the projects teaser.
 */
const ProjectsTeaser = () => {
    const projects = [
        {
            title: "Familien",
            description: "Organisation familiale autour d un patient Alzheimer",
            skills: [
                "Création d'une application qui optimise l organisation familiale.",
                "gestion des accès selon user role.",
                "structure : next Js, tailwind, mongodb, node js, express, payload cms",
                "gestion des données avec payload cms",
                "centralisation des informations,",
                "💡 Connexion sécurisée.",
                "Work in progress — Ce projet évolue au fil des retours et des besoins.",
            ],
            image: familienImg,
            url: "https://avec-toi-hazel.vercel.app/",
            caseStudyUrl: "/case-study",
        },
        {
            title: "VTC",
            description: "Application Pour VTC",
            skills: [
                "Création d’un design moderne avec une UX fluide.",
                "Intégration de Stripe pour les paiements.",
                "Réservation de trajets avec carte interactive.",
                "Génération de devis/factures.",
                "Envoi de messages via formulaire ou WhatsApp.",
                "💡 Connexion sécurisée et gestion serveur avec Node/Express/MongoDB.",
                "Work in progress — Ce projet évolue au fil des retours et des besoins.",
            ],
            image: vtcImg,
            url: "https://vtc-mu.vercel.app/",
        },
        {
            title: "W2G",
            description: "Refonte complet du site WeAre2gether",
            skills: [
                "Passage de React vers Next Js  pour bénéficier du SSR, du routage simplifié et d’une meilleure performance. ",
                "Le design rétro évoque une esthétique intemporelle. Ce style crée une ambiance unique, chaleureuse et reconnaissable",
                "Toutes les fonctions essentielles ont été réintégrées et testées.",
                "Nettoyage des composants, meilleure organisation des fichiers, et réduction de la dette technique.",
                "Work in progress — certaines fonctionnalités sont en cours d’implémentation.",
            ],
            image: w2gImg,
            url: "https://w2g-delta.vercel.app/",
        },
        {
            title: "WeAre2gether",
            description:
                "Site pour une association de danse avec espace administrateur",
            skills: [
                "Création d’un blog interactif avec authentification,",
                "Publication de photos et commentaires.",
                "Développement d’un espace admin pour gérer le contenu du site de manière autonome.",
                "👉 Maîtrise de Back4App et conception d’une expérience fluide pour utilisateurs et administrateurs.",
            ],
            image: weare2getherImg,
            url: "https://weare2gether.vercel.app/",
        },

        {
            title: "Portfolio",
            description: "Site sur lequel vous êtes actuellement",
            skills: [
                "Création du design moderne et responsive.",
                "Animation avec Framer Motion.",
                "Déploiement sur Vercel : configuration du projet, builds automatiques via Git (CI/CD), gestion des variables d'environnement et des previews.",
                "Domaine & HTTPS sur Vercel : connexion du domaine personnalisé, configuration DNS (records), SSL automatique et redirections (www / non-www).",             
                "Work in progress — certaines fonctionnalités sont en cours d’implémentation.",
            ],
            image: portfolioImg,
            url: "#",
        },
    ];

    return (
        <ProjectsSection id="projects">
            <SectionTitle>Mes Projets Récents</SectionTitle>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -100 : 100,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ amount: 0.2 }}
                    >
                        <ProjectImage
                            src={project.image}
                            alt={`Capture d'écran du projet ${project.title}`}
                            loading="lazy"
                        />
                        <ProjectContent>
                            <ProjectTitle>
                                {project.caseStudyUrl ? (
                                    <CaseStudyButton to={project.caseStudyUrl}>
                                        Étude de cas
                                    </CaseStudyButton>
                                ) : (
                                    project.title
                                )}
                                <ProjectLink
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Voir le projet ${project.title}`}
                                >
                                    <span style={{ marginRight: "6px" }}>
                                        Visiter le site
                                    </span>
                                    <FaExternalLinkAlt />
                                </ProjectLink>
                            </ProjectTitle>
                            <p
                                style={{
                                    color: "var(--text)",
                                    marginBottom: "2rem",
                                    fontSize: "1.1rem",
                                }}
                            >
                                {project.description}
                            </p>
                            <ProjectSkills>
                                {project.skills.map((s, i) => (
                                    <SkillTag key={i}>
                                        {s.includes("Work in progress") ? (
                                            <>
                                                <strong>
                                                    Work in progress
                                                </strong>
                                                {s.replace(
                                                    "Work in progress",
                                                    ""
                                                )}
                                            </>
                                        ) : (
                                            s
                                        )}
                                    </SkillTag>
                                ))}
                            </ProjectSkills>
                        </ProjectContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
            <ClosingText>
                Je reste en veille constante sur les technologies émergentes et
                continue de développer de nouveaux projets pour enrichir mes
                compétences.
            </ClosingText>
            {/* <ViewMoreButton to="/projects">Voir plus de projets</ViewMoreButton> */}
        </ProjectsSection>
    );
};

export default ProjectsTeaser;
