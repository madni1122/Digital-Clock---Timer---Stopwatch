import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import colon from "../assets/colon.svg";
import { useEffect, useState } from "react";
import ResetBtn from "./ResetBtn";
import StartBtn from "./StartBtn";
import useClockTime from "../hooks/useClockTime";
import infoAlert from "../composables/swalAlert";

const StopWatch = () => {
  const [watchStatus, setWatchStatus] = useState(false);

  const { clockTime, resetWatchTime } = useClockTime(undefined, watchStatus);
  console.log("stopWatch");

  useEffect(() => {
    infoAlert("Switching to another tab will reset the stopwatch.");
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
        <img src={colon} alt="colon icon" className="w-24 h-24" />
        <TimeCard>{addZero(clockTime.min)}</TimeCard>
        <img src={colon} alt="colon icon" className="w-24 h-24" />
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
