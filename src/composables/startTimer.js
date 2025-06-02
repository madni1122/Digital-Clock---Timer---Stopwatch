import { toast } from "react-toastify";
import addZero from "./addZero";

const startTimer = (timeRef, setTimer, stopTimer) => {
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
export default startTimer;
