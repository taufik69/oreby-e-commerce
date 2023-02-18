import React from "react";

const Button = ({ buttonName }) => {
  return (
    <div className="inline-block cursor-pointer bg-black  px-20 py-4 text-white  hover:bg-gray-600">
      <a href="#">{buttonName}</a>
    </div>
  );
};

export default Button;
