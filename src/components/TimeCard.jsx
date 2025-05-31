import React from "react";

const TimeCard = ({
  children,
  section,
  type,
  value,
  handleChange,
  invalidError,
  status,
}) => {
  return (
    <div className="relative ">
      <div className="bg-green-100 absolute inset-0 z-0 opacity-50"></div>
      <div className="text-black  flex justify-center items-center relative z-10 px-10  border-2 border-gray-600 rounded-md text-[150px] font-bold">
        {section === "timer" ? (
          <>
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              value={value}
              onChange={(e) => {
                handleChange(type, e);
              }}
              disabled={status}
            />
            {invalidError && (
              <p className="text-base font-normal absolute top-full text-red-500">
                {invalidError}
              </p>
            )}
          </>
        ) : (
          <h2>{children}</h2>
        )}
      </div>
    </div>
  );
};

export default TimeCard;
