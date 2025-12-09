"use client";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className="px-4 py-2">
      <h1 className="text-md text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-4 overflow-y-scroll no-scrollbar ">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold text-xs">x2</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-[#ababab] cursor-pointer"
                size={15}
              />
              <FaNotesMedical
                className="text-[#ababab] cursor-pointer"
                size={15}
              />
            </div>
            <p className="text-[#f5f5f5] text-xs font-bold">₹123</p>
          </div>
        </div>

        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold text-xs">x2</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-[#ababab] cursor-pointer"
                size={15}
              />
              <FaNotesMedical
                className="text-[#ababab] cursor-pointer"
                size={15}
              />
            </div>
            <p className="text-[#f5f5f5] text-xs font-bold">₹123</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold text-xs">x2</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-[#ababab] cursor-pointer"
                size={15}
              />
              <FaNotesMedical
                className="text-[#ababab] cursor-pointer"
                size={15}
              />
            </div>
            <p className="text-[#f5f5f5] text-xs font-bold">₹123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
