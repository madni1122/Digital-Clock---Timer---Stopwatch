import reset from "../assets/reset.svg";

const ResetBtn = ({ handleReset }) => {
  return (
    <button
      onClick={handleReset}
      className="absolute left-[30%] hover:cursor-pointer"
    >
      <img
        src={reset}
        alt="reset icon"
        className="h-[30px] w-[30px] filter transition duration-300 ease-in-out hover:[filter:drop-shadow(4px_4px_14px_#32CD32)] "
      />
    </button>
  );
};

export default ResetBtn;
