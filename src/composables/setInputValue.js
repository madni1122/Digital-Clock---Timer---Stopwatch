const setInputValue = (type, value, rgx, err, setTimer, setInvalidError) => {
  if (value.length > 2) return;
  setTimer((prevVal) => ({ ...prevVal, [type]: value }));
  const regex = rgx;

  if (value.length === 2 && !regex.test(value)) {
    setInvalidError((prevVal) => ({
      ...prevVal,
      [type]: err,
    }));
  } else {
    setInvalidError((prevVal) => ({
      ...prevVal,
      [type]: "",
    }));
  }
};
export default setInputValue;
