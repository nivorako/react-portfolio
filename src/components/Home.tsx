
import styled from "styled-components";
import avatar from "../assets/avatar.webp";
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

const HomeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    background: var(--background);
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

const Avatar = styled.img`
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
    text-align: center;
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

const SkillCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
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

const Home = () => {
    return (
        <HomeContainer>
            <Title>Nivo-RAKOTO</Title>
            <Subtitle>Développeur Web passionné</Subtitle>
            <ProfileSection>
                <Avatar src={avatar} alt="Nivo-RAKOTO" />
                <Description>
                    Transformant des idées en réalité numérique, je crée des applications web modernes et performantes, alliant créativité et innovation technique.
                </Description>
            </ProfileSection>
            
            <SkillsSection>
                <SkillCard>
                    <SkillIcon><FaReact /></SkillIcon>
                    <SkillTitle>Frontend Expert</SkillTitle>
                    <SkillDescription>React, TypeScript, Next.js - Applications web modernes et réactives</SkillDescription>
                </SkillCard>
                
                <SkillCard>
                    <SkillIcon><FaNodeJs /></SkillIcon>
                    <SkillTitle>Backend Maîtrisé</SkillTitle>
                    <SkillDescription>Express.js, MongoDB - Architecture robuste et performante</SkillDescription>
                </SkillCard>
                
                <SkillCard>
                    <SkillIcon><FaGithub /></SkillIcon>
                    <SkillTitle>DevOps Pratiqué</SkillTitle>
                    <SkillDescription>Github - Gestion de versions et déploiement continu</SkillDescription>
                </SkillCard>
            </SkillsSection>

            <Button>Voir mes projets</Button>
        </HomeContainer>
    );
};

export default Home;
