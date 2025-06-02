const setInputValue = (type, value, setTimer, setInvalidError) => {
  if (value.length > 2) return;

  let errors = {
    hr: "Invalid hour (00-12)",
    min: "Invalid minutes (00-59)",
    sec: "Invalid seconds (00-59)",
  };
  let regexes = {
    hr: /^(0[0-9]|1[0-2])$/,
    minAndSec: /^([0-5][0-9])$/,
  };
  setTimer((prevVal) => ({ ...prevVal, [type]: value }));
  if (type === "hr") {
    if (value.length === 2 && !regexes.hr.test(value)) {
      setInvalidError((prevVal) => ({
        ...prevVal,
        [type]: errors.hr,
      }));
    } else {
      setInvalidError((prevVal) => ({
        ...prevVal,
        [type]: "",
      }));
    }
  } else if (type === "min") {
    if (value.length === 2 && !regexes.minAndSec.test(value)) {
      setInvalidError((prevVal) => ({
        ...prevVal,
        [type]: errors.min,
      }));
    } else {
      setInvalidError((prevVal) => ({
        ...prevVal,
        [type]: "",
      }));
    }
  } else {
    if (value.length === 2 && !regexes.minAndSec.test(value)) {
      setInvalidError((prevVal) => ({
        ...prevVal,
        [type]: errors.sec,
      }));
    } else {
      setInvalidError((prevVal) => ({
        ...prevVal,
        [type]: "",
      }));
    }
  }
};
export default setInputValue;
