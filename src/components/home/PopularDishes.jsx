"use client";
import { popularDishes } from "../../pages/index.js";

const PopularDishes = () => {
  return (
    <div className="px-4 ">
      <div className="flex justify-between mb-4">
        <p className="text-white"> Recent Orders</p>
        <a href="" className="text-blue-600">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-5 overflow-y-scroll no-scrollbar h-[450px]">
        {popularDishes.map((dish) => (
          <div
            className="flex gap-3 border bg-gray-700 p-2 rounded-xl items-center"
            key={dish.id}
          >
              <p className="">{dish.id < 10 ? `0${dish.id}` : `${dish.id}`}</p>

            <img
              src={dish.image}
              alt={dish.title}
              className="size-12 object-cover rounded"
            />
            <div className="flex justify-between w-full items-center">
              <div className="">
                <h1 className="">{dish.title}</h1>
                <p className="">${dish.price}</p>
              </div>
              <p className=""> <span>Orders: </span> {dish.numbersOfOrder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
