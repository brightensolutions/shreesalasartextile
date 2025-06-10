import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
                <div className='text-center'>
                    <h1 className='font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block'>Careers At shree salasar textiless</h1>
                </div>

                <div className='flex md:flex-row flex-col gap-[30px] py-[80px] lg:w-[70%] w-[100%] m-auto items-center'>
                    <div className='md:w-[50%] w-[100%] border-r-2'>
                        <p className='text-[#4a4a4a] font-roboto text-[16px]'>Join Us Today</p>
                        <h1 className='text-[23px] font-tomorrow mt-[5px]'>The Right Place For You</h1>
                    </div>

                    <div className='flex flex-col gap-[25px]'>
                        <p className='text-[20px] font-roboto'>At shree salasar textiless, we believe in nurturing talent and fostering innovation. Join us and be a part of an environment where your skills are valued, and your growth is a priority.</p>

                        <p className='text-[20px] font-roboto'>If you are passionate about creating meaningful solutions, committed to excellence, and driven to make a difference, we invite you to embark on an exciting career journey with us.</p>
                    </div>
                </div>

                <div className='text-center m-auto md:w-[50%] w-[100%] careersapply'>
                    <p className='text-[#4a4a4a] sm:text-[23px] text-[20px]'>What Are You Looking For In Your Next Job?</p>
                    <h1 className='xl:text-[55px] sm:text-[33px] text-[25px] font-medium font-roboto'>Apply Now For Success</h1>
                    <div className='my-[20px]'>
                        <Link to="/contact" className='inline-block bg-black text-white px-[25px] py-[10px] rounded-[5px]'>APPLY NOW</Link>
                    </div>

                    <Link  to="mailto:Info@dagagroups.com" className='sm:text-[20px] text-[16px] font-roboto'>
                        Mail Us At <span>info@dagagroups.com</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Careers;
