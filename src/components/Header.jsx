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
    <div className="text-gray-800 dark:text-gray-100 relative transition-colors duration-200">
      {/* ----- Navigation Bar ----- */}
      <header
        className="absolute top-4 left-1/2 -translate-x-1/2 
        w-[90%] max-w-[500px] sm:w-[400px] md:w-[480px]
        h-[38px] sm:h-[42px] md:h-[45px]
        bg-gradient-to-r from-green-200 via-green-100 to-green-200
        shadow-lg rounded-xl px-1"
      >
        <nav className="h-full">
          <ul className="grid h-full grid-cols-3 items-center gap-1 sm:gap-2 text-green-900 font-medium">
            {[
              { label: "Clock", img: clock },
              { label: "Timer", img: timer },
              { label: "Stop Watch", img: stopWatch },
            ].map(({ label, img }, index) => (
              <li key={index} className="h-full">
                <button
                  onClick={() => setSection(label)}
                  title={label}
                  className={`w-full h-full flex items-center justify-center rounded-md 
                    cursor-pointer transition duration-200
                    ${
                      section === label
                        ? "bg-green-400 text-white shadow-inner ring-2 ring-green-600 scale-105"
                        : "hover:bg-green-300 hover:text-green-950"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${label} icon`}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ----- Dark Mode Toggle Button ----- */}
      <button
        onClick={toggleDarkMode}
        className="
    z-10 flex items-center gap-1 sm:gap-2
    px-2 sm:px-3 py-1 rounded-md 
    shadow-md hover:scale-105 transition-all duration-200

    bg-green-200 text-green-900 hover:bg-green-300
    dark:bg-green-700 dark:text-green-100 dark:hover:bg-green-600

    /* Positioning */
    absolute 
    sm:top-4 sm:right-4 

    /* For small screens (below sm) */
    top-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto
  "
      >
        <img
          src={isDark ? lightMode : darkMode}
          alt={isDark ? "sun icon" : "moon icon"}
          className="md:w-3 md:h-3 w-4 h-4  lg:w-4 lg:h-4"
        />
        <p
          key={isDark ? "light" : "dark"}
          className="transition-opacity duration-200 ease-in-out animate-fade-text hidden md:block text-xs lg:text-sm font-medium "
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </button>
    </div>
  );
};

export default Header;
