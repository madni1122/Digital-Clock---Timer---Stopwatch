import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import colon from "../assets/colon.svg";
import { useEffect, useState } from "react";
import ResetBtn from "./ResetBtn";
import StartBtn from "./StartBtn";
import useClockTime from "../hooks/useClockTime";
import { toast } from "react-toastify";

const StopWatch = () => {
  const [watchStatus, setWatchStatus] = useState(false);

  const { clockTime, setWatchTime } = useClockTime(undefined, watchStatus);

  useEffect(() => {
    if (watchStatus) {
      toast.success("Don't switch to another tab");
    }
  }, [watchStatus]);

  //   const startWatch = () => {};
  const resetWatch = () => {
    setWatchTime({ hours: 0, minutes: 0, secs: 0 });
  };
  const handleClick = () => {
    let updatedStatus = !watchStatus;
    setWatchStatus(updatedStatus);
  };

  return (
    <>
      <div className="w-full h-full flex px-28 justify-center items-center">
        <TimeCard>{addZero(clockTime.hr)}</TimeCard>
        <img src={colon} alt="colon icon" className="w-32 h-32" />
        <TimeCard>{addZero(clockTime.min)}</TimeCard>
        <img src={colon} alt="colon icon" className="w-32 h-32" />
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
