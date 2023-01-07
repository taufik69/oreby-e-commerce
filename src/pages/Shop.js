import React from "react";
import BreadCrumd from "../Component/shoppagecomponent/BreadCrumd";
import Flex from "../Component/layout/Flex";
import Container from "../Component/layout/Container";
import PageitemSelect from "../Component/layout/PageitemSelect";
import Shoppageleft from "../Component/shoppagecomponent/Shoppageleft";

const Shop = () => {
  return (
    <Container className="mx-auto max-w-container pb-20">
      <BreadCrumd title="Product" />

      <Flex className="flex gap-x-4 md:gap-x-9">
        <div className="w-[25%] bg-gray-200">
          <Shoppageleft
            dropdownControl={false}
            arrowControl={false}
            title="shop catagories 1"
          />
        </div>
        <div className="relative w-[75%]">
          <PageitemSelect />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
