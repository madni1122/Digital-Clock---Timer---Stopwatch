import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import colon from "../assets/colon.svg";
import { useContext, useEffect, useState } from "react";
import ResetBtn from "./ResetBtn";
import StartBtn from "./StartBtn";
import useClockTime from "../hooks/useClockTime";
import infoAlert from "../composables/swalAlert";
import Colon from "./Colon";
import { themeContext } from "../contexts/ThemeContext";

const StopWatch = () => {
  const [watchStatus, setWatchStatus] = useState(false);
  const [isDark] = useContext(themeContext);

  const { clockTime, resetWatchTime } = useClockTime(undefined, watchStatus);

  useEffect(() => {
    infoAlert("Switching to another tab will reset the stopwatch.", isDark);
  }, []);

  const resetWatch = () => {
    resetWatchTime();
  };
  const handleClick = () => {
    let updatedStatus = !watchStatus;
    setWatchStatus(updatedStatus);
  };

  return (
    <>
      <div className="w-full h-full flex px-28 justify-center items-center">
        <TimeCard>{addZero(clockTime.hr)}</TimeCard>
        <Colon />
        <TimeCard>{addZero(clockTime.min)}</TimeCard>
        <Colon />
        <TimeCard>{addZero(clockTime.sec)}</TimeCard>
      </div>
      <div className="flex justify-center items-center relative top-24">
        {!watchStatus && <ResetBtn handleReset={resetWatch} />}

        <StartBtn handleClick={handleClick} status={watchStatus} />
      </div>
    </>
  );
};

export default StopWatch;
