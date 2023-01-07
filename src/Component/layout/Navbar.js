import React from "react";
import { useEffect, useState } from "react";
import Images from "./Images";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { AiOutlineBars } from "react-icons/ai";
import Container from "./Container";

const Navbar = () => {
  const [show, setshow] = useState(true);

  useEffect(() => {
    function Resizebody(value) {
      // const windowSize = value.currentTarget.innerWidth;
      // console.log("current size :" ,windowSize);
      if (window.innerWidth <= 768) {
        setshow(false);
      } else if (window.innerWidth <= 1022) {
        setshow(false);
      } else {
        setshow(true);
      }
    }

    window.addEventListener("resize", Resizebody);
    Resizebody();
  }, []);

  // Bar icon menu cliclable function machanism

  const HanldeClickMenu = () => {
    setshow(!show);
  };
  return (
    <nav>
      <Container className="mx-auto max-w-container p-5">
        <div className="lg:flex ">
          <div className="lg:w-2/6">
            <Images imgsrc={"./images/Logo.png"} />
          </div>

          <Flex className=" lg:w-9/12">
            <AiOutlineBars
              onClick={HanldeClickMenu}
              className=" absolute top-5 right-5 ml-auto cursor-pointer lg:hidden "
            />

            {show && (
              <List className="font-dm-sans mt-5 cursor-pointer font-bold lg:mt-0  lg:flex lg:justify-end lg:gap-x-10">
                <ListItem itemname="Home" className="lg:mt-[-3px]" />
                <ListItem
                  itemname="Shop"
                  className="mt-3 cursor-pointer text-sm font-normal text-neutral-500 duration-300 ease-linear hover:font-bold  lg:mt-0"
                />
                <ListItem
                  itemname="About"
                  className="mt-3 cursor-pointer text-sm font-normal text-neutral-500 duration-300 ease-linear hover:font-bold lg:mt-0"
                />
                <ListItem
                  itemname="Contact"
                  className="mt-3 cursor-pointer text-sm font-normal text-neutral-500 duration-300 ease-linear hover:font-bold lg:mt-0"
                />
                <ListItem
                  itemname="Journal"
                  className="mt-3 cursor-pointer text-sm font-normal text-neutral-500 duration-300 ease-linear hover:font-bold lg:mt-0"
                />
              </List>
            )}
          </Flex>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
