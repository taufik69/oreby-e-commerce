import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const BreadCrumd = ({ title }) => {
  let location = useLocation();
  const path = location.pathname.split("/");
  return (
    <div className="mt-8 mb-6">
      <div className="mx-auto  max-w-container">
        <h1 className="font-bold text-primary sm:text-xl md:text-3xl desktop:text-5xl">
          {title}
        </h1>
        <p className="mt-5 flex items-center gap-x-1 font-dmsans text-sm font-normal text-seconddary">
          <Link to="/">Home</Link> <MdOutlineNavigateNext /> {path[1]}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumd;
