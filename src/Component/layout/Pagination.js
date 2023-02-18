import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../layout/Product";
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map(() => (
          <div className=" sm:w-[43%] md:w-[42%] lg:w-[43%] desktop:w-[31%]">
            <Product
              productImg="../images/img1.png"
              badgeControl={false}
              productName="Basic Crew Neck  watch"
              productPrice="$44.00"
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="sm:flex sm:flex-wrap sm:justify-around sm:gap-x-1 ">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageClassName="inline-block border border-solid border-seconddary py-2 px-3.5 text-black text-seconddary"
        containerClassName="sm:flex gap-x-3.5 mt-10"
        activeClassName="inline-block border border-solid border-black py-2 px-3.5 bg-black text-white"
      />
      <p className=" right-0 mt-5 text-sm font-normal text-seconddary lg:absolute lg:bottom-4">
        {` Products from ${itemOffset + 1} to ${endOffset}  of ${
          items.length
        } `}
      </p>
    </>
  );
};

export default Pagination;
