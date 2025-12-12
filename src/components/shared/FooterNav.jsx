"use client";
import { useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineRecordVoiceOver, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const FooterNav = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  const [count, setCount] = useState(1);
  const increment = () => {
    if(count <  6) setCount(count + 1);
  };
  const decrement = (params) => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <footer className=" fixed bottom-0 left-0 right-0 bg-gray-800 h-10">
      <div className="flex justify-around items-center py-1">
        <button
          onClick={() => navigate("/")}
          className="flex justify-center items-center text-green-600 hover:bg-gray-600 hover:rounded-md hover:py-2 hover:px-3 py-2 px-3 "
        >
          <FaHome className="inline mr-2  lg:size-5 md:size-4" /> Home
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="flex justify-center items-center text-green-600 hover:bg-gray-600 hover:rounded-md hover:py-2 hover:px-3 py-2 px-3 "
        >
          <MdOutlineRecordVoiceOver className="inline mr-2  lg:size-5 md:size-4" />{" "}
          Orders
        </button>
        <button
          onClick={() => navigate("/tables")}
          className="flex justify-center items-center text-green-600 hover:bg-gray-600 hover:rounded-md hover:py-2 hover:px-3 py-2 px-3 "
        >
          <MdTableBar className="inline mr-2  lg:size-5 md:size-4" /> Tables
        </button>
        <button
          onClick={() => navigate("/more")}
          className="flex justify-center items-center text-green-600 hover:bg-gray-600 hover:rounded-md hover:py-2 hover:px-3 py-2 px-3 "
        >
          <CiCircleMore className="inline mr-2  lg:size-5 md:size-4" /> More
        </button>

        <button
          className="absolute bg-amber-300 p-3 rounded-full flex items-center justify-center bottom-6 "
          onClick={openModal}
        >
          <BiSolidDish className="inline lg:size-5 md:size-4" />
        </button>

        <Modal title="Create Order" isOpen={isOpenModal} isClose={closeModal}>
          <div className="">
            <label htmlFor="block text-[#ababab] mb-2 text-sm font-medium">
              Customer Name
            </label>
            <div className="flex items-center rounded-lg p-3 px-4 bg-black">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Customer Name"
                className="bg-transparent outline-none text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="block text-[#ababab] mb-2 text-sm font-medium">
              Customer Name
            </label>
            <div className="flex items-center rounded-lg p-3 px-4 bg-black">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Customer Name"
                className="bg-transparent outline-none text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="block text-[#ababab] mb-2 text-sm font-medium">
              Guest
            </label>
            <div className="bg-black  flex items-center justify-between px-4 py-3 rounded-lg">
              <button onClick={decrement} className="text-yellow-600 text-3xl">
                &minus;
              </button>
              <span className="text-white">{count} person</span>
              <button onClick={increment} className="text-yellow-600 text-3xl">
                &#43;
              </button>
            </div>
          </div>
          <button
            className="w-full bg-yellow-500 text-white rounded-lg py-3 mt-8 hover:bg-yellow-700"
            onClick={() => navigate("/tables")}
          >
            Create Order
          </button>
        </Modal>
      </div>
    </footer>
  );
};

export default FooterNav;
