import { useContext } from "react";
import colon from "../assets/colon.svg";
import whiteColon from "../assets/whiteColon.svg";
import { themeContext } from "../contexts/ThemeContext";

const Colon = ({ style = "" }) => {
  let [isDark] = useContext(themeContext);

  return (
    <img
      src={isDark ? whiteColon : colon}
      alt="colon icon"
      className={`${style} lg:w-[104px] lg:h-[104px] md:w-20 md:h-20 w-14 h-14`}
    />
  );
};

export default Colon;
