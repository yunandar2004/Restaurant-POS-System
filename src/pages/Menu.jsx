"use client";
import { BiUserCircle } from "react-icons/bi";
import BackButton from "../components/shared/BackButton";
import FooterNav from "../components/shared/FooterNav";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

import CustomerInfo from "../components/menu/CustomerInfo";
import CartItem from "../components/menu/CartItem";
import Bill from "../components/menu/Bill";

const Menu = () => {
  return (
    <div className="px-10 mt-3 flex h-screen bg-[#1f1f1f]">
      {/* left div */}
      <div className="flex-3">
        <div className=" flex justify-between">
          <div className="">
            <div className="flex items-center gap-3">
              <BackButton />

              <h1 className="text-2xl font-bold tricking-wider text-white">
                Menus
              </h1>
            </div>
          </div>
          <div className=" text-white">
            <div className="flex justify-center items-center gap-2">
              <MdRestaurantMenu className="lg:size-9 md:size-7" />
              <div className="pe-5">
                <p className="lg:text-md md:text-xs font-bold">Customer Name</p>
                <p className="text-xs">Table No: 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll no-scrollbar h-100vh">
          <MenuContainer />
        </div>
      </div>
      {/* right div */}
      <div className="flex-1 bg-[#141a1a] pb-5 rounded-lg pt-2 flex flex-col h-[calc(100vh-5rem)]">
        {/* Customer Info (fixed) */}
        <CustomerInfo />

        <hr className="border-[#2a2a2a] border-t-2" />

        {/* Cart Items  */}
        <div className="flex-1 overflow-y-auto no-scrollbar ">
          <CartItem />
        </div>

        <hr className="border-[#2a2a2a] border-t-2" />

        {/* Bill (fixed) */}
        <Bill />
      </div>

      <FooterNav />
    </div>
  );
};

export default Menu;
