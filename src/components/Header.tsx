import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

// Exportation des images de logo pour utilisation directe
// 
import logoDark from "../assets/LogoDark1.png";
import logoLight from "../assets/LogoLight1.png";

interface HeaderProps {
    onToggleTheme: () => void;
    isDark: boolean;
}

const HeaderContainer = styled(motion.header)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    z-index: 1000;
    backdrop-filter: blur(5px);
    
    @media (max-width: 768px) {
        padding: 0.5rem 0.75rem;
    }
`;

const Nav = styled.nav`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Logo = styled.img`
    height: 80px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
`;


const ThemeToggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    font-size: 1.5rem;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
        transform 0.3s,
        color 0.3s;

    &:hover {
        transform: scale(1.1);
        color: var(--primary);
    }
`;


/**
 * Header component, containing the logo and theme toggle button.
 *
 * @param {HeaderProps} props - Props containing the onToggleTheme function and isDark boolean.
 * @returns {React.ReactElement} - Header component.
 */
const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDark }) => {
    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Nav>
                <Link to="/"> 
                        <Logo 
                            src={isDark ? logoDark : logoLight} 
                            alt="Nivo RAKOTO logo" 
                        /> 
                </Link>       

                <ThemeToggle data-isdark={isDark} onClick={onToggleTheme}>
                    {isDark ? <FaSun /> : <FaMoon />}
                </ThemeToggle>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
