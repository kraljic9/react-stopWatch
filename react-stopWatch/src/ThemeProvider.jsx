import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const themeStyles = {
  light: { background: "white", color: "black" },
  dark: { background: "black", color: "black" },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeProvider;
