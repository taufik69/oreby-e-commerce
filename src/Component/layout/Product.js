import React from "react";
import Images from "./Images";
import ProductBadge from "./ProductBadge";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import Flex from "./Flex";
import { Link } from "react-router-dom";
const Product = ({ productImg, badgeControl, productName, productPrice }) => {
  return (
    <div>
      <div className="group relative  overflow-y-hidden">
        <Images imgsrc={productImg} />
        {badgeControl && <ProductBadge badgetitle="New" />}
        <div className="absolute  h-fit w-full bg-transparent duration-300 ease-in group-hover:bottom-0 sm:absolute sm:bottom-[-95px]  sm:h-[60%] sm:w-full sm:bg-transparent md:bottom-[-100px] md:bg-white desktop:bottom-[-180px] desktop:h-[50%]">
          <Flex className="mb-0 flex justify-start sm:mb-3  sm:items-center sm:justify-end  sm:gap-x-4">
            <h3 className="font-dmsans text-[9px] text-[#76767] duration-200 ease-out sm:text-[13px] sm:font-normal sm:hover:font-bold md:text-[14px] ">
              <Link>Add to Wish List</Link>
            </h3>
            <AiFillHeart />
          </Flex>

          <Flex className="mb-1 flex items-center justify-end gap-x-4 font-dmsans  sm:mb-3">
            <h3 className="font-dmsans text-[10px] font-normal text-[#76767] duration-200 ease-out  sm:text-[14px] sm:font-normal sm:hover:font-bold">
              <Link>compare</Link>
            </h3>
            <IoIosGitCompare />
          </Flex>

          <Flex className="mb-1 flex items-center justify-end  gap-x-4 font-dmsans  sm:mb-3">
            <h3 className="font-dmsans text-[9px] font-bold text-black duration-200 ease-out sm:text-[14px]  sm:font-normal sm:hover:font-bold md:text-[16px]">
              <Link>Add to Cart</Link>
            </h3>
            <AiOutlineShoppingCart />
          </Flex>
        </div>
      </div>

      <Flex className=" mt-3 flex  max-w-full flex-wrap items-center justify-between sm:flex md:mt-6">
        <p className="mb-1  font-dmsans text-[10px] font-thin text-primary sm:mb-0 sm:text-lg md:font-bold">
          {productName}
        </p>
        <p className="font-dmsans  text-[12px]  text-[#767676] md:text-lg md:font-semibold">
          {productPrice}
        </p>
      </Flex>
      <p className="sm:text-md mt-1 font-dmsans text-[12px] text-[#767676] sm:mt-3 sm:text-lg sm:font-normal">
        black
      </p>
    </div>
  );
};

export default Product;
