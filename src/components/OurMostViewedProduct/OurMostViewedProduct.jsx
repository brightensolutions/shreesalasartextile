import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  msv1,
  msv2,
  msv3,
  msv4,
  msv5,
  msv6,
  msv7,
  msv8,
  msv9,
  msv10,
  msv11,
  msv12,
  msv13,
  msv14,
} from "../Images/Images";

const OurMostViewedProduct = () => {
  const products = [
    {
      id: 1,
      title: "Sportswear - Knits & Wovens Fabrics",
      description: "Solid",
      img: msv1,
    },
    {
      id: 2,
      title: "Sportswear - Knits & Wovens Fabrics",
      description: "Solid",
      img: msv2,
    },
    {
      id: 3,
      title: "Sportswear - Knits & Wovens Fabrics",
      description: "Solid",
      img: msv3,
    },
    {
      id: 4,
      title: "Comfort Wear",
      description: "Solid",
      img: msv4,
    },
    {
      id: 5,
      title: "Knitted Jacquard",
      description: "Solid",
      img: msv5,
    },
    {
      id: 6,
      title: "Knitted Jacquard",
      description: "Solid",
      img: msv6,
    },
    {
      id: 7,
      title: "Knitted Jacquard",
      description: "Solid",
      img: msv7,
    },
    {
      id: 8,
      title: "Knitted Jacquard",
      description: "Solid",
      img: msv8,
    },
    {
      id: 9,
      title: "T-Shirt",
      description: "Solid",
      img: msv9,
    },
    {
      id: 10,
      title: "T-Shirt",
      description: "Solid",
      img: msv10,
    },
    {
      id: 11,
      title: "T-Shirt",
      description: "Solid",
      img: msv11,
    },
    {
      id: 12,
      title: "T-Shirt",
      description: "Solid",
      img: msv12,
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[43%] left-[0px] z-10 cursor-pointer text-white bg-black p-[10px]"
      onClick={onClick}
    >
      &#10094;
    </div>
  );

  // Custom Next Arrow Component
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-[43%] right-[0] z-10 cursor-pointer text-white  bg-black p-[10px]"
      onClick={onClick}
    >
      &#10095;
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-[60px]">
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div className="title">
          <h1 className="sm:text-[45px] text-[35px] font-tomorrow font-semibold text-center">
            OUR MOST VIEWED FABRICS
          </h1>
        </div>

        <div className="slider my-[30px]">
          <Slider {...settings} className="slider-class ">
            {products.map((product) => (
              <div
                key={product.id}
                className="slider-item_viewdproduct bg-white rounded-lg"
              >
                <div
                  className="h-[500px] bg-cover bg-center bg-slate-400 rounded-t-lg"
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
                <div className="mt-[15px] p-[10px] text-center">
                  <p className="font-roboto text-[#767676]">
                    {product.description}
                  </p>
                  <h2 className="font-tomorrow font-medium text-[15px]">
                    {product.title}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurMostViewedProduct;
