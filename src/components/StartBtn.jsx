import resume from "../assets/resume.svg";
import pause from "../assets/pause.svg";

const StartBtn = ({ handleClick, status }) => {
  return (
    <button
      onClick={handleClick}
      className="h-16 w-16 flex justify-center items-center rounded-full bg-green-200 transition duration-200 hover:bg-green-300 hover:text-green-950 shadow-[0_0_16px_#32CD32]"
    >
      <img
        src={status ? pause : resume}
        className="h-[50%] w-[50%] transition duration-200"
        alt="start icon"
      />
    </button>
  );
};

export default StartBtn;
