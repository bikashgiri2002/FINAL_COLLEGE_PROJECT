/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(theme)
      localStorage.setItem('theme', 'dark');
    } else {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(theme)
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
