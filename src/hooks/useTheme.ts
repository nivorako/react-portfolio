import { useState, useEffect } from 'react';
import { theme } from '../theme';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Vérifier si le thème sombre est déjà défini dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Sinon, utiliser le thème système
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Appliquer le thème
    const root = document.documentElement;
    const currentTheme = isDark ? theme.dark : theme.light;

    // Définir les variables CSS
    Object.entries(currentTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Mettre à jour le localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Mettre à jour le thème système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    mediaQuery.addEventListener('change', listener);

    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};