import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { category1, category2, category3, category4 } from '../Images/Images';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
    {
        id: 1,
        title: 'shree salasar textiles Spirit Of Fabric',
        date: '14-Oct-2024',
        content: 'At shree salasar textiles we aspire to be leaders as manufacturers, suppliers, and exporters of high-quality fabrics and garments across the globe using best technology & talent to deliver quality textile products and services at the most attractive prices to our clients.',
        image: category1,
    },
    {
        id: 2,
        title: 'Innovations in Fabric Technology',
        date: '10-Oct-2024',
        content: 'Exploring the latest innovations in fabric technology that are transforming the textile industry.',
        image: category2,
    },
    {
        id: 3,
        title: 'Sustainable Fabrics for a Greener Future',
        date: '08-Oct-2024',
        content: 'How sustainable fabrics are reshaping the fashion industry and contributing to environmental conservation.',
        image: category3,
    },
    {
        id: 4,
        title: 'Sustainable Fabrics for a Greener Future',
        date: '08-Oct-2024',
        content: 'How sustainable fabrics are reshaping the fashion industry and contributing to environmental conservation.',
        image: category4,
    },
];

const Blogs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers once when in view
        threshold: 0.1, // 10% of the section is visible
    });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Time between animations of each card
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 }, // Start from the left (-50px)
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        },
    };



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div ref={ref}>
            <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
                <div className='text-center'>
                    <h1 className='font-tomorrow text-[45px] font-bold pb-[10px] border-b-[1px] inline-block'>Our Blogs</h1>
                </div>

                {/* Container for cards with staggered animation */}
                <motion.div
                    className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] mt-[50px] gap-y-[55px]'
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {blogPosts.map(post => (
                        <motion.div
                            key={post.id}
                            className='card flex flex-col'
                            variants={cardVariants} // Each card has its own animation
                        >
                            <div
                                className='bg-slate-400 h-[200px] bg-cover bg-center'
                                style={{ backgroundImage: `url(${post.image})` }}
                            ></div>
                            <div className='p-[10px] flex-grow flex flex-col justify-between'>
                                <h1 className='text-[22px] font-tomorrow font-normal'>{post.title}</h1>
                                <div className='text-right'>
                                    <p className='my-[10px] border-[1px] p-[10px] inline-block border-black  rounded-sm'>{post.date}</p>
                                </div>
                                <div className='my-[5px] flex-grow'>
                                    <p className='font-roboto font-normal text-[16px]'>{post.content}</p>
                                </div>
                                <div>
                                    <Link className='inline-block text-[17px] bg-black text-white px-[16px] py-[5px] rounded-lg font-roboto'>Get In Touch</Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border-radius: 8px;
                    overflow: hidden; /* Ensures rounded corners are applied to the image */
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
};

export default Blogs;
