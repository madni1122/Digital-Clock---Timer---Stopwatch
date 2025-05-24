import React, { useEffect, useRef, useState } from "react";
import TimeCard from "./TimeCard";
import colon from "../assets/colon.svg";
import resume from "../assets/resume.svg";
import pause from "../assets/pause.svg";
import reset from "../assets/reset.svg";
import setInputValue from "../composables/setInputValue";
import { toast } from "react-toastify";

const Timer = () => {
  const [timerStatus, setTimerStatus] = useState(false);
  const [timer, setTimer] = useState({ hr: "00", min: "2", sec: "00" });
  const [invalidError, setInvalidError] = useState({
    hr: "",
    min: "",
    sec: "",
  });
  let timeRef = useRef(null);
  // WATCHER

  useEffect(() => {
    if (timerStatus) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [timerStatus]);

  // FUNCTION

  const startTimer = () => {
    timeRef.current = setInterval(() => {
      setTimer((prevVal) => {
        let newSec = prevVal.sec - 1;
        let newMin = prevVal.min;
        let newHr = prevVal.hr;
        if (newSec <= 0) {
          newSec = 59;
          newMin -= 1;
        }
        if (newMin <= 0) {
          newHr -= 1;
          newMin = 59;
        }
        if (newHr <= 0) newHr = 0;
        return { hr: newHr, min: newMin, sec: newSec };
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const handleTimerStatus = () => {
    let hasError = Object.values(invalidError).some((val) => val !== "");
    let isTimeEmpty = Object.values(timer).some((val) => val === "");
    if (hasError || isTimeEmpty) {
      toast.error(
        "Hmm, something’s off or invalid... check your time values 🧐"
      );

      return;
    }
    setTimerStatus((prevVal) => !prevVal);
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
        {!timerStatus && (
          <button
            onClick={() => {
              setTimer({ hr: "", min: "", sec: "" });
            }}
            className="absolute left-[30%] hover:cursor-pointer"
          >
            <img
              src={reset}
              alt="reset icon"
              className="h-14 w-14 filter transition duration-300 ease-in-out hover:[filter:drop-shadow(4px_4px_14px_#32CD32)] "
            />
          </button>
        )}

        <button
          onClick={handleTimerStatus}
          className="h-24 w-24 flex justify-center items-center rounded-full bg-green-200 transition duration-200 hover:bg-green-300 hover:text-green-950 shadow-[0_0_16px_#32CD32]"
        >
          <img
            src={timerStatus ? pause : resume}
            className="h-[60%] w-[60%] transition duration-200"
            alt="start icon"
          />
        </button>
      </div>
    </>
  );
};

export default Timer;
