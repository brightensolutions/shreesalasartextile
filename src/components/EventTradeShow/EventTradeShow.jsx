import React,{ useEffect } from 'react';
import { dagabanner, expo1, galary1 } from '../Images/Images';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventTradeShow = () => {
    const galleryItems = [
        { id: 1, img: galary1, alt: "Gallery Image 1" },
        { id: 2, img: galary1, alt: "Gallery Image 2" },
        { id: 3, img: galary1, alt: "Gallery Image 3" },
        { id: 4, img: galary1, alt: "Gallery Image 4" },
        { id: 5, img: galary1, alt: "Gallery Image 5" },
    ];

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            ref={sectionRef}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
                <div className='text-center '>
                    <h1 className='font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block'>Event & Trade Show</h1>
                </div>

                <div className='bg-black/40  rounded-xl'>
                <div className='bg-white w-fit p-3 border-t border-l rounded-br-3xl'>
                    <p className='text-[18px] font-bold font-roboto'>Upcoming </p>
                </div>
                <motion.div className='relative ' variants={itemVariants}>
                    <LazyLoadImage
                        src={expo1}
                        alt="Event & Trade Show Banner"
                        effect="blur"
                        className='md:h-[600px] w-full object-contain border-black'
                    />
                </motion.div>
                </div>

                <motion.div className='pt-[50px] gap-[15px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
                    {galleryItems.map(item => (
                        <motion.div key={item.id} className='' variants={itemVariants}>
                            <LazyLoadImage
                                src={item.img}
                                alt={item.alt}
                                effect="blur"
                                className='md:h-[200px] h-[120px] object-cover  rounded-lg border-[1px] border-black'
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default EventTradeShow;
