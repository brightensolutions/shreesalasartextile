import React from "react";
import { Link } from "react-router-dom";
import { aboutusimg } from "../Images/Images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        ease: "easeOut",
      },
    },
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
        ease: "easeOut",
        delay: 0.3, // Still has the delay for staggered effect
      },
    },
  };

  return (
    <div className="sm:py-[70px] py-[30px]" ref={ref}>
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div className="flex md:flex-row flex-col items-center justify-center lg:w-[80%] w-[100%] m-auto gap-[25px]">
          {/* Animated text section */}
          <motion.div
            className="lg:w-[50%] w-[100%]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h1 className="font-tomorrow text-[45px] font-bold pb-[10px]">
              Welcome to Shree Salasar Textiles.
            </h1>
            <p className="font-tomorrow text-[18px] font-medium">
              SPIRIT OF FABRICS
            </p>
            <div className="mt-[15px] flex flex-col gap-y-[10px]">
              <p className="font-roboto font-normal text-[18px] leading-[30px]">
                We are wholesalers, manufacturers, exporter of fabrics.
              </p>
              <p className="font-roboto font-normal text-[18px] leading-[30px]">
                At Shree Salasar Textiles, We perform in unison by following our
                values and ethical guidelines code of conduct as a source of
                guidance and inspiration, which enable us to achieve our vision.
              </p>
            </div>

            <Link className="inline-block mt-[15px] bg-black py-[10px] px-[30px] rounded-lg font-semibold font-tomorrow text-white">
              Read More{"/about"}
              <span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </Link>
          </motion.div>

          {/* Animated image section */}
          <motion.div
            className="lg:w-[50%] w-[100%] bg-slate-500"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img src={aboutusimg} alt="about us images" className="w-[100%]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToDaga;
