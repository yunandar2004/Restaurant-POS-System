"use client";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className=" justify-between items-center col-span-1 bg-gray-700 px-3 py-3 rounded-xl">
      <div className="flex items-center gap-2 ">
        <div className="flex gap-2">
          <button className="border bg-yellow-400 border-yellow-500 text-black p-1.5 rounded font-bold">
            AM
          </button>
          <div className="flex flex-col justify-between">
            <p className="font-bold text-white text-sm">Amrit Raj</p>
            <p className="text-xs text-white">8 items</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="flex gap-2 items-center justify-center text-green-600 text-xs bg-green-400 rounded-xl p-1">
            <FaCheckDouble className="text-green-600" /> Ready
          </p>
          <p className="flex gap-2 items-center text-xs text-white">
            <FaCircle className="text-green-600" /> Ready to Searve
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 ">
        <p className="text-xs">January 18 , 2025 08:30 PM</p>
        <p className="text-xs">8 items</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center">
        <p className="text-xs">Total</p>
        <p className="">$ 300</p>
      </div>
    </div>
  );
};

export default OrderCard;
