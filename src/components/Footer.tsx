import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled(motion.footer)`
    width: 100%;
    background: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text};
    padding: 2rem 1rem;
    text-align: center;
    margin-top: auto;
`;

const SocialLinks = styled.div`
    margin: 1rem 0;
`;

const SocialLink = styled(motion.a)`
    color: var(--textSecondary);
    margin: 0 1rem;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
        color: var(--primary);
    }
`;

const Footer = () => {
    return (
        <FooterContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SocialLinks>
                <SocialLink href="#" target="_blank">
                    LinkedIn
                </SocialLink>
                <SocialLink href="#" target="_blank">
                    GitHub
                </SocialLink>
                <SocialLink href="#" target="_blank">
                    Email
                </SocialLink>
            </SocialLinks>
            <p>
                &copy; {new Date().getFullYear()} Nivo-RAKOTO. Tous droits
                réservés.
            </p>
        </FooterContainer>
    );
};

export default Footer;
