import styled from "styled-components";
import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import webDesign from '../assets/web-design.webp';
import { motion } from 'framer-motion';
import avatar from "../assets/avatar.webp";
import ProjectsTeaser from '../components/ProjectsTeaser';
// import { useRef } from 'react';

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
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: var(--text);
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: var(--textSecondary);
    margin-bottom: 2rem;
`;

const PresentationContainer = styled(motion.div)`
    width: 100%;
    box-sizing: border-box;
    margin: 2rem 1rem;
    width: calc(100% - 2rem);
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 2rem;
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
    color: var(--textSecondary);
    margin-bottom: 2rem;
    line-height: 1.6;
    text-align: left;
`;

const PresentationButton = styled(Link)`
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: var(--secondary);
    color: var(--text);
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: translateY(-2px);
        background: #1E293B;
        color: var(--primary);
    }
    &:active {
        transform: scale(0.98);
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: var(--secondary);
    color: var(--text);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: translateY(-2px);
        background: #1E293B;
        color: var(--primary);
    }
    &:active {
        transform: scale(0.98);
    }
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`;

const Avatar = styled(motion.img)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--secondary);
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: var(--textSecondary);
    max-width: 600px;
    text-align: left;
`;

const SkillsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    padding: 0 1rem;
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
    color: var(--textSecondary);
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
    padding: 2rem;
    background: var(--background);
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
  background: linear-gradient(145deg, var(--primary), var(--secondary));
  z-index: 1;
  pointer-events: none;
  aspect-ratio: 1;
  min-width: 300px;
  min-height: 300px;
  filter: brightness(1.1);
  opacity: 0.9;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  background: var(--text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
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

const CtaButton = styled(Link)`
  padding: 0.8rem 2rem;
  background: white;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

/**
 * Smooth-scrolls to the element with id "projects".
 * Intended to be used as an event handler.
 */
const scrollToSection = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
    console.log('Projects section');
}

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

    const handleScroll = () => {
        const scrollPosition = window.scrollY; 
        const windowHeight = window.innerHeight; 
        const documentHeight = document.documentElement.scrollHeight;
        
        // Si on est à 50px du haut ou du bas
        if (scrollPosition <= 50 || documentHeight - windowHeight - scrollPosition <= 50) {
        setScale(0);     
        } else {
        setScale(1);     
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <HomeContainer id="home">
                <div
                style={{
                    fontSize: "var(--font-size-4xl)",
                    marginTop: '6rem',
                    color: 'var(--textSecondary)',
                }} 
                >
                    Bienvenue sur mon portfolio ! Je m'appelle :
                </div>
                <Title>Nivo RAKOTO</Title>
                <Subtitle>Développeur Web passionné</Subtitle>

                <ProfileSection>
                    <Avatar 
                        src={avatar} 
                        alt="Nivo-RAKOTO"
                        animate={{ 
                        scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse', 
                        }}
                    />
                    <Description>
                        Je transforme vos idées en réalité numérique, je crée des applications web modernes et performantes, alliant créativité et innovation technique.
                    </Description>
                    <Button onClick={scrollToSection}>Voir mes projets</Button>
                </ProfileSection>

                <PresentationContainer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.5 }}
                >
                    <PresentationImage src={webDesign} alt="Formation et développement" />
            
                    <PresentationText>
                        <h3 
                        style={{ 
                            color: 'var(--textSecondary)',
                            width: '100%',
                            textAlign: 'left',
                            margin: "0",
                            padding: "0"
                        }}
                        >
                            Mon Histoire :
                        </h3>
                        <p>
                            Passionné par le développement web, j’aide 
                            les entreprises à transformer leurs idées en solutions 
                            web percutantes. Curieux et toujours à la pointe, 
                            je développe des outils sur-mesure qui allient 
                            performance, design et impact.
                        </p>  
                    </PresentationText>
                    <PresentationButton to="/about">En savoir plus</PresentationButton>
                </PresentationContainer>

                <SkillsSection>
                    <SkillCard
                        initial={{ scale: 0 }}
                        whileInView={{ scale: scale }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <SkillIcon><FaReact /></SkillIcon>
                        <SkillTitle>Frontend Expert</SkillTitle>
                        <SkillDescription>React, TypeScript, Next.js - Applications web modernes et réactives</SkillDescription>
                    </SkillCard>
                    
                    <SkillCard
                        initial={{ scale: 0 }}
                        whileInView={{ scale: scale }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <SkillIcon><FaNodeJs /></SkillIcon>
                        <SkillTitle>Backend Maîtrisé</SkillTitle>
                        <SkillDescription>Express.js, MongoDB - Architecture robuste et performante</SkillDescription>
                    </SkillCard>
                    
                    <SkillCard
                        initial={{ scale: 0 }}
                        whileInView={{ scale: scale }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <SkillIcon><FaGithub /></SkillIcon>
                        <SkillTitle>DevOps Pratiqué</SkillTitle>
                        <SkillDescription>Github - Gestion de versions et déploiement continu</SkillDescription>
                    </SkillCard>
                </SkillsSection>

                <ProjectsTeaser />

                <CtaSection> 
                    <CtaContent>
                        <CtaTitle>MAINTENANT</CtaTitle>
                        <CtaTitle>Avez-vous un projet web en tête ?</CtaTitle>
                        <CtaSubtitle>Discutons-en</CtaSubtitle>
                        <CtaButton to="/contact">Me contacter</CtaButton>
                    </CtaContent>
                    <FloatingCircle
                        initial={{ x: 0, y: 0 }}
                        animate={{
                        x: [0, 100, 0, -100, 0],
                        y: [0, 30, 0, -30, 0],
                        scale: [1, 1.05, 1, 1.03, 1]
                        }}
                        transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    />
                </CtaSection>
            </HomeContainer>
        </>
    );
};

export default Home;
