"use client";

import { useEffect, useState } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  const formattedTime = dateTime.toLocaleTimeString();
  const formattedDate = dateTime.toDateString();
  return (
    <div className="flex justify-between items-center px-2">
      <div className="">
        <h1 className="lg:text-2xl md:text-md font-bold font-serif text-white">
          Welcome to Restro POS System , User
        </h1>
        <p className="lg:text-md md:text-sm text-white">Give your best service for customers. </p>
      </div>
      <div className="">
        <p className="text-white"> {formattedTime}</p>
        <p className="lg:text-lg md:text-sm text-white"> {formattedDate}</p>
      </div>
    </div>
  );
};

export default Greetings;
