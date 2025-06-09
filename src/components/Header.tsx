import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled(motion.header)`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    background: #ffffff;
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        padding: 0.5rem 0.75rem;
    }
`;

const Nav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        padding: 0 0.5rem;
    }
`;

const Logo = styled(motion.div)`
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Header = () => {
    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Nav>
                <Logo>Nivo-RAKOTO</Logo>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;