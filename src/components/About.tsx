import styled from "styled-components";

const AboutContainer = styled.div`
    min-height: 100vh;
    padding: 4rem 2rem;
    background: var(--background);
    color: var(--text);

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: var(--text);
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--textSecondary);
        margin-bottom: 1.5rem;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <h1>À propos de moi</h1>
            <p>Je suis un développeur fullstack passionné par la création d'applications web modernes et réactives. Après avoir suivi une formation complète en développement web, j'ai continué mon apprentissage par l'autoformation, explorant constamment de nouvelles technologies et approches de développement.</p>
            <p>Ma formation initiale m'a permis d'acquérir une solide base en développement web, que je complète régulièrement grâce à l'apprentissage continu. Je suis particulièrement intéressé par les technologies frontend et backend modernes, et je m'efforce de rester à jour avec les dernières tendances du développement web.</p>
        </AboutContainer>
    );
};

export default About;
