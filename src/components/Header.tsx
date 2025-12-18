import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

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

    a {
        text-decoration: none;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LogoBrand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 80px;
    margin: 0 auto;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    .logo-icon {
        width: 40px;
        height: 40px;
        flex-shrink: 0;

        /* Adaptation du SVG au thème */
        .gear-shape {
            fill: ${(props) => props.theme.primary};
            stroke: ${(props) => props.theme.text};
            stroke-width: 1.5;
            opacity: 0.9;
        }

        /* Anneau intérieur */
        .inner-ring {
            stroke: ${(props) => props.theme.text};
            stroke-width: 3;
        }

        /* Cercle central */
        .center-circle {
            fill: ${(props) => props.theme.background};
            stroke: ${(props) => props.theme.primary};
            stroke-width: 2;
        }
    }

    .logo-text {
        font-family: "Pacifico", cursive;
        font-size: ${(props) => props.theme.fontSize["2xl"]};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        color: ${(props) => props.theme.primary};
        letter-spacing: 0.05em;
        white-space: nowrap;

        @media (max-width: 768px) {
            font-size: ${(props) => props.theme.fontSize.xl};
        }
    }
`;

const ThemeToggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    font-size: 1.5rem;
    color: var(--primary);
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
                    <LogoBrand>
                        <svg
                            className="logo-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                        >
                            {/* Roue crantée avec 8 dents alternées (style paramètres) */}
                            <path
                                className="gear-shape"
                                d="
                                M 50 5
                                L 45 5 L 45 15 L 40 15 L 40 18
                                L 35 18 L 32 22 L 28 22 L 25 25
                                L 22 28 L 22 32 L 18 35
                                L 18 40 L 15 40 L 15 45
                                L 5 45
                                L 5 50 L 5 55
                                L 15 55 L 15 60 L 18 60
                                L 18 65 L 22 68 L 22 72
                                L 25 75 L 28 78 L 32 78
                                L 35 82 L 40 82 L 40 85
                                L 45 85 L 45 95
                                L 50 95
                                L 55 95 L 55 85 L 60 85
                                L 60 82 L 65 82 L 68 78
                                L 72 78 L 75 75 L 78 72
                                L 78 68 L 82 65 L 82 60
                                L 85 60 L 85 55
                                L 95 55
                                L 95 50 L 95 45
                                L 85 45 L 85 40 L 82 40
                                L 82 35 L 78 32 L 78 28
                                L 75 25 L 72 22 L 68 22
                                L 65 18 L 60 18 L 60 15
                                L 55 15 L 55 5
                                Z
                            "
                            />

                            {/* Anneau intérieur */}
                            <circle
                                cx="50"
                                cy="50"
                                r="20"
                                className="inner-ring"
                                fill="none"
                            />

                            {/* Cercle central */}
                            <circle
                                cx="50"
                                cy="50"
                                r="12"
                                className="center-circle"
                            />
                        </svg>
                        <span className="logo-text">NIVO RAKOTO</span>
                    </LogoBrand>
                </Link>

                <ThemeToggle data-isdark={isDark} onClick={onToggleTheme}>
                    {isDark ? <FaSun /> : <FaMoon />}
                </ThemeToggle>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
