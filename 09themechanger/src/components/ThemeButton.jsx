import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full flex justify-center my-6">
      <button
        onClick={toggleTheme}
        className={`
          flex items-center gap-2 px-6 py-2 rounded-full font-medium
          transition-all duration-300 shadow-md
          ${
            theme === "light"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-white text-black hover:bg-gray-200"
          }
        `}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default ThemeButton;
