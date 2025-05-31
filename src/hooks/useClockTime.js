import { useEffect, useRef, useState } from "react";

const useClockTime = (getTime = () => null, startTime = true) => {
  const watchTime = { hours: 0, minutes: 0, secs: 0 };
  let { hours, minutes, secs } = getTime() || watchTime;
  const [clockTime, setClockTime] = useState({
    hr: hours,
    min: minutes,
    sec: secs,
    ampm: null,
  });
  const [is24Hour, setIs24Hour] = useState(false);

  const timeRef = useRef(null);

  useEffect(() => {
    if (startTime === true) {
      timeRef.current = setInterval(() => {
        setClockTime((prevVal) => {
          let newSec = prevVal.sec + 1;
          let newMin = prevVal.min;
          let newHr = prevVal.hr;
          if (newSec >= 60) {
            newSec = 0;
            newMin += 1;
          }
          if (newMin >= 60) {
            newHr += 1;
            newMin = 0;
          }
          if (newHr >= 24) newHr = 0;
          return { hr: newHr, min: newMin, sec: newSec, ampm: prevVal.ampm };
        });
      }, 1000);
      return () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
      };
    }
  }, [startTime]);

  const resetWatchTime = () => {
    setClockTime({
      hr: hours,
      min: minutes,
      sec: secs,
    });
  };

  const toggleFormat = () => {
    setIs24Hour((prev) => !prev);

    let { hours: hour } = getTime();
    if (clockTime.ampm) {
      if (hour > 12) {
        setClockTime((prevVal) => ({
          ...prevVal,
          hr: prevVal.hr + 12,
          ampm: null,
        }));
        return;
      }

      setClockTime((prevVal) => ({ ...prevVal, hr: hour, ampm: null }));
      return;
    }
    let newHr;
    let ampm;
    if (hour === 0) {
      ampm = "AM";
      newHr = 12;
    }
    if (hour < 12 && hour > 0) {
      ampm = "AM";
      newHr = hour;
    }

    if (hour > 12) {
      newHr = hour - 12;
      ampm = "PM";
    }
    setClockTime((prevVal) => ({ ...prevVal, hr: newHr, ampm: ampm }));
  };
  return { toggleFormat, clockTime, resetWatchTime, is24Hour };
};
export default useClockTime;
