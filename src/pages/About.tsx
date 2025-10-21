import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import devImage from "../assets/devIMG.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";

// Styled Components
const AboutContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    padding: 2rem 2rem;
    background: var(--background);
    color: var(--text);
    @media (max-width: 768px) {
        padding-top: 6rem;
    
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 80vh;
    padding: 8rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text);

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
    flex-direction: column;  
`;

const Line = styled(motion.div)`
    position: absolute;
    right: 0;
    height: 1px;
    background: var(--primary);
    z-index: 1;
`;

const ImageContainer = styled.div`
    flex: 1;
    min-width: 0;
    margin: 1.5rem;
    position: relative;
    width: 50%;
    padding: 50px 0;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ProfileImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: block;

    @media (min-width: 769px) {
        max-width: 500px;
        height: auto;
    }
`;

const TextContainer = styled.div<{ inView: boolean }>`
    flex: 1;
    min-width: 0;
    min-width: 300px;
    opacity: ${({ inView }) => (inView ? 1 : 0)};
    transform: ${({ inView }) =>
        inView ? "translateY(0)" : "translateY(20px)"};
    transition:
        opacity 0.6s ease-out,
        transform 0.6s ease-out;
    padding: 0 1rem;
    box-sizing: border-box;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--textSecondary);
    margin-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

/**
 * The About component is a functional React component that provides an overview
 * of a developer's background and skills. It utilizes the `useInView` hook from
 * the `react-intersection-observer` library to animate text content when it
 * comes into view.
 *
 * The component renders an `AboutContainer` which includes a title, an image
 * with animated lines, and descriptive paragraphs about the developer's
 * passion for fullstack development, UX/UI, and backend architecture. The
 * component is styled using styled-components for a responsive and visually
 * appealing design.
 */
const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <AboutContainer>
            <Content>
                <Title>À propos de moi</Title>
                <ContentWrapper>
                    <ImageContainer>
                        <Line
                            style={{ top: 0, width: "0%" }}
                            animate={{
                                width: "90%",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: 0.3,
                            }}
                        />
                        <ProfileImage src={devImage} alt="Développeur web" />
                        <Line
                            style={{ bottom: 0, width: "0%" }}
                            animate={{
                                width: "90%",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: 0.3,
                            }}
                        />
                    </ImageContainer>
                    <TextContainer ref={ref} inView={inView}>
                        <TextContent>
                            <Paragraph>
                                👨‍💻 Développeur fullstack passionné, je conçois
                                des interfaces web modernes, performantes et
                                centrées sur l'utilisateur.
                            </Paragraph>
                            <Paragraph>
                                🎯 Autodidacte et curieux, je crée du code
                                propre, évolutif et optimisé, avec une attention
                                particulière à l’UX/UI et à l’architecture
                                backend.
                            </Paragraph>
                            <Paragraph>
                                J'aime relever de nouveaux défis techniques et
                                collaborer sur des projets ambitieux.{" "}
                            </Paragraph>
                        </TextContent>
                    </TextContainer>
                </ContentWrapper>
                <Paragraph>
                    Actuellement en freelance, je serais très heureux de
                    discuter avec vous de vos projets ou de belles opportunités
                    professionnelles.
                </Paragraph>
                <ButtonWrapper>
                    <Button as={Link} to="/contact">
                        Contacter-moi
                    </Button>
                </ButtonWrapper>
            </Content>
        </AboutContainer>
    );
};

export default About;
