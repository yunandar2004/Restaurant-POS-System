"use client";
const MiniCards = ({ title, icon, number, footerNum }) => {
  return (
    <div className="flex flex-col gap-3 justify-center bg-[#0b0b0b] w-1/2 py-3 border rounded-md px-7">
      <div className="flex items-center justify-between rounded-lg ">
        <h1 className="text-yellow-700 text-lg font-semibold tracking-wide ">
          {title}
        </h1>
        <button
          className={`${
            title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]"
          } size-9 rounded-xs flex justify-center items-center `}
          
        >
          {icon}
        </button>
      </div>

      <div className="">
        <h1 className="text-green-400 text-3xl font-bold mt-3">{title === "Total Earnings" ? "$" : ""}{number}</h1>
        <h1 className="text-white">
          <span className="text-green-400 mt-2 pe-2">{footerNum}% </span > than
          yesterday
        </h1>
      </div>
    </div>
  );
};

export default MiniCards;
