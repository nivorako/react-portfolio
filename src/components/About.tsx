
import { useInView } from "react-intersection-observer";
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

  /**
   * A component that displays the About page.
   * It uses the useInView hook to detect when the component is inside the viewport.
   * The component displays a header and a paragraph when it is inside the viewport.
   * The header displays the string "Header inside viewport true." when the component is inside the viewport.
   * The paragraph displays a short description of the developer.
   * The component also displays a second header with the string "À propos de moi deux" when it is outside the viewport.
   */
const About = () => {
    const { ref, inView } = useInView({
        threshold: 1,
      });
    console.log(inView); 
    return (
        <AboutContainer>
            <div
                
                style={{
                    marginTop: '6rem',
                    height: '100vh',
                    width: '100%',
                    backgroundColor: 'var(--secondary)',
                }} 
            >
                <h1>À propos de moi deux</h1>   
            </div>
 
            <div
                ref={ref}
                style={{
                    minHeight: '2rem',
                }}
            >
                <h1>À propos de moi</h1>
                {inView && (
                    <h2>{`Header inside viewport ${inView}.`}</h2>
                )}
                <p>Je suis un développeur fullstack passionné par la création d'applications web modernes et réactives. Après avoir suivi une formation complète en développement web, j'ai continué mon apprentissage par l'autoformation, explorant constamment de nouvelles technologies et approches de développement.</p>
                <p>Ma formation initiale m'a permis d'acquérir une solide base en développement web, que je complète régulièrement grâce à l'apprentissage continu. Je suis particulièrement intéressé par les technologies frontend et backend modernes, et je m'efforce de rester à jour avec les dernières tendances du développement web.</p>
            </div>
            
            <div                
                style={{
                    marginTop: '6rem',
                    height: '100vh',
                    width: '100%',
                    backgroundColor: 'var(--secondary)',
                }} 
            >
                <h1>À propos de moi deux</h1>   
            </div>
        </AboutContainer>
    );
};

export default About;
