import { useEffect, useRef, useState } from "react";
import addZero from "../composables/addZero";

import TimeCard from "./TimeCard";
import colon from "../assets/colon.svg";
import setInputValue from "../composables/setInputValue";
import { toast } from "react-toastify";
import StartBtn from "./StartBtn";
import ResetBtn from "./ResetBtn";
import infoAlert from "../composables/swalAlert";

const Timer = () => {
  const [timerStatus, setTimerStatus] = useState(false);
  const [timer, setTimer] = useState({ hr: "00", min: "00", sec: "00" });
  const [invalidError, setInvalidError] = useState({
    hr: "",
    min: "",
    sec: "",
  });
  let timeRef = useRef(null);
  console.log("dkk");

  // WATCHER

  useEffect(() => {
    if (timerStatus) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [timerStatus]);

  useEffect(() => {
    infoAlert("Switching to another tab will reset the timer.");
  }, []);

  // FUNCTION

  const startTimer = () => {
    timeRef.current = setInterval(() => {
      setTimer((prevVal) => {
        let newSec = prevVal.sec - 1;
        let newMin = prevVal.min;
        let newHr = prevVal.hr;
        if (prevVal.sec == "00" && newMin == "00" && newHr == "00") {
          stopTimer();
          toast.success("Timer has finished!");

          return { hr: "00", min: "00", sec: "00" };
        }
        if (newSec < 0) {
          newSec = 59;
          newMin -= 1;
        }
        if (newMin < 0) {
          newHr -= 1;
          newMin = 59;
        }
        if (newHr <= 0) newHr = 0;
        return {
          hr: addZero(newHr),
          min: addZero(newMin),
          sec: addZero(newSec),
        };
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTimerStatus(false);
  };

  const handleTimerStatus = () => {
    let hasError = Object.values(invalidError).some((val) => val !== "");
    let isTimeEmpty = Object.values(timer).some((val) => val === "");
    let isTimeValid = Object.values(timer).filter((val) => Number(val) > 0);
    if (hasError || isTimeEmpty || !isTimeValid.length) {
      toast.error(
        "Hmm, something’s off or invalid... check your time values 🧐"
      );

      return;
    }
    setTimerStatus((prevVal) => !prevVal);
  };

  const handleReset = () => {
    setTimer({ hr: "00", min: "00", sec: "00" });
  };

  const handleChange = (type, e) => {
    let value = e.target.value;
    let keyPressed = e.nativeEvent.data;
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      null,
    ];
    if (!/^([0-9])$/.test(keyPressed) && !allowedKeys.includes(keyPressed))
      return;
    if (type === "hr") {
      setInputValue(
        type,
        value,
        /^(0[0-9]|1[0-2])$/,
        "Invalid hour (00-12)",
        setTimer,
        setInvalidError
      );
      return;
    }
    if (type === "min") {
      setInputValue(
        type,
        value,
        /^([0-5][0-9])$/,
        "Invalid minutes (00-59)",
        setTimer,
        setInvalidError
      );
      return;
    }
    if (type === "sec") {
      setInputValue(
        type,
        value,
        /^([0-5][0-9])$/,
        "Invalid seconds (00-59)",
        setTimer,
        setInvalidError
      );
      return;
    }
  };
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
        <img src={colon} alt="colon icon" className="w-32 h-32" />
        <TimeCard
          status={timerStatus}
          section="timer"
          type="min"
          value={timer.min}
          handleChange={handleChange}
          invalidError={invalidError.min}
        />
        <img src={colon} alt="colon icon" className="w-32 h-32" />{" "}
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
