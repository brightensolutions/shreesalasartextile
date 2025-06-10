import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { category1, category2, category3, category4, ourmostpopuproduct1, ourmostpopuproduct2, ourmostpopuproduct3, ourmostpopuproduct4 } from '../Images/Images';

const OurMostViewedProduct = () => {
    const products = [
        {
            id: 1,
            title: 'SSportswear - Knits & Wovens Fabrics',
            description: 'Solid',
            img: category1
        },
        {
            id: 2,
            title: 'Outerwear / Jacket Fabrics',
            description: 'Solid',
            img: category2
        },
        {
            id: 3,
            title: 'Active Blazer/Bottoms Fabrics',
            description: 'Solid',
            img: category3
        },
        {
            id: 4,
            title: 'Lining Fabrics',
            description: 'Solid',
            img: category4
        },
    ];

    const PrevArrow = ({ onClick }) => (
        <div className="absolute top-[43%] left-[0px] z-10 cursor-pointer text-white bg-black p-[10px]" onClick={onClick}>
          &#10094;
        </div>
      );
      
      // Custom Next Arrow Component
      const NextArrow = ({ onClick }) => (
        <div className="absolute top-[43%] right-[0] z-10 cursor-pointer text-white  bg-black p-[10px]" onClick={onClick}>
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
        <div className='my-[60px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='title'>
                    <h1 className='sm:text-[45px] text-[35px] font-tomorrow font-semibold text-center'>OUR MOST VIEWED FABRICS</h1>
                </div>

                <div className='slider my-[30px]'>
                    <Slider {...settings} className='slider-class '>
                        {products.map(product => (
                            <div key={product.id} className='slider-item_viewdproduct bg-white rounded-lg'>
                                <div className='h-[500px] bg-cover bg-center bg-slate-400 rounded-t-lg' style={{ backgroundImage: `url(${product.img})` }}>
                                </div>
                                <div className='mt-[15px] p-[10px] text-center'>
                                    <p className='font-roboto text-[#767676]'>{product.description}</p>
                                    <h2 className='font-tomorrow font-medium text-[15px]'>{product.title}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default OurMostViewedProduct;
