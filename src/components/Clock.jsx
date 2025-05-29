import React from "react";
import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import colon from "../assets/colon.svg";

const Clock = ({ clockTime, toggleFormat }) => {
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={toggleFormat}
          className="mb-10 px-6 py-3 bg-green-700 text-white font-semibold rounded-xl shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 transition-all duration-200"
        >
          {clockTime.ampm ? "24 HOUR FORMAT" : "12 HOUR FORMAT"}
        </button>
      </div>
      <div className="w-full h-full flex px-28 justify-center items-center">
        <TimeCard>{addZero(clockTime.hr)}</TimeCard>
        <img src={colon} alt="colon icon" className="w-32 h-32" />
        <TimeCard>{addZero(clockTime.min)}</TimeCard>
        <img src={colon} alt="colon icon" className="w-32 h-32" />
        <TimeCard>{addZero(clockTime.sec)}</TimeCard>
        <p className=" text-6xl ml-12">{clockTime.ampm}</p>
      </div>
    </>
  );
};

export default Clock;
