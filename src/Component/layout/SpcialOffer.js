import React from "react";
import CommonHeadtitle from "./CommonHeadtitle";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpcialOffer = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="mt-5  mb-12 sm:mt-12 md:mt-10 desktop:mt-16">
      <Container className="mx-auto max-w-container">
        <CommonHeadtitle
          className=" mb-4 ml-2 font-dmsans font-bold text-primary sm:ml-0 sm:text-xl md:mb-10 md:text-3xl"
          title="Special Offers"
        />
        <div className="overflow-hidden">
          <Slider {...settings}>
            <Flex className=" mr-[20px] flex gap-2 sm:justify-between sm:gap-x-10 md:mr-[25px]">
              <div>
                <Product
                  productImg="../images/specialoffer/sp1.png"
                  badgeControl={true}
                  productName="Taufik islam Neck  watch"
                  productPrice="$9.30"
                />
              </div>
              <div>
                <Product
                  productImg="../images/specialoffer/sp2.png"
                  badgeControl={true}
                  productName=" Crew band watch"
                  productPrice="$20.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/specialoffer/sp3.png"
                  badgeControl={true}
                  productName="Nice full basket"
                  productPrice="$4.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/specialoffer/sp4.png"
                  badgeControl={true}
                  productName="Doll "
                  productPrice="$10.00"
                />
              </div>
            </Flex>

            <Flex className="mr-[20px] flex gap-2 sm:justify-between sm:gap-x-10 md:mr-[25px]">
              <div>
                <Product
                  productImg="../images/bestseller/bs1.png"
                  badgeControl={true}
                  productName="Basic Crew Neck  watch"
                  productPrice="$9.30"
                />
              </div>
              <div>
                <Product
                  productImg="../images/bestseller/bs2.png"
                  badgeControl={false}
                  productName=" Crew Neck band watch"
                  productPrice="$20.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/bestseller/bs3.png"
                  badgeControl={true}
                  productName="Nice full basket"
                  productPrice="$4.00"
                />
              </div>
              <div>
                <Product
                  productImg="../images/bestseller/bs4.png"
                  badgeControl={false}
                  productName="Barbey Doll "
                  productPrice="$10.00"
                />
              </div>
            </Flex>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default SpcialOffer;
