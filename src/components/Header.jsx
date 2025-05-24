import React from "react";
import clock from "../assets/clock.svg";
import timer from "../assets/timer.svg";
import stopWatch from "../assets/stopWatch.svg";

const Header = ({ section, setSection }) => {
  return (
    <div className="relative">
      <header className="absolute top-4 left-1/2 -translate-x-1/2 h-[52px] w-[600px] bg-gradient-to-r from-green-200 via-green-100 to-green-200 shadow-lg rounded-xl">
        <nav className="h-full">
          <ul className="grid h-full grid-cols-3 items-center px-4 gap-2 text-green-900 font-medium">
            {[
              { label: "Clock", img: clock },
              { label: "Timer", img: timer },
              { label: "Stop Watch", img: stopWatch },
            ].map(({ label, img }, index) => (
              <li key={index} className="h-full">
                <button
                  onClick={() => {
                    setSection(label);
                  }}
                  title={label}
                  className={`w-full h-full flex items-center justify-center rounded-md  ${
                    section === label
                      ? "bg-green-400 text-white shadow-inner ring-2 ring-green-600 scale-105"
                      : "transition duration-200 hover:bg-green-300 hover:text-green-950"
                  } cursor-pointer`}
                >
                  <img src={img} alt={`${img} icon`} className="w-8 h-8" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
