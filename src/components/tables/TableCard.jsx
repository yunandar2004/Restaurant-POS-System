"use client";
import { getRandomColor } from "../../utils/index.js";

const TableCard = ({ table: { id, status, name, initial,seats } }) => {
  return (
    <div className="">
      <div className="bg-gray-700 px-3 py-3 rounded">
        <div className="flex  justify-between items-center">
          <h1 className="text-white text-xs">{name}</h1>
          <p
            className={` px-3 py-1 rounded text-xs ${
              status === "Available" ? "bg-green-400" : "bg-yellow-400"
            }`}
          >
            {status}
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p
            className={`flex rounded-full size-12 items-center justify-center ${getRandomColor()}`}
          >
            {initial}
          </p>
        </div>
        <p className="mt-3 tex-xs">
           seats: {seats}
        </p>
      </div>
    </div>
  );
};

export default TableCard;
