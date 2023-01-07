import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footerbottom = () => {
  return (
    <div className="mt-5 py-10 sm:flex sm:justify-between">
      <div className="mb-3 flex gap-x-2 sm:justify-between sm:gap-x-4">
        <GrFacebookOption />
        <FaLinkedinIn />
        <AiFillInstagram />
      </div>
      <div>
        <p className="font-dmsans  text-sm font-normal text-[#6D6D6D]">
          2020 Orebi Minimal eCommerce Figma Template by Adveits
        </p>
      </div>
    </div>
  );
};

export default Footerbottom;
