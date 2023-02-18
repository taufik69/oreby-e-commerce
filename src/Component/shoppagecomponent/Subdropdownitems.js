import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { FcMinus } from "react-icons/fc";
const Subdropdownitems = (props) => {
  const [subdropDownshow, setsubdropDownshow] = useState(false);
  const [dropdownControl] = useState(props.dropdownControlprops);
  return (
    <>
      {dropdownControl ? (
        <div
          className="mr-4 mt-6 flex cursor-pointer items-center  justify-between border-b-2 border-[#D8D8D8] pb-5 font-dmsans text-base font-normal text-seconddary"
          onClick={() => setsubdropDownshow(!subdropDownshow)}
        >
          <h3>
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
                style={{ backgroundColor: props.color }}
              ></span>
            )}
            {props.subDropdownTitle}
          </h3>
          {subdropDownshow ? <FcMinus /> : <HiOutlinePlus />}
        </div>
      ) : (
        <div className="mr-4 mt-6 flex cursor-pointer items-center  justify-between border-b-2 border-[#D8D8D8] pb-5 font-dmsans text-base font-normal text-seconddary">
          <h3>
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
                style={{ backgroundColor: props.color }}
              ></span>
            )}
            {props.subDropdownTitle}
          </h3>
        </div>
      )}

      {subdropDownshow && (
        <div className="mb-11 p-1 font-dmsans text-base font-normal text-seconddary">
          {props.children}
        </div>
      )}
    </>
  );
};

export default Subdropdownitems;
