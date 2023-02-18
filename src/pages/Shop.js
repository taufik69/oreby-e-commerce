import React, { useEffect, useRef, useState } from "react";
import BreadCrumd from "../Component/shoppagecomponent/BreadCrumd";
import Flex from "../Component/layout/Flex";
import Container from "../Component/layout/Container";
import PageitemSelect from "../Component/layout/PageitemSelect";
import Shoppageleft from "../Component/shoppagecomponent/Shoppageleft";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineFilter } from "react-icons/ai";
import { color, price, catagories, brand } from "../data/data";

const Shop = () => {
  const [show, setshow] = useState(true);
  const filterRef = useRef();

  // document.body.addEventListener("click", (event) => {
  //   if (filterRef.current.contains(event.target)) {
  //     setshow(true);
  //     } else if (filterRef.current.contains(event.target)) {
  //       setshow(!show);
  //     } else {
  //     setshow(false);
  //   }
  // });

  // window resizing function

  useEffect(() => {
    function Resizebody(value) {
      // const windowSize = value.currentTarget.innerWidth;
      // console.log("current size :" ,windowSize);
      if (window.innerWidth > 300) {
        setshow(true);
      } else {
        setshow(false);
      }
    }

    window.addEventListener("resize", Resizebody);
    Resizebody();
  }, []);

  // Handlefilter function start

  const Handlefilter = () => {
    console.log("filter icons function body");
    setshow(!show);
  };

  return (
    <Container className="mx-auto max-w-container pb-20">
      <BreadCrumd title="Product" />

      <Flex className="relative flex gap-x-4 md:gap-x-9">
        {show && (
          <div
            ref={filterRef}
            className="absolute top-20 left-0 z-20 w-full bg-slate-100 p-3  sm:static sm:block sm:w-[25%] sm:bg-transparent"
          >
            <RxCross2
              className="absolute top-2 right-3 cursor-pointer text-xl sm:hidden"
              onClick={() => setshow(false)}
            />
            <Shoppageleft
              dropdownControl={false}
              title="shop catagories 1"
              data={catagories}
            />

            <Shoppageleft
              dropdownControl={true}
              title="Shop by Color"
              data={color}
            />
            <Shoppageleft
              dropdownControl={true}
              title="Shop by Brand"
              data={brand}
            />
            <Shoppageleft
              dropdownControl={false}
              title="Shop by price"
              data={price}
            />
          </div>
        )}

        <div className="relative  w-full p-4 md:w-[75%]">
          <div
            className="  absolute top-6 right-2 cursor-pointer items-center text-xl sm:hidden"
            onClick={Handlefilter}
          >
            <AiOutlineFilter />
          </div>
          <PageitemSelect />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
