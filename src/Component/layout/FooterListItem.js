import React from "react";

import FooterListHead from "./FooterListHead";
const FooterListItem = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default FooterListItem;
