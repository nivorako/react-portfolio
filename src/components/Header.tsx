import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useTheme } from '../hooks/useTheme';

const ThemeToggle = styled(motion.button)`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--border);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
    transform: scale(1.1);
  }
`;

const ThemeIcon = styled(motion.div)`
  width: 20px;
  height: 20px;
  position: relative;
`;

const Sun = styled.div<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.isDark ? 'var(--text)' : 'var(--textSecondary)'};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  box-shadow: 0 0 0 4px var(--primary);
`;

const Moon = styled.div<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.isDark ? 'var(--textSecondary)' : 'var(--text)'};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 4px var(--primary);
`;


const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--surface);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px var(--shadow);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: var(--text);
`;

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo>Nivo-RAKOTO</Logo>
        <ThemeToggle
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ThemeIcon>
            {isDark ? (
              <Sun isDark={isDark} />
            ) : (
              <Moon isDark={isDark} />
            )}
          </ThemeIcon>
        </ThemeToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
