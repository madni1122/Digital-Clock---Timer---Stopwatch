import { useEffect, useRef, useState } from "react";

const useClockTime = (getTime = () => null) => {
  let stopWatchTime = { hours: 0, minutes: 0, secs: 0 };
  let { hours, minutes, secs } = getTime() || stopWatchTime;
  const [clockTime, setClockTime] = useState({
    hr: hours,
    min: minutes,
    sec: secs,
    ampm: null,
  });
  const timeRef = useRef(null);
  useEffect(() => {
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
  }, []);

  const toggleFormat = () => {
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
  return { toggleFormat, clockTime };
};
export default useClockTime;
