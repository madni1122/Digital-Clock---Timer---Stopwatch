const addZero = (digit) =>
  digit.toString().length === 1 ? `0${digit}` : digit;

export default addZero;
