const getCurrentTime = () => {
  let date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const secs = date.getSeconds();
  return { hours, minutes, secs };
};

export default getCurrentTime;
