import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo, logowhite, menuicon } from '../Images/Images';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Our Product', path: '/products' },
        { name: 'Event & Trade Show', path: '/events' },
        { name: 'Fabric Functions', path: '/fabricfunctions' },
        { name: 'Career', path: '/career' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact Us', path: '/contact' },
    ];

    useEffect(() => {
        setActiveLink(location.pathname);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        navigator("/")
    };  

    return (
        <motion.div
            className={`sticky top-0 z-[9999999999] ${isScrolled ? 'bg-white shadow-md' : ''}`}
            style={{ transition: 'top 0.3s ease, position 0.3s ease' }}
            animate={{ top: isScrolled ? '0' : '-100px' }}
            initial={{ top: '-100px' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* <div className="bg-black py-[20px] md:block hidden">
                <div className="lg:max-w-[1440px] px-[20px] m-auto">
                    <div className="flex sm:flex-row flex-col justify-between gap-y-3">
                        <div className="flex sm:flex-row flex-col sm:gap-[25px] gap-y-3">
                            <Link
                                to="mailto:Info@dagagroups.com"
                                className="flex flex-row gap-[8px] items-center justify-center text-white font-tomorrow text-[18px]"
                            >
                                <span>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                                <span>Info@dagagroups.com</span>
                            </Link>
                        </div>

                        <div className="flex flex-row gap-[25px] justify-center">
                            <Link
                                to="https://www.instagram.com/daga_group.official/"
                                target="_blank"
                                className="flex flex-row gap-[8px] items-center justify-center text-[30px] text-white"
                            >
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                            <Link
                                to="https://www.facebook.com/dagaagroup"
                                target="_blank"
                                className="flex flex-row gap-[8px] items-center justify-center text-[30px] text-white"
                            >
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* Main Navbar */}
            <div className={`border-b-[1px] hidden lg:block ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`} style={{ transition: 'top 0.3s ease, position 0.3s ease' }}>
                <div className='lg:max-w-[1440px] px-[20px] m-auto py-[20px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Link onClick={handleLogoClick}   className='font-bold text-[30px] font-tomorrow'>
                                <img src={logo} alt='logo' className='w-[200px]' />
                            </Link>
                        </div>

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <ul className='flex flex-row xl:gap-x-[25px] items-center lg:gap-x-[15px]'>
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className={`text-[18px] font-medium font-tomorrow transition duration-300 ease-in-out ${activeLink === item.path ? 'text-[#656565]' : 'text-black'} hover:text-[#656565] hover:scale-105 ${item.name === 'Contact Us' ? 'bg-[#1D4665] px-4 py-2 rounded' : 'text-black'}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <Link to={item.path} className={`${item.name === 'Contact Us' ? 'text-white' : ''}`}>
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden block px-[20px] py-[25px] border-b-[1px] border-black sticky top-0 bg-white z-[9999]' style={{ transition: 'top 0.3s ease, position 0.3s ease' }}>
                <div className='flex justify-between  items-center'>
                    <div>
                        <Link to="/" className='font-bold text-[30px] font-tomorrow'>
                            <img src={logo} alt='logo' className='w-[200px]' />
                        </Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer}><img src={menuicon} className='w-[32px]' /></button>
                    </div>
                </div>

                <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
                    <div className='p-[20px]'>
                        <ul className='flex flex-col gap-y-[25px]'>
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`text-[18px] font-medium font-tomorrow transition duration-300 ease-in-out ${activeLink === item.path ? 'text-[#656565]' : 'text-black'} hover:text-[#656565] hover:scale-105 ${item.name === 'Contact Us' ? 'bg-[#1D4665] px-4 py-2 rounded' : 'text-black'}`}
                                >
                                    <Link to={item.path} onClick={toggleDrawer} className={`${item.name === 'Contact Us' ? 'text-white' : ''}`}>
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    </div>
                </Drawer>

            </div>
        </motion.div>
    );
};

export default Navbar;
