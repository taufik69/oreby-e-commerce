import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { FcMinus } from "react-icons/fc";
const Subdropdownitems = (props) => {
  console.log(props.children);
  const [subdropDownshow, setsubdropDownshow] = useState(
    props.dropdownControlprops
  );
  const [dropdownControl] = useState(props.dropdownControlprops);
  return (
    <>
      {dropdownControl ? (
        <div
          className="flex justify-between p-3"
          onClick={() => setsubdropDownshow(!subdropDownshow)}
        >
          <h3>{props.subDropdownTitle}</h3>
          {subdropDownshow ? <FcMinus /> : <HiOutlinePlus />}
        </div>
      ) : (
        <div className="flex justify-between p-3">{props.subDropdownTitle}</div>
      )}

      {subdropDownshow && <div className="p-4">{props.children}</div>}
    </>
  );
};

export default Subdropdownitems;
