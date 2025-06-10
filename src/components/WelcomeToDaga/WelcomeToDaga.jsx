import React from 'react';
import { Link } from 'react-router-dom';
import { aboutusimg } from '../Images/Images';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WelcomeToDaga = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Start animation when 20% of the component is visible
    });

    // Text animation variant with extended duration
    const textVariants = {
        hidden: { opacity: 0, x: -100, scale: 0.9 },
        visible: { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: { 
                duration: 1.5, // Increased duration
                ease: 'easeOut' 
            } 
        }
    };

    // Image animation variant with extended duration
    const imageVariants = {
        hidden: { opacity: 0, x: 100, scale: 0.9 },
        visible: { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: { 
                duration: 1.5, // Increased duration
                ease: 'easeOut',
                delay: 0.3 // Still has the delay for staggered effect
            } 
        }
    };

    return (
        <div className='sm:py-[70px] py-[30px]' ref={ref}>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='flex md:flex-row flex-col items-center justify-center lg:w-[80%] w-[100%] m-auto gap-[25px]'>
                    
                    {/* Animated text section */}
                    <motion.div
                        className='lg:w-[50%] w-[100%]'
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={textVariants}
                    >
                        <h1 className='font-tomorrow text-[45px] font-bold pb-[10px]'>WELCOME TO shree salasar textiles</h1>
                        <p className='font-tomorrow text-[18px] font-medium'>SPIRIT OF FABRICS</p>
                        <div className='mt-[15px] flex flex-col gap-y-[10px]'>
                            <p className='font-roboto font-normal text-[18px] leading-[30px]'>WE ARE WHOLESALERS, MANUFACTURERS,
                                EXPORTER OF FABRICS.</p>
                            <p className='font-roboto font-normal text-[18px] leading-[30px]'>AT shree salasar textiles, WE PERFORM IN UNISON BY FOLLOWING OUR VALUES AND ETHICAL GUIDELINES CODE OF CONDUCT AS A SOURCE OF GUIDANCE AND INSPIRATION, WHICH ENABLE US TO ACHIEVE OUR VISION.</p>
                        </div>

                        <Link className='inline-block mt-[15px] bg-black py-[10px] px-[30px] rounded-lg font-semibold font-tomorrow text-white'>
                            Read More <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                        </Link>
                    </motion.div>

                    {/* Animated image section */}
                    <motion.div
                        className='lg:w-[50%] w-[100%] bg-slate-500'
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={imageVariants}
                    >
                        <img src={aboutusimg} alt='about us images' className='w-[100%]' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeToDaga;
