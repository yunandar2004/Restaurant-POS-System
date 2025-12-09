"use client";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants/index.js";
import { useState } from "react";
import { getBgColor } from "../../utils";
import { HiShoppingCart } from "react-icons/hi";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [count, setCount] = useState(0);
  const [itemId, setItemId] = useState(selected.id);
  const increment = (id) => {
    setItemId(id);
    setCount(count + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    if (count > 0) setCount(count - 1);
  };
  return (
    <section className="pe-3 overflow-y-scroll no-scrollbar h-screen">
      <div className="grid grid-cols-4 gap-4  py-4 w-full">
        {menus.map((menu) => {
          // console.log(menu.color)
          return (
            <div
              key={menu.id}
              className={`flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer ${menu.color} `}
              style={{ backgroundColor: getBgColor() }}
              onClick={() => {
                // console.log("SELECTED:", menu);
                setSelected(menu);
                setCount(0);
                setItemId(menu.id);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#5F55F5] text-sm font-semibold">
                  {menu.icon} {menu.name}
                </h1>

                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>

              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border border-t-2 border-black" />

      <div className="grid grid-cols-4 gap-4  py-4 w-full">
        {Array.isArray(selected?.items) &&
          selected.items.map((menu) => (
            <div
              key={menu.id}
              className={`flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer bg-[#2a2a2a] `}
            >
              <div className="flex items-center justify-between w-full mb-5">
                <h1 className="text-[#5F55F5] text-sm font-semibold">
                  {menu.name}
                </h1>
                <button className="bg-green-400 flex items-center justify-between px-2 py-1 gap-2 rounded-md ">
                 
                  <HiShoppingCart className="text-green-200" size={17} />
                </button>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#ababab] text-sm font-semibold">
                  {menu.price}
                </p>

                <div className="bg-black  flex items-center justify-between px-3 gap-2 rounded-lg">
                  <button
                    onClick={() => decrement(menu.id)}
                    className="text-yellow-600 text-lg cursor-pointer"
                  >
                    &minus;
                  </button>
                  <span className="text-white text-xs">
                    {menu.id === itemId ? count : 0}
                  </span>
                  <button
                    onClick={() => increment(menu.id)}
                    className="text-yellow-600 text-lg cursor-pointer"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MenuContainer;
