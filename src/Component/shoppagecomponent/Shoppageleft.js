import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Subdropdownitems from "./Subdropdownitems";
const Shoppageleft = ({ dropdownControl, arrowControl, title }) => {
  console.log(arrowControl);
  const [show, setshow] = useState(dropdownControl);
  const [dropdown] = useState(dropdownControl);

  //   dropdown fucntion machanism
  const handleDropDown = () => {
    setshow(!show);
  };
  return (
    <>
      {dropdown ? (
        <div
          onClick={handleDropDown}
          className="flex cursor-pointer items-center justify-between p-3"
        >
          <h2>{title}</h2>
          {arrowControl && (show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />)}
        </div>
      ) : (
        <div className="flex  cursor-pointer justify-between p-3">
          <h2>{title}</h2>
        </div>
      )}

      {show && (
        <>
          <Subdropdownitems
            dropdownControlprops={true}
            subDropdownTitle="taufik subcatagories 1"
          >
            <h1>taufik islam</h1>
            <h1>taufik islam</h1>
            <h1>taufik islam</h1>
          </Subdropdownitems>
        </>
      )}

      {!dropdown && (
        <>
          <Subdropdownitems
            dropdownControlprops={false}
            subDropdownTitle="taufik subcatagories 1"
          >
            <h1>taufik islam</h1>
            <h1>taufik islam</h1>
            <h1>taufik islam</h1>
          </Subdropdownitems>
        </>
      )}
    </>
  );
};

export default Shoppageleft;
