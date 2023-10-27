import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WorkItem from './pages/workItem/WorkItem';

function App() {
    return (
        <>
            <div className='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/WorkItem/:imgSrc/:altText" element={<WorkItem />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
