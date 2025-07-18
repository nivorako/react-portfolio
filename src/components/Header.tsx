import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface HeaderProps {
    onToggleTheme: () => void;
    isDark: boolean;
}

interface ToggleButtonProps {
    "data-isdark": boolean;
    onClick: () => void;
}

const HeaderContainer = styled(motion.header)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    z-index: 1000;
    @media (max-width: 1224px) {
        padding: 0 1rem;
    }
    @media (max-width: 768px) {
        padding: 0.5rem 0.75rem;
    }
`;

const Nav = styled.nav`
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    backdrop-filter: blur(5px);
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const Logo = styled.h1`
font-family: 'Pacifico', cursive;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--text);
`;

const ToggleButton = styled.button<ToggleButtonProps>`
    background: none; 
    border: none;
    cursor: pointer;
    padding: 8px;
    position: relative;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: var(--text);
    transition: background-color 0.3s;

    &:before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: var(--primary);
        transition: transform 0.3s;
    }

    &[data-isdark="true"] {
        &:before {
            transform: translateX(28px);
        }
    }
`;

const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDark }) => {
    

    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Nav>
                <Link to="/">
                    <Logo>Nivo-RAKOTO</Logo>
                </Link>
                
                <ToggleButton data-isdark={isDark} onClick={onToggleTheme}>
                    <div className="slider" />
                </ToggleButton>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;