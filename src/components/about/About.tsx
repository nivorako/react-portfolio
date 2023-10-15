import avatar from '../../assets/avatar.jpg';
import './index.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about_title">
                <h2>A propos de moi</h2>
            </div>
            <div className="about_content">
                <div className="about_img">
                    <img src={avatar} alt="la peche" />
                </div>
                <div className="about_desc">
                    Plusieurs variations de Lorem Ipsum peuvent être trouvées
                    ici ou là, mais la majeure partie d'entre elles a été
                    altérée par l'addition d'humour ou de mots aléatoires qui ne
                    ressemblent pas une seconde à du texte standard. Si vous
                    voulez utiliser un passage du Lorem Ipsum, vous devez être
                    sûr qu'il n'y a rien d'embarrassant caché dans le texte.
                    Tous les générateurs de Lorem Ipsum sur Internet tendent à
                    reproduire le même extrait sans fin, ce qui fait de
                    lipsum.com le seul vrai générateur de Lorem Ipsum. Iil
                    utilise un dictionnaire de plus de 200 mots latins, en
                    combinaison de plusieurs structures de phrases, pour générer
                    un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne
                    contient aucune répétition, ni ne contient des mots
                    farfelus, ou des touches d'humour.
                </div>
            </div>
        </section>
    );
};

export default About;
