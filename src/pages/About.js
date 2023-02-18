import React from "react";
import Container from "../Component/layout/Container";
import BreadCrumd from "../Component/shoppagecomponent/BreadCrumd";
import Flex from "../Component/layout/Flex";
import Images from "../Component/layout/Images";
import Aboutdescription from "../Component/Aboutcomponent/Aboutdescription";
const About = () => {
  return (
    <Container className="m-auto max-w-container p-5">
      <BreadCrumd />
      <Flex className="flex justify-between gap-x-9">
        <div className="w-1/2">
          <Images
            imgsrc={"../images/about/aboutimg2.png"}
            className="w-[100%] max-w-[100%] object-cover"
          />
        </div>
        <div className="w-1/2">
          <Images
            imgsrc={"../images/about/aboutimg.png"}
            className="w-[100%] max-w-[100%] object-cover"
          />
        </div>
      </Flex>
      <div className="mt-28 mb-20 font-dmsans text-4xl font-normal leading-10 text-primary">
        <h1>
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h1>
      </div>

      <Flex className="flex justify-between gap-x-5">
        <Aboutdescription title="Our Vision" />
        <Aboutdescription title="Our Story" />
        <Aboutdescription title="Our Brands" />
      </Flex>
    </Container>
  );
};

export default About;
