import React from 'react'
import { wallart } from '../Images/Images'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurFabrics = () => {
    const fabrics = [
        {
            id: 1,
            title: 'Knitting Fabrics',
            description: 'In weaving, threads are always straight, running parallel either lengthwise (warp threads) or crosswise (weft threads). By contrast, the yarn in knitted fabrics follows a meandering path, forming symmetric loops symmetrically above and below the mean path of the yarn.',
            link: '/products-knitting'
        },
        {
            id: 2,
            title: 'Suiting Fabrics',
            description: 'Suiting is fabric of a suitable quality for making suits, trousers, jackets, and skirts. In other words, suiting are fabrics used to make suits. … Originally, as with most clothes, a tailor made the suit from his client’s selected cloth; these are now often known as bespoke suits.',
            link: '/products-weaving'
        },
        {
            id: 3,
            title: 'Curtains Fabrics',
            description: 'A curtain is a piece of cloth intended to block or obscure light. A curtain is also the movable screen or drape in a theater that separates the stage from the auditorium or that serves as a backdrop/background .',
            link: '/products-technical'
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }

    return (
        <div
            style={{
                backgroundImage: `url(${wallart})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                position: 'relative'
            }}
        >
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-[1]'></div>

            <div className='relative z-[2] sm:py-[150px] py-[90px]'>
                <div className='lg:max-w-[1440px] px-[20px] m-auto text-white'>
                    <div className='sm:w-[70%] w-[90%] m-auto'>
                    <Slider {...settings}>
                        {fabrics.map((fabric) => (
                            <div key={fabric.id} className='text-center'>
                                <div className='max-w-[800px] m-auto'>
                                    <h1 className='sm:text-[45px] text-[25px] font-bold'>{fabric.title}</h1>
                                    <p className='sm:text-[18px] text-[15px] my-[20px]'>{fabric.description}</p>

                                    <Link 
                                        to={fabric.link} 
                                        className='inline-block p-[10px] rounded-lg mt-[10px] text-[20px] bg-white text-black hover:text-gray-400'
                                    >
                                        View Products
                                    </Link>
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

export default OurFabrics
