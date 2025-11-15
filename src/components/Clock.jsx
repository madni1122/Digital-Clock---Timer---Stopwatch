import TimeCard from "./TimeCard";
import addZero from "../composables/addZero";
import Colon from "./Colon";

const Clock = ({ clockTime, toggleFormat, is24Hour }) => {
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={toggleFormat}
          className="
      mb-6 sm:mb-8 md:mb-10
      
      px-4 py-2 
      text-xs 
      sm:px-5 sm:py-3 sm:text-sm
      md:px-6 md:py-3 md:text-base

      bg-green-700 text-white font-semibold rounded-xl shadow-md 
      hover:bg-green-800 
      transition-all duration-200 
      focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2
    "
        >
          {is24Hour ? "24 HOUR FORMAT" : "12 HOUR FORMAT"}
        </button>
      </div>

      <div className="relative w-full flex justify-center items-center px-0 sm:px-10 md:px-20 lg:px-28">
        <TimeCard>{addZero(clockTime.hr)}</TimeCard>

        <Colon />

        <TimeCard>{addZero(clockTime.min)}</TimeCard>

        <Colon style="hidden sm:block" />

        <div className="hidden sm:block">
          <TimeCard>{addZero(clockTime.sec)}</TimeCard>
        </div>
        <div className="flex items-center mt-4">
          <Colon style="sm:hidden block !w-6 !h-6" />

          <div className="sm:hidden block">
            <TimeCard style="!text-[5vw]">{addZero(clockTime.sec)}</TimeCard>
          </div>
        </div>

        <p
          className="
            absolute
            bottom-[-40px] left-1/2 -translate-x-1/2 text-2xl font-semibold
            sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:left-auto sm:-translate-x-0 sm:right-4 sm:text-3xl
            md:text-4xl
          "
        >
          {clockTime.ampm}
        </p>
      </div>
    </>
  );
};

export default Clock;
