import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Images from "./Images";

const Advertisement = () => {
  return (
    <div className=" mt-4 sm:mt-6 md:mt-[30px] lg:mt-9 desktop:mt-14">
      <Container className="mx-auto  max-w-container">
        <Flex className="flex justify-between">
          <div className="max-w-2/4">
            <Link to="#">
              <Images imgsrc={"../images/ad1.png"} />
            </Link>
          </div>

          <div className="max-w-2/4 flex flex-col ">
            <Link to="#">
              <Images imgsrc="../images/bb.png" />
            </Link>

            <Link
              to="#"
              className="mt-[9px] sm:mt-[18px] md:mt-[19px] lg:mt-[26px] desktop:mt-10"
            >
              <Images imgsrc="../images/bb.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertisement;
