import styled from "styled-components";
import { useState, useEffect, type MouseEvent } from "react";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaLock,
    FaCreditCard,
    FaSearch,
    FaBolt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import webDesign from "../assets/web-design.webp";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.webp";
import Me from "../assets/me.jpg";
import ProjectsTeaser from "../components/ProjectsTeaser";
import Button from "../components/Button";

const HomeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    background: var(--background);
    @media (max-width: 768px) {
        padding: 4rem 1rem;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-top: 7rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: var(--primary);
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary);
`;

const PresentationContainer = styled(motion.div)`
    width: 100%;
    box-sizing: border-box;
    margin: 2rem 0rem;
    width: calc(100% - 2rem);
    padding: 2rem 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media (max-width: 768px) {
        padding: 1rem;
        width: 100%;
    }
`;

const PresentationImage = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.02);
    }
`;

const PresentationText = styled.div`
    max-width: 600px;
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 2rem;
    line-height: 1.6;
    text-align: left;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
`;

const Avatar = styled(motion.img)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center bottom;
    border: 3px solid var(--secondary);
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: var(--text);
    max-width: 600px;
    text-align: center;
`;

const RealisationsLink = styled.a`
    color: var(--primary);
    text-decoration: underline;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
`;

const SkillsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    padding: 0;
    width: 100%;
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const SkillCard = styled(motion.div)`
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const SkillIcon = styled.div`
    font-size: 2rem;
    color: var(--secondary);
    margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
    font-size: 1.2rem;
    color: var(--text);
    margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
    color: var(--text);
    font-size: 0.9rem;
`;

const CtaSection = styled.section`
    width: 100%;
    max-width: 100vw;
    margin: 0;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 2rem 0;
    background: var(--background);
    @media (max-width: 768px) {
        padding: 3rem 0;
        margin: 2rem 0 0;
    }
`;

const CtaContent = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FloatingCircle = styled(motion.div)`
    position: absolute;
    border-radius: 50%;
    background: ${({ theme }) =>
        theme.background === "#121e38"
            ? "linear-gradient(145deg, #4F46E5, #818CF8)"
            : "linear-gradient(145deg, var(--primary), var(--secondary))"};
    z-index: 1;
    pointer-events: none;
    aspect-ratio: 1;
    min-width: 300px;
    min-height: 300px;
    filter: brightness(1.1);
    opacity: 0.9;
    transform-style: preserve-3d;
    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.3),
        0 40px 100px rgba(0, 0, 0, 0.2),
        inset 0 -20px 40px rgba(0, 0, 0, 0.2),
        inset 0 20px 40px rgba(255, 255, 255, 0.1);
`;

const CtaTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: black;
    position: relative;
    z-index: 2;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const CtaSubtitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    background: var(--text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const CtaButtonWrapper = styled(Button)`
    margin-top: 8rem;
    background: white;
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 50px;
    font-weight: 600;

    &:hover {
        background: white;
        color: var(--primary);
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;

/**
 * Smooth-scrolls to the element with id "projects".
 * Intended to be used as an event handler.
 */
const scrollToSection = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
    console.log("Projects section");
};

/**
 * La page d'accueil, qui affiche une bannière, un sommaire, des compétences, des projets et un appel à action.
 *
 * @returns {JSX.Element} La page d'accueil.
 *
 * @example
 * import React from 'react';
 * import Home from './Home';
 *
 * const App = () => {
 *     return (
 *         <Home />
 *     );
 * };
 *
 * export default App;
 */
const Home = () => {
    const [scale, setScale] = useState(1);

    const scrollToSkills = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById("skills");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Si on est à 50px du haut ou du bas
        if (
            scrollPosition <= 50 ||
            documentHeight - windowHeight - scrollPosition <= 50
        ) {
            setScale(0);
        } else {
            setScale(1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const skills = [
        {
            title: "Frontend Expert",
            description:
                "React, TypeScript, Next.js - Applications web modernes et réactives",
            icon: <FaReact />,
        },
        {
            title: "Backend Maîtrisé",
            description:
                "Express.js, MongoDB - Architecture robuste et performante",
            icon: <FaNodeJs />,
        },
        {
            title: "DevOps Pratiqué",
            description:
                "Github / Vercel - Gestion de versions et déploiement continu",
            icon: <FaGithub />,
        },
        {
            title: "Authentification & paiements",
            description:
                "Stripe, Auth.js (NextAuth), sécurité des flux utilisateurs",
            icon: (
                <span style={{ display: "inline-flex", gap: "0.35rem" }}>
                    <FaLock />
                    <FaCreditCard />
                </span>
            ),
        },
         {
            title: "SEO & Performance",
            description:
                "Core Web Vitals, optimisation Lighthouse, SSR/SSG (Next.js)",
            icon: (
                <span style={{ display: "inline-flex", gap: "0.35rem" }}>
                    <FaSearch />
                    <FaBolt />
                </span>
            ),
        },
    ];

    return (
        <>
            <HomeContainer id="home">

                <Title>CREATION DE SITE WEB</Title>

                <Description>Rapide et sur-mesure</Description>
                <Description>pour indépendants et PME</Description>
                
                <ProfileSection>
                    <Avatar
                        src={Me}
                        alt="Nivo-RAKOTO"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                    <Description>
                        “Je crée des applications web performantes pour PME & startups 
                        avec React, Next.js & Node.js — disponibles pour missions freelance.”
                    </Description>

                    <RealisationsLink href="#skills" onClick={scrollToSkills}>
                        Voir mes réalisations
                    </RealisationsLink>
                    
                    <Button as={Link} to="/contact">
                        Me contacter
                    </Button>
                </ProfileSection>

                <PresentationContainer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.5 }}
                >
                    <SectionTitle>Mon histoire</SectionTitle>
                    <PresentationImage
                        src={webDesign}
                        alt="Formation et développement"
                    />

                    <PresentationText>
                        <p>
                            Passionné par le développement web, j’aide les
                            entreprises à transformer leurs idées en solutions
                            web percutantes. Curieux et toujours à la pointe, je
                            développe des outils sur-mesure qui allient
                            performance, design et impact.
                        </p>
                    </PresentationText>
                    <Button as={Link} to="/about">
                        En savoir plus
                    </Button>
                </PresentationContainer>

                <SkillsSection id="skills">
                    <SectionTitle>Compétences</SectionTitle>

                    <SkillsGrid>
                        {skills.map((skill) => (
                            <SkillCard
                                key={skill.title}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: scale }}
                                whileHover={{ scale: 1.1 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <SkillIcon>{skill.icon}</SkillIcon>
                                <SkillTitle>{skill.title}</SkillTitle>
                                <SkillDescription>{skill.description}</SkillDescription>
                            </SkillCard>
                        ))}
                    </SkillsGrid>
                    
                </SkillsSection>

                <ProjectsTeaser />

                <CtaSection>
                    <CtaContent>
                        <CtaTitle>MAINTENANT</CtaTitle>
                        <CtaTitle>Avez-vous un projet web en tête ?</CtaTitle>
                        <CtaSubtitle>Discutons-en</CtaSubtitle>
                        <Button as={Link} to="/contact">
                            Me contacter
                        </Button>
                    </CtaContent>
                    <FloatingCircle
                        initial={{ x: 0, y: 0, rotateX: 0, rotateY: 0 }}
                        animate={{
                            x: [0, 100, 0, -100, 0],
                            y: [0, 30, 0, -30, 0],
                            scale: [1, 1.05, 1, 1.03, 1],
                            rotateX: [0, 15, 0, -15, 0],
                            rotateY: [0, 15, 0, -15, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </CtaSection>
            </HomeContainer>
        </>
    );
};

export default Home;
