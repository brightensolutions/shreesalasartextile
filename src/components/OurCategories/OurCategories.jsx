import React from 'react'
import { bgoverlapping, category1, category2, category3, category4 } from '../Images/Images'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const OurCategories = () => {
    const categories = [
        {
            id: 1,
            title: 'Sportswear - Knits & Wovens Fabrics',
            img: category1,
            link: '/enquire-sportswear'
        },
        {
            id: 2,
            title: 'Outerwear / Jacket Fabrics',
            img: category2,
            link: '/enquire-casualwear'
        },
        {
            id: 3,
            title: 'Active Blazer/Bottoms Fabrics',
            img: category3,
            link: '/enquire-formalwear'
        },
        {
            id: 4,
            title: 'Lining Fabrics',
            img: category4,
            link: '/enquire-outdoorwear'
        }
    ]

    const PrevArrow = ({ onClick }) => (
        <div className="absolute top-[43%] left-[0px] z-10 cursor-pointer text-white bg-black p-[10px]" onClick={onClick}>
          &#10094;
        </div>
      );
      
      const NextArrow = ({ onClick }) => (
        <div className="absolute top-[43%] right-[0] z-10 cursor-pointer text-white  bg-black p-[10px]" onClick={onClick}>
          &#10095;
        </div>
      );
      

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='sm:py-[80px] py-[30px]'>
            <div>
                <div className='title'>
                    <h1 className='sm:text-[55px] text-[45px] font-tomorrow font-semibold text-center'>OUR CATEGORIES</h1>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${bgoverlapping})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='sm:py-[50px] pt-[0px]'
                >
                    <div className='lg:max-w-[1440px] px-[20px] m-auto mt-[50px]'>
                        <Slider {...settings}>
                            {categories.map((category) => (
                                <div key={category.id} className='m-[15px]'>
                                    <div>
                                        <div
                                            className='img h-[450px] bg-cover bg-center bg-slate-500'
                                            style={{ backgroundImage: `url(${category.img})` }}
                                        ></div>
                                        <div className='mt-[10px]'>
                                            <h1 className='font-tomorrow text-[22px] font-semibold'>{category.title}</h1>

                                            <Link
                                                to={category.link}
                                                className='inline-block border-b-[1px] pb-[5px] text-[18px] mt-[10px]'
                                            >
                                                Enquire Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCategories
