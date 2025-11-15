import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

const TimeCard = ({
  style,
  children,
  section,
  type,
  value,
  handleChange,
  invalidError,
  status,
}) => {
  const [isDark] = useContext(themeContext);

  return (
    <div className="relative ">
      {/* Background overlay */}
      <div className="sm:bg-green-100 absolute inset-0 z-0 opacity-50 rounded-md"></div>

      {/* Main Card */}
      <div
        className={`${style}
          relative z-10 
          flex justify-center items-center 
          rounded-md transition-colors duration-200
          sm:border-2 border-0
          
          /* Dark and Light mode text & border */
          text-gray-800 border-gray-800
          dark:text-gray-100 dark:border-gray-200

          /* Responsive padding */
          px-0 py-2 
          sm:px-6 sm:py-3
          md:px-8 md:py-5
          lg:px-10 lg:py-6

          /* Responsive font sizes */
          text-[15vw]
          sm:text-[70px]
          md:text-[100px]
          lg:text-[150px]

          /* Weight */
          font-medium sm:font-bold
        `}
      >
        {/* TIMER MODE — Input */}
        {section === "timer" ? (
          <>
            <input
              type="text"
              className="
                w-full bg-transparent outline-none text-center
                text-inherit     /* Match parent font size */
              "
              value={value}
              onChange={(e) => handleChange(type, e)}
              disabled={status}
            />

            {/* Error message */}
            {invalidError && (
              <p className="absolute top-full mt-1 text-sm sm:text-base text-red-500 font-normal">
                {invalidError}
              </p>
            )}
          </>
        ) : (
          <h2 className="leading-none">{children}</h2>
        )}
      </div>
    </div>
  );
};

export default TimeCard;
