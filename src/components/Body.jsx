import Clock from "./Clock";
import Timer from "./Timer";
import StopWatch from "./StopWatch";
import { useContext, useEffect } from "react";
import { themeContext } from "../contexts/ThemeContext";
import useClockTime from "../hooks/useClockTime";
import getCurrentTime from "../composables/getDateObject";
import { ToastContainer } from "react-toastify";

const Body = ({ section }) => {
  const { toggleFormat, clockTime, is24Hour } = useClockTime(
    getCurrentTime,
    true
  );
  const [isDark] = useContext(themeContext);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);
  return (
    <>
      <section
        className="min-w-[100vw] min-h-[100vh] sm:mt-20 mt-24   text-gray-800
       "
      >
        {section === "Clock" ? (
          <Clock
            clockTime={clockTime}
            toggleFormat={toggleFormat}
            is24Hour={is24Hour}
          />
        ) : section === "Timer" ? (
          <Timer />
        ) : (
          <StopWatch />
        )}
      </section>
      <ToastContainer />
    </>
  );
};

export default Body;
