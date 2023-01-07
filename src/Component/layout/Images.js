import React from "react";

const Images = ({ imgsrc, className }) => {
  return <img src={imgsrc} alt={imgsrc} className={className} />;
};

export default Images;
