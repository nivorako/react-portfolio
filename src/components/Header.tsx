import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { theme } from "../theme";

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
         
         // Définir les variables de typographie
         root.style.setProperty('--font-family', currentTheme.fontFamily);
         
         // Définir les tailles de police
         Object.entries(currentTheme.fontSize).forEach(([key, value]) => {
             root.style.setProperty(`--font-size-${key}`, value);
         });
         
         // Définir les poids de police
         Object.entries(currentTheme.fontWeight).forEach(([key, value]) => {
             root.style.setProperty(`--font-weight-${key}`, value.toString());
         });
         
         // Définir les couleurs et autres propriétés
         Object.entries(currentTheme).forEach(([key, value]) => {
             if (key !== 'fontFamily' && key !== 'fontSize' && key !== 'fontWeight') {
                 if (typeof value === 'object' && value !== null) {
                     // Ignorer les objets (fontSize et fontWeight) qui ont déjà été traités
                     return;
                 }
                 root.style.setProperty(`--${key}`, value.toString());
             }
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