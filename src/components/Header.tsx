import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { theme } from "../theme";

interface ToggleButtonProps {
    "data-isdark": boolean;
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
    background: var(--surface);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px var(--shadow);
    @media (max-width: 1224px) {
        padding: 0 1rem;
    }
    @media (max-width: 768px) {
        padding: 0.5rem 0.75rem;
    }
`;

const Nav = styled.nav`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text);
`;

const ToggleButton = styled.button<ToggleButtonProps>`
    position: relative;
    width: 60px;
    height: 30px;
    background: var(--border);
    border-radius: 15px;
    padding: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: var(--primary);
    }

    .slider {
        position: relative;
        width: 100%;
        height: 100%;
        background: var(--text);
        border-radius: 13px;
        transition: all 0.3s ease;
        
        &::before {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            background: var(--primary);
            border-radius: 50%;
            transition: all 0.3s ease;
            left: ${props => props["data-isdark"] ? 'calc(100% - 24px)' : '2px'};
        }
    }
`;

const Header = () => {
    const [isDark, setIsDark] = useState(() => 
        document.documentElement.style.getPropertyValue('--is-dark') === 'true'
    );

    const toggleTheme = () => {
        const root = document.documentElement;
        const newIsDark = !isDark;
        
        // Mettre à jour l'état local
        setIsDark(newIsDark);
        
        // Mettre à jour les variables CSS
        root.style.setProperty('--is-dark', newIsDark ? 'true' : 'false');
        const currentTheme = newIsDark ? theme.dark : theme.light;
        Object.entries(currentTheme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    };

    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Nav>
                <Logo>Nivo-RAKOTO</Logo>
                <ToggleButton data-isdark={isDark} onClick={toggleTheme}>
                    <div className="slider" />
                </ToggleButton>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;