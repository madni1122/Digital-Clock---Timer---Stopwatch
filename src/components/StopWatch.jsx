import React from "react";
import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import colon from "../assets/colon.svg";

const StopWatch = () => {
  return (
    <>
      <div className="w-full h-full flex px-28 justify-center items-center">
        <TimeCard>00</TimeCard>
        <img src={colon} alt="colon icon" className="w-32 h-32" />
        <TimeCard>00</TimeCard>
        <img src={colon} alt="colon icon" className="w-32 h-32" />
        <TimeCard>00</TimeCard>
      </div>
    </>
  );
};

export default StopWatch;
