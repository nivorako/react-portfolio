import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { theme } from "./theme";
import Contact from "./pages/NewContact";

/**
 * Scrolls the window to the top of the page whenever the pathname changes.
 * This is useful when navigating between pages, so that the user is
 * always presented with the top of the page when switching between pages.
 */
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

/**
 * The App component is the top-level component in the application.
 * It is responsible for rendering the entire application, including the header, main content, and footer.
 * It also handles the theme toggle functionality and initializes the theme on startup.
 */
function App() {
    const [currentTheme, setCurrentTheme] = useState(theme.light);

    useEffect(() => {
        // Initialize theme on startup
        const savedTheme = localStorage.getItem("theme") || "light";
        const isDark = savedTheme === "dark";
        setCurrentTheme(isDark ? theme.dark : theme.light);

        // Apply CSS variables for legacy components if needed
        const root = document.documentElement;
        root.style.setProperty("--is-dark", isDark ? "true" : "false");
        const currentThemeVars = isDark ? theme.dark : theme.light;

        Object.entries(currentThemeVars).forEach(([key, value]) => {
            if (typeof value === "string" && !key.startsWith("font")) {
                root.style.setProperty(`--${key}`, value);
            }
        });
    }, []);

    const toggleTheme = () => {
        const newTheme =
            currentTheme === theme.light ? theme.dark : theme.light;
        setCurrentTheme(newTheme);
        localStorage.setItem(
            "theme",
            currentTheme === theme.light ? "dark" : "light"
        );

        // Update CSS variables
        const root = document.documentElement;
        const isDark = newTheme === theme.dark;
        root.style.setProperty("--is-dark", isDark ? "true" : "false");

        Object.entries(newTheme).forEach(([key, value]) => {
            if (typeof value === "string" && !key.startsWith("font")) {
                root.style.setProperty(`--${key}`, value);
            }
        });
    };

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <Router>
                <ScrollToTop />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                    }}
                >
                    <Header
                        onToggleTheme={toggleTheme}
                        isDark={currentTheme === theme.dark}
                    />
                    <main style={{ flex: "1 0 auto", width: "100%" }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
