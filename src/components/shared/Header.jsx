import React from "react";
import { BiBell, BiSearch, BiUserCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-300 px-10">
      <div className="flex flex-col-3 justify-between items-center py-2">
        <div className="flex gap-2 justify-center items-center">
          <img src="/logo.svg" alt="logo" className="lg:size-9 md:size-7 size-8" />
          <h1 className="font-bold lg:text-xl md:text-xl italic">Restro</h1>
        </div>
        <div className=" flex items-center gap-4 rounded-md lg:px-5 lg:py-2 md:px-4 md:py-1 bg-[#5a5959]">

          <BiSearch className="lg:size-5 md:size-5 bg-none text-white " />
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="outline-none text-white lg:text-md md:text-xs"
            placeholder="Search "
          />
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="cursor-pointer">
            <BiBell className="lg:size-7 md:size-5" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <BiUserCircle className="lg:size-7 md:size-5" />
            <div className="">
              <p className="lg:text-md md:text-xs font-bold">User Name</p>
              <p className="text-xs">Admin</p>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
