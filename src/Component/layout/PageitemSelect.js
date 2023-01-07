import React, { useState } from "react";
import Pagination from "../layout/Pagination";

const PageitemSelect = () => {
  const [showpage, setshowpage] = useState(12);
  console.log(showpage);
  return (
    <>
      <div className="flex sm:justify-between sm:gap-x-9 ">
        <div className="lg:flex lg:items-center lg:gap-x-5">
          <span className="mb-5 font-dmsans text-base font-normal text-seconddary">
            Sort by:
          </span>

          <select className=" focus:border-black-500 text-smfocus:ring-blue-500 text-s sm:px-17   mb-6 border border-gray-300 bg-gray-50 p-2 font-dmsans text-base  font-normal text-seconddary ">
            <option selected>Featured</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="lg:flex lg:items-center lg:gap-x-5">
          <span className="mb-5  font-dmsans text-base font-normal text-seconddary">
            Sort by:
          </span>

          <select
            onChange={(e) => setshowpage(e.target.value)}
            className="focus:border-black-500 text-smfocus:ring-blue-500 text-s mb-6 mr-3 border  border-gray-300 bg-gray-50 p-2 font-dmsans text-base font-normal  text-seconddary sm:px-20 "
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
      </div>
      <Pagination itemsPerPage={Number(showpage)} />
    </>
  );
};

export default PageitemSelect;
