import { createContext, useContext, useState } from 'react';

const themeContext = createContext({
  darkMode: true,
  bgColor: '',
  appBgColor: '',
  textColor: '',
  textColorSec: '',
  badgeBgColor: '',
  toggleTheme: () => {},
});

//provider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //theme colors
  const bgColor = darkMode ? 'bg-dark-bg' : 'bg-light-bg';
  const appBgColor = darkMode ? 'bg-app-dark-bg' : 'bg-app-light-bg';
  const textColor = darkMode ? 'text-dark-text' : 'text-light-text';
  const textColorSec = darkMode
    ? 'text-dark-text-secondary'
    : 'text-light-text-secondary';
  const badgeBgColor = darkMode ? 'bg-dark-bg' : 'bg-secondary';
  //toggle theme
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <themeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        bgColor,
        textColor,
        appBgColor,
        textColorSec,
        badgeBgColor,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

//hook
export const useTheme = () => {
  return useContext(themeContext);
};
