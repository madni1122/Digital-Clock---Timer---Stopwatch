import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import Header from "./components/Header";
import useClockTime from "./hooks/useClockTime";
import Timer from "./components/Timer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StopWatch from "./components/StopWatch";
import getCurrentTime from "./composables/getDataObject";

function App() {
  const [section, setSection] = useState("Clock");
  const { toggleFormat, clockTime } = useClockTime(getCurrentTime);
  return (
    <>
      <Header section={section} setSection={setSection} />

      <section className="min-w-[100vw] min-h-[100vh] flex flex-col justify-center bg-gray-100">
        {section === "Clock" ? (
          <Clock clockTime={clockTime} toggleFormat={toggleFormat} />
        ) : section === "Timer" ? (
          <Timer />
        ) : (
          <StopWatch />
        )}
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
