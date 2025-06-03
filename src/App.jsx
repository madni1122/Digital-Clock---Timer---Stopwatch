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
      <Header section={section} setSection={setSection} />
      <Body section={section} />
    </ThemeProvider>
  );
}

export default App;
