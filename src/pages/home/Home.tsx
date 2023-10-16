import About from '../../components/about/About';
import Skill from '../../components/skill/Skill';
import './index.css';

const Home = () => {
    return (
        <main className="home">
            <About />
            <Skill />
        </main>
    );
};

export default Home;
