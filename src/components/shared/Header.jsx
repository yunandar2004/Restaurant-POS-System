import React from "react";
import { BiBell, BiSearch, BiUserCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-300 px-10">
      <div className="flex flex-col-3 justify-between items-center py-2">
        <div className="flex gap-2 justify-center items-center">
          <img src="/logo.svg" alt="logo" className="lg:size-12 md:size-9 size-8" />
          <h1 className="font-bold lg:text-2xl md:text-xl">Restro</h1>
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
            {/* <img src="/bell.png" alt="bell" className="lg:size-9 md:size-7 font-bold" /> */}
            <BiBell className="lg:size-9 md:size-7" />
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* <img src="/user.png" alt="user" className="lg:size-9 md:size-7"/> */}
            <BiUserCircle className="lg:size-9 md:size-7" />
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
