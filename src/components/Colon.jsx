import { useContext } from "react";
import colon from "../assets/colon.svg";
import whiteColon from "../assets/whiteColon.svg";
import { themeContext } from "../contexts/ThemeContext";

const Colon = () => {
  let [isDark] = useContext(themeContext);

  return (
    <img
      src={isDark ? whiteColon : colon}
      alt="colon icon"
      className="w-24 h-24"
    />
  );
};

export default Colon;
