import TimeCard from "./TimeCard";
import colon from "../assets/colon.svg";
import StartBtn from "./StartBtn";
import ResetBtn from "./ResetBtn";

import useTimer from "../hooks/useTimer";
import Colon from "./Colon";

const Timer = () => {
  const {
    timerStatus,
    timer,
    invalidError,
    handleTimerStatus,
    handleReset,
    handleChange,
  } = useTimer();
  return (
    <>
      <div className="w-full h-full flex px-28 justify-center items-center">
        <TimeCard
          status={timerStatus}
          section="timer"
          type="hr"
          value={timer.hr}
          handleChange={handleChange}
          invalidError={invalidError.hr}
        />
        <Colon />
        <TimeCard
          status={timerStatus}
          section="timer"
          type="min"
          value={timer.min}
          handleChange={handleChange}
          invalidError={invalidError.min}
        />
        <Colon />
        <TimeCard
          status={timerStatus}
          section="timer"
          type="sec"
          value={timer.sec}
          handleChange={handleChange}
          invalidError={invalidError.sec}
        />
      </div>
      <div className="flex justify-center items-center relative top-24">
        {!timerStatus && <ResetBtn handleReset={handleReset} />}
        <StartBtn handleClick={handleTimerStatus} status={timerStatus} />
      </div>
    </>
  );
};

export default Timer;
