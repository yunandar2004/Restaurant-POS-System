"use client";
import BackButton from "../components/shared/BackButton";
import React, { useState } from "react";
import FooterNav from "../components/shared/FooterNav";
import TableCard from "../components/tables/TableCard";
import { tables } from "../pages/index.js";

const Table = () => {
  const [selected, setSelected] = useState("All");
  return (
    <section className=" px-10 mt-3 h-full overflow-hidden">
      <div className=" justify-between items-center flex ">
        <div className="flex items-center gap-3">
          <BackButton />

          <h1 className="text-2xl font-bold tricking-wider text-white">
            Tables
          </h1>
        </div>
        <div className="flex text-white w-1/7 gap-3 justify-center  items-center">
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
              selected === "Booked" && "bg-gray-700 rounded-lg"
            }`}
            onClick={() => setSelected("Booked")}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 mt-5">
        {tables.map((table) => (
          <TableCard key={table.id} table={table} />
        ))}
      </div>
      <FooterNav />
    </section>
  );
};

export default Table;
