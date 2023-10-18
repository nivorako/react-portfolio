import About from '../../components/about/About';
import Skill from '../../components/skill/Skill';
import Work from '../../components/work/Work';
import './index.css';

const Home = () => {
    return (
        <main className="home">
            <About />
            
            <Skill />
            <Work />

        </main>
    );
};

export default Home;
