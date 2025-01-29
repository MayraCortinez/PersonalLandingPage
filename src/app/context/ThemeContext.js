import { createContext, useContext, useEffect, useState } from 'react';

// 1️⃣ Creamos el contexto
const ThemeContext = createContext();

// 2️⃣ Creamos el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 3️⃣ Cargamos el tema desde localStorage (para recordar la preferencia del usuario)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); // Agrega la clase `dark`
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark'); // Quita la clase `dark`
    }
  }, []);

  // 4️⃣ Función para cambiar de tema
  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5️⃣ Hook personalizado para usar el contexto
export const useTheme = () => useContext(ThemeContext);
