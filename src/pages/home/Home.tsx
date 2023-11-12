import About from '../../components/about/About';
import Presta from '../../components/presta/Presta';
import Skill from '../../components/skill/Skill';
import Work from '../../components/work/Work';
import './index.css';

const Home = () => {
    return (
        <main className="home">
            <About />
            <Skill />
            <Work />
            <Presta />
        </main>
    );
};

export default Home;
