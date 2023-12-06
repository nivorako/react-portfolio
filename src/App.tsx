import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Need from './pages/need/Need';
import Dev from "./pages/dev/Dev";
import Contact from './pages/contact/Contact';

import "./app.css";

function App() {
   
    return (
        <>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Need" element={<Need />} />
                    <Route path="/Dev" element={<Dev />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
