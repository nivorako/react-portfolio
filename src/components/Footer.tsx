import styled from "styled-components";
import { motion } from "framer-motion";
import { COMMIT_SUBJECT, COMMIT_DATE } from "../lib/buildInfo.js";

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

const Meta = styled.p`
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: var(--textSecondary);
`;

/**
 * Footer component that displays social links, copyright information and version information.
 *
 * @returns {JSX.Element} Footer component.
 */
const Footer = () => {
    return (
        <FooterContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SocialLinks>
                <SocialLink href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank">
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
            <Meta>
                Version : {COMMIT_SUBJECT} ·{" "}
                {new Date(COMMIT_DATE).toLocaleString()}
            </Meta>
        </FooterContainer>
    );
};

export default Footer;
