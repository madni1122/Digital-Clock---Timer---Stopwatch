import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Body from "./components/Body";

function App() {
  const [section, setSection] = useState("Clock");

  return (
    <ThemeProvider>
      <div className="dark:bg-[#1E1E2F] dark:text-gray-100 bg-[#F4F7FA] transition-colors duration-200">
        <Header section={section} setSection={setSection} />
        <Body section={section} />
      </div>
    </ThemeProvider>
  );
}

export default App;
