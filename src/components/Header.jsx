import { useContext } from "react";
import clock from "../assets/clock.svg";
import timer from "../assets/timer.svg";
import darkMode from "../assets/dark-mode.svg";
import lightMode from "../assets/light-mode.svg";
import stopWatch from "../assets/stopWatch.svg";
import { themeContext } from "../contexts/ThemeContext";

const Header = ({ section, setSection }) => {
  const [isDark, setIsDark] = useContext(themeContext);
  const toggleDarkMode = () => {
    setIsDark((prevVal) => !prevVal);
  };
  return (
    <div className="text-gray-100 dark:text-gray-800 relative transition-colors duration-200">
      <header className="absolute top-4 left-1/2 -translate-x-1/2 h-[39px] w-[500px] bg-gradient-to-r from-green-200 via-green-100 to-green-200 shadow-lg rounded-xl">
        <nav className="h-full">
          <ul className="grid h-full grid-cols-3 items-center  gap-2 text-green-900 font-medium">
            {[
              { label: "Clock", img: clock },
              { label: "Timer", img: timer },
              { label: "Stop Watch", img: stopWatch },
            ].map(({ label, img }, index) => (
              <li key={index} className="h-full">
                <button
                  onClick={() => {
                    setSection(label);
                  }}
                  title={label}
                  className={`w-full h-full flex items-center justify-center rounded-md  ${
                    section === label
                      ? "bg-green-400 text-white shadow-inner ring-2 ring-green-600 scale-103"
                      : "transition duration-200 hover:bg-green-300 hover:text-green-950"
                  } cursor-pointer`}
                >
                  <img src={img} alt={`${img} icon`} className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 z-10 flex gap-2 items-center px-3 py-1 rounded-md text-sm font-medium shadow-md transition-all duration-200 hover:scale-105 dark:bg-green-700 dark:text-green-100 dark:hover:bg-green-600 bg-green-200 text-green-900 hover:bg-green-300
        "
      >
        <img
          src={isDark ? lightMode : darkMode}
          alt={`${isDark ? "sun icon" : "moon icon"}`}
          className="w-4 h-4"
        />
        <p
          key={isDark ? "light" : "dark"}
          className="transition-opacity duration-200 ease-in-out animate-fade-text"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </button>
    </div>
  );
};

export default Header;
