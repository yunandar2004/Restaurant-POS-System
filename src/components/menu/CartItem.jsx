import React, { useEffect, useRef } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slice/cartSlice";

const CartItem = () => {
  const cartData = useSelector((state) => state.cart);
  const scrolLRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if(scrolLRef.current){
      scrolLRef.current.scrollTo({
        top: scrolLRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  },[cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  }

  return (
    <div className="px-2 py-2">
      <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-3 overflow-y-scroll no-scrollbar h-[380px]" ref={scrolLRef} >

        {cartData.length === 0 ? (
          <p className="text-[#ababab] text-xs flex justify-center items-center h-[380px]">Your cart is empty. Start adding items!</p>
        ) : cartData.map((item) => {
          return (
            <div className="bg-[#1f1f1f] rounded-md px-4 py-3 mb-2">
              <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-sm">
                  {item.name}
                </h1>
                <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <RiDeleteBin2Fill
                    onClick={() => handleRemove(item.id)}
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                  <FaNotesMedical
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                </div>
                <p className="text-[#f5f5f5] text-sm font-bold">₹{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;



