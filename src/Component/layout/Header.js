import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { VscThreeBars } from "react-icons/vsc";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Images from "../layout/Images";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { ImCross, ImUsers } from "react-icons/im";
import { RxTriangleDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [Catagoriesshow, setCatagoriesshow] = useState(false);
  const [HumanCatagoriesShow, setHumanCatagoriesShow] = useState(false);
  const [Cartshow, setCartshow] = useState(false);
  const CatagoriesRef = useRef();
  const HumanRef = useRef();
  const CartRef = useRef();
  // console.log("reference value is : ", ref.current);

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (CatagoriesRef.current.contains(event.target)) {
        setCatagoriesshow(true);
      } else {
        setCatagoriesshow(false);
      }

      // condition for HuamanCatagories dropdown
      if (HumanRef.current.contains(event.target)) {
        setHumanCatagoriesShow(true);
      } else {
        setHumanCatagoriesShow(false);
      }

      // condition for Cart dropdown
      if (CartRef.current.contains(event.target)) {
        setCartshow(true);
      } else {
        setCartshow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#d4d4d4]">
      <Container className="mx-auto max-w-container p-5">
        <Flex className="flex items-center justify-between">
          <Dropdown
            className=" relative z-10 cursor-pointer "
            dropddRef={CatagoriesRef}
          >
            <div className="flex items-center gap-x-3">
              <VscThreeBars />
              <p className="font-dmsans text-base font-normal text-black ">
                <span className="hidden lg:inline-block">Shop by Category</span>
              </p>
            </div>
            {Catagoriesshow && (
              <List className="md: absolute top-[52px] left-[-20px] w-[257px] bg-primary font-dmsans font-normal text-slate-300 lg:top-[55px] ">
                <ListItem
                  itemname="Acceserioes"
                  className="border-b-2 border-gray-500 py-4 pl-7 duration-300 ease-linear hover:pl-9 hover:text-white"
                />
                <ListItem
                  itemname="Furtiture"
                  className="border-b-2 border-gray-500 py-4 pl-7 duration-300 ease-linear hover:pl-9 hover:text-white"
                />
                <ListItem
                  itemname="Electronics"
                  className="border-b-2 border-gray-500 py-4 pl-7 duration-300 ease-linear hover:pl-9 hover:text-white"
                />
                <ListItem
                  itemname="Cloths"
                  className="border-b-2 border-gray-500 py-4 pl-7 duration-300 ease-linear hover:bg-green-900 hover:pl-9 hover:text-white "
                />
                <ListItem
                  itemname="Bags"
                  className="border-b-2 border-gray-500 py-4 pl-7 duration-300 ease-linear hover:pl-9 hover:text-white"
                />
                <ListItem
                  itemname="Home Appliances"
                  className="py-4 pl-7 duration-300 ease-linear hover:pl-9 hover:text-white"
                />
              </List>
            )}
          </Dropdown>

          <div className="relative w-[600px]">
            <Search
              className="w-full  rounded px-5 py-3 font-dmsans  text-base outline-none placeholder:text-[#C4C4C4]"
              placehoder="Search Products"
            />
            <BiSearchAlt className="absolute top-4 right-5 cursor-pointer text-[22px]" />
          </div>
          <div>
            <Flex className="flex gap-x-5 ">
              <Dropdown dropddRef={HumanRef} className="relative z-10">
                <Flex className="ml-4 flex lg:ml-0">
                  <Link>
                    <ImUsers className="duration-300 ease-linear" />
                  </Link>
                  <Link>
                    <RxTriangleDown />
                  </Link>
                </Flex>

                {HumanCatagoriesShow && (
                  <List className="absolute top-[54px] right-[-60px]  w-[250px] border-2 text-center  font-dmsans font-normal text-slate-300 ">
                    <ListItem
                      itemname="My Account"
                      className="border-b-2 border-gray-200 py-4 text-black  duration-200  ease-linear hover:bg-black hover:font-bold hover:text-white"
                    />

                    <ListItem
                      itemname="Log out"
                      className=" border-b-2  py-4  text-black  duration-200 ease-linear hover:bg-black  hover:font-bold  hover:text-white "
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <Dropdown dropddRef={CartRef} className="relative z-10 ">
                  <Link>
                    <BsCart3 className="text-xl" />
                  </Link>

                  {Cartshow && (
                    <div className="absolute top-[53px] right-[-20px] w-[375px] border-2 md:right-[-19px] lg:right-[-20px]">
                      <div className="  border-gray-300 bg-[#f5f5f5] p-5">
                        <Flex className="flex justify-between">
                          <Images imgsrc={"../images/cart1.png"} />
                          <div className=" flex flex-col justify-center">
                            <h2 className=" font-dmsans text-sm font-bold text-primary">
                              Balck Smart Watch
                            </h2>
                            <p className="mt-2  font-dmsans text-sm font-bold text-primary">
                              $420
                            </p>
                          </div>
                          <div className="flex items-center justify-center">
                            <ImCross />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <p className="text-lg font-normal text-gray-500">
                          subtotal:
                          <span className=" font-lg ml-2 font-bold text-primary">
                            $420
                          </span>
                        </p>

                        <Link
                          to="#"
                          className="mt-4 inline-block border-2 border-black px-10 py-4 font-dmsans font-normal text-black"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="ml-2 inline-block border-2 border-black bg-primary  px-10 py-4 font-dmsans font-normal text-white"
                        >
                          View Cart
                        </Link>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
