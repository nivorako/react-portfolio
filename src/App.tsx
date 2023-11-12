import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WorkItem from './pages/workItem/WorkItem';
import Need from './pages/need/Need';
import Dev from "./pages/dev/Dev";

function App() {
    return (
        <>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/WorkItem/:imgSrc/:altText"
                        element={<WorkItem />}
                    />
                    <Route path="/Need" element={<Need />} />
                    <Route path="/Dev" element={<Dev />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
