import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import Colon from "./Colon";

const Clock = ({ clockTime, toggleFormat, is24Hour }) => {
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={toggleFormat}
          className="mb-10 px-5 text-sm py-3 bg-green-700 text-white font-semibold rounded-xl shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 transition-all duration-200"
        >
          {is24Hour ? "24 HOUR FORMAT" : "12 HOUR FORMAT"}
        </button>
      </div>
      <div className="relative w-full h-full flex px-28 justify-center items-center">
        <TimeCard>{addZero(clockTime.hr)}</TimeCard>
        <Colon />
        <TimeCard>{addZero(clockTime.min)}</TimeCard>
        <Colon />
        <TimeCard>{addZero(clockTime.sec)}</TimeCard>
        <p className="absolute left-[87%] text-4xl ml-12">{clockTime.ampm}</p>
      </div>
    </>
  );
};

export default Clock;
