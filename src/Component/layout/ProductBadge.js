import React from "react";

const ProductBadge = ({ badgetitle }) => {
  return (
    <div className="absolute  top-2 left-1 bg-zinc-900 px-1 font-dmsans text-[10px] text-white sm:absolute sm:left-3 sm:top-3 sm:px-2 sm:py-0 sm:text-[10px] md:px-5 md:py-1 desktop:left-4 desktop:top-6 desktop:px-6 desktop:py-1 desktop:text-lg">
      {badgetitle}
    </div>
  );
};

export default ProductBadge;
