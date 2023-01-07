import React from "react";
import CommonHeadtitle from "./CommonHeadtitle";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Arrivalitem = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-5  mb-12 md:mt-10 lg:mt-12">
      <Container className="mx-auto max-w-container">
        <CommonHeadtitle
          className=" mb-4 ml-2 font-dmsans font-bold text-primary sm:ml-0 sm:text-xl md:mb-10 md:text-3xl"
          title="New Arrivals"
        />
        <div className="overflow-hidden">
          <Slider {...settings}>
            <Flex className=" mr-[20px flex gap-x-2 sm:justify-between sm:gap-x-10 md:mr-[25px]">
              <div>
                <Product
                  productImg="../images/img1.png"
                  badgeControl={false}
                  productName="Basic Crew Neck  watch"
                  productPrice="$44.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/img2.png"
                  badgeControl={true}
                  productName=" Crew Neck band watch"
                  productPrice="$44.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/img3.png"
                  badgeControl={false}
                  productName="Nice full basket"
                  productPrice="$44.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/img4.png"
                  badgeControl={true}
                  productName="Barbey Doll "
                  productPrice="$44.00"
                />
              </div>
            </Flex>
            <Flex className=" mr-[20px flex gap-x-2 sm:justify-between sm:gap-x-10 md:mr-[25px]">
              <div>
                <Product
                  productImg="../images/img1.png"
                  badgeControl={false}
                  productName="Basic Crew Neck  watch"
                  productPrice="$44.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/img2.png"
                  badgeControl={true}
                  productName=" Crew Neck band watch"
                  productPrice="$44.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/img3.png"
                  badgeControl={false}
                  productName="Nice full basket"
                  productPrice="$44.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/img4.png"
                  badgeControl={true}
                  productName="Barbey Doll "
                  productPrice="$44.00"
                />
              </div>
            </Flex>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Arrivalitem;
