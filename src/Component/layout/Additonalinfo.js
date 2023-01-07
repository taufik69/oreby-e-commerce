import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbNumber2 } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { SlReload } from "react-icons/sl";
const Additonalinfo = () => {
  return (
    <div className="border-b-2 border-gray-200">
      <Container className="mx-auto max-w-container  p-5 ">
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-x-1 sm:gap-x-3">
            <TbNumber2 className="text-base sm:text-2xl" />
            <p className="font-dmsans text-[10px] text-aditionalColor sm:text-base">
              Two years warranty
            </p>
          </Flex>

          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <TbTruckDelivery className="text-base sm:text-2xl" />
            <p className="font-dmsans text-[10px] text-aditionalColor sm:text-base">
              Free shipping
            </p>
          </Flex>

          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <SlReload className="text-base sm:text-2xl" />
            <p className="font-dmsans text-[10px] text-aditionalColor sm:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Additonalinfo;
