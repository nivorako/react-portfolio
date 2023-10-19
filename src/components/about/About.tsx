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
                <div className='about_all'>
                    <p className="about_desc">
                        Plusieurs variations de Lorem Ipsum peuvent être trouvées
                        ici ou là, mais la majeure partie d'entre elles a été
                        altérée par l'addition d'humour ou de mots aléatoires qui ne
                        ressemblent pas une seconde à du texte standard. Si vous
                        voulez utiliser un passage du Lorem Ipsum, vous devez être
                        sûr qu'il n'y a rien d'embarrassant caché dans le texte.
                    </p>
                    <div className='about_links'>
                        <button>télécharger mon cv</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
