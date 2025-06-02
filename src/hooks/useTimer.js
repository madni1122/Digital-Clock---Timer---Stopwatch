import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import startTimer from "../composables/startTimer";
import infoAlert from "../composables/swalAlert";
import setInputValue from "../composables/setInputValue";

const useTimer = () => {
  const [timerStatus, setTimerStatus] = useState(false);
  const [timer, setTimer] = useState({ hr: "00", min: "00", sec: "00" });
  const [invalidError, setInvalidError] = useState({
    hr: "",
    min: "",
    sec: "",
  });
  let timeRef = useRef(null);

  // WATCHER

  useEffect(() => {
    if (timerStatus) {
      startTimer(timeRef, setTimer, stopTimer);
    } else {
      stopTimer();
    }
  }, [timerStatus]);

  useEffect(() => {
    infoAlert("Switching to another tab will reset the timer.");
  }, []);

  // FUNCTION

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
    setInvalidError({
      hr: "",
      min: "",
      sec: "",
    });
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

    setInputValue(type, value, setTimer, setInvalidError);
    return;
  };

  return {
    timerStatus,
    timer,
    invalidError,
    handleTimerStatus,
    handleReset,
    handleChange,
  };
};
export default useTimer;
