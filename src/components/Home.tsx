import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    background: var(--background);
`;

const Title = styled(motion.h1)`
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: var(--text);
`;

const Subtitle = styled(motion.p)`
    font-size: 1.2rem;
    color: var(--textSecondary);
    margin-bottom: 2rem;
`;

const Button = styled(motion.button)`
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: var(--secondary);
    color: var(--text);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease; 
    &:hover {
        transform: translateY(-2px);
        background: #1E293B;
    }
`;

const Home = () => {
    return (
        <HomeContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Nivo-RAKOTO
            </Title>
            <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Développeur Web passionné
            </Subtitle>
            <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                Voir mes projets
            </Button>
        </HomeContainer>
    );
};

export default Home;
