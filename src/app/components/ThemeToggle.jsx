'use client'

import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn theme-toggle">
      {isDarkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
    </button>
  );
};

export default ThemeToggle;
