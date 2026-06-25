import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [dataSaver, setDataSaver] = useState(false);
  const [streak, setStreak] = useState(12);
  const [userRole, setUserRole] = useState(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    return user.role ? user.role.toLowerCase() : 'learner';
  });

  // Apply dark mode to document body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleDataSaver = () => {
    setDataSaver(prev => !prev);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, dataSaver, toggleDataSaver, streak, userRole, setUserRole }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
