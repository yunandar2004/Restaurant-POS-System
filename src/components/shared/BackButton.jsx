"use client";

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button className="border rounded-full p-2 bg-blue-500 ">
      <BiArrowBack className="text-lg text-white" onClick={() => navigate(-1)} />
    </button>
  );
};

export default BackButton;
