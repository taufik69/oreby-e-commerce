import React from "react";

const Dropdown = ({ className, children, dropddRef }) => {
  return (
    <div className={className} ref={dropddRef}>
      {children}
    </div>
  );
};

export default Dropdown;
