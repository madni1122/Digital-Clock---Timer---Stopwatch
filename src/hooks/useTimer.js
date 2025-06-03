import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import startTimer from "../composables/startTimer";
import infoAlert from "../composables/swalAlert";
import setInputValue from "../composables/setInputValue";
import { themeContext } from "../contexts/ThemeContext";

const useTimer = () => {
  const [timerStatus, setTimerStatus] = useState(false);
  const [timer, setTimer] = useState({ hr: "00", min: "00", sec: "00" });
  const [invalidError, setInvalidError] = useState({
    hr: "",
    min: "",
    sec: "",
  });
  const [isDark] = useContext(themeContext);

  let timeRef = useRef(null);

  // WATCHER

  useEffect(() => {
    if (timerStatus) {
      startTimer(timeRef, setTimer);
    } else {
      stopTimer();
    }
  }, [timerStatus]);

  useEffect(() => {
    if (
      timerStatus &&
      timer.hr === "00" &&
      timer.min === "00" &&
      timer.sec === "00"
    ) {
      stopTimer();
      toast.success("Timer has finished!");
    }
  }, [timer, timerStatus]);

  useEffect(() => {
    infoAlert("Switching to another tab will reset the timer.", isDark);
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
