import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <themeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </themeContext.Provider>
  );
};
