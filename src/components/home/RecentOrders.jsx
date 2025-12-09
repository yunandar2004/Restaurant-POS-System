import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="mt-5">
      <div className="bg-[#0b0b0b] w-full h-[280px]  rounded-lg p-4 flex flex-col ">
        <div className="flex justify-between mb-4">
          <p className="text-white"> Recent Orders</p>
          <a href="" className="text-blue-600">
            View All
          </a>
        </div>

        <div className="border border-gray-800 bg-[#1F1F1F] rounded flex p-2 mb-5">
          <BiSearchAlt2 className="text-white w-4 " />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search recent orders"
            className="ps-3 text-xs outline-none  text-blue-300"
          />
        </div>
        <div className="flex flex-col gap-7 overflow-y-scroll no-scrollbar">
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />

        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
