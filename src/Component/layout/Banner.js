import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Banner = () => {
  const [DotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "9%",
                transform: "translateX(-50%)",
                left: "9%",
                fontSize: "14px",
              }}
            >
              <li style={{ margin: "0px" }}> {dots} </li>
            </div>
          ),
        },
      },

      {
        breakpoint: 1280,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "25%",
                transform: "translateX(-50%)",
                left: "9%",
                fontSize: "14px",
              }}
            >
              <li style={{ margin: "0px" }}> {dots} </li>
            </div>
          ),
        },
      },
    ],
    beforeChange: (next) => {
      setDotActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "32%",
          transform: "translateX(-50%)",
          left: "9%",
          zIndex: 1,
        }}
      >
        <li style={{ margin: "0px" }}> {dots} </li>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == DotActive
            ? {
                width: "40px",
                borderRight: "5px green solid",
                padding: "20px  15%",
                color: "purple",
              }
            : {
                width: "40px",
                borderRight: "5px white solid",
                padding: "20px  15%",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div className="z-60 overflow-x-clip">
      <Slider {...settings}>
        <Link>
          <div>
            <Images
              className="w-[100%] max-w-[100%]"
              imgsrc={"../images/banner1.png"}
            />
          </div>
        </Link>

        <Link>
          <div>
            <Images imgsrc={"../images/banner1.png"} />
          </div>
        </Link>

        <Link>
          <div>
            <Images imgsrc={"../images/banner1.png"} />
          </div>
        </Link>

        <Link>
          <div>
            <Images imgsrc={"../images/banner1.png"} />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
