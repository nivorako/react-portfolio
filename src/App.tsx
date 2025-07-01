import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import { theme } from "./theme";

function App() {
    useEffect(() => {
        // Initialiser le thème au démarrage
        const root = document.documentElement;
        const savedTheme = localStorage.getItem('theme') || 'light';
        const isDark = savedTheme === 'dark';
        
        // Appliquer le thème initial
        root.style.setProperty('--is-dark', isDark ? 'true' : 'false');
        const currentTheme = isDark ? theme.dark : theme.light;
        
        // Appliquer toutes les variables CSS du thème
        Object.entries(currentTheme).forEach(([key, value]) => {
            if (typeof value === 'string' && !key.startsWith('font')) {
                root.style.setProperty(`--${key}`, value);
            }
        });
    }, []);

    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;