import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Subdropdownitems from "./Subdropdownitems";

const Shoppageleft = ({ dropdownControl, title, data }) => {
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
          className="mt-5 mb-12 flex cursor-pointer items-center justify-between font-dmsans text-lg font-semibold text-primary"
        >
          <h3>{title}</h3>

          {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      ) : (
        <div className="mt-5 mb-12 flex cursor-pointer  justify-between font-dmsans text-lg font-semibold text-primary">
          <h3>{title}</h3>
        </div>
      )}

      {show && (
        <>
          {data.map((item) =>
            item.subcatogories ? (
              <Subdropdownitems
                dropdownControlprops={item.subcatogories ? true : false}
                subDropdownTitle={item.name}
              >
                {item.subcatogories &&
                  item.subcatogories.map((subitem) => <p>{subitem.name}</p>)}
              </Subdropdownitems>
            ) : (
              <Subdropdownitems
                dropdownControlprops={item.subcatogories ? true : false}
                subDropdownTitle={item.name}
                color={item.code}
              ></Subdropdownitems>
            )
          )}
        </>
      )}

      {!dropdown && (
        <>
          {data.map((item) =>
            item.subcatogories ? (
              <Subdropdownitems
                dropdownControlprops={item.subcatogories ? true : false}
                subDropdownTitle={item.name}
              >
                {item.subcatogories &&
                  item.subcatogories.map((subitem) => <p>{subitem.name}</p>)}
              </Subdropdownitems>
            ) : (
              <Subdropdownitems
                dropdownControlprops={item.subcatogories ? true : false}
                subDropdownTitle={item.name}
                color={item.code}
              ></Subdropdownitems>
            )
          )}
        </>
      )}
    </>
  );
};

export default Shoppageleft;
