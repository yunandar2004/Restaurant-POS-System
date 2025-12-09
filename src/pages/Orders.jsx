"use client";
import FooterNav from "../components/shared/FooterNav";

import BackButton from "../components/shared/BackButton";
import OrderCard from "../components/orders/OrderCard";
import { useState } from "react";

const Orders = () => {
  const [selected, setSelected] = useState("All");
  return (
    <section className=" px-10 mt-3 h-full overflow-hidden">
      <div className=" justify-between items-center flex ">
        <div className="flex items-center gap-3">
          <BackButton />

          <h1 className="text-2xl font-bold tricking-wider text-white">
            Orders
          </h1>
        </div>
        <div className="flex text-white w-2/6 gap-1 justify-around">
          <button
            className={`px-5 text-sm py-2 cursor-pointer ${
              selected === "All" && "bg-gray-700 rounded-lg"
            }`}
            onClick={() => setSelected("All")}
          >
            All
          </button>

          <button
            className={`px-5 text-sm py-2 cursor-pointer ${
              selected === "In Progress" && "bg-gray-700 rounded-lg"
            }`}
            onClick={() => setSelected("In Progress")}
          >
            In Progress
          </button>

          <button
            className={`px-5 text-sm py-2 cursor-pointer ${
              selected === "Ready" && "bg-gray-700 rounded-lg"
            }`}
            onClick={() => setSelected("Ready")}
          >
            Ready
          </button>

          <button
            className={`px-5 text-sm py-2 cursor-pointer ${
              selected === "Complete" && "bg-gray-700 rounded-lg"
            }`}
            onClick={() => setSelected("Complete")}
          >
            Complete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4 overflow-scroll no-scrollbar h-[calc(100vh-5rem-5rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <FooterNav />
    </section>
  );
};

export default Orders;
