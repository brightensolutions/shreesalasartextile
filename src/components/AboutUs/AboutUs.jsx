import React, { useEffect } from "react";
import HomeContactUs from "../HomeContactUs/HomeContactUs";
import { aboutimg, aboutus } from "../Images/Images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // Intersection observer to trigger animations when in view
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: chooseUsRef, inView: chooseUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="relative md:h-[600px] h-[250px]">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutus})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            filter: "blur(2px)",
          }}
        />
        <div className="h-full w-full bg-black bg-opacity-60 flex items-center justify-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-[55px] font-tomorrow font-bold"
          >
            ABOUT US
          </motion.h2>
        </div>
      </div>

      <div className="lg:max-w-[1440px] px-[20px] m-auto py-[80px] overflow-hidden">
        <div className="text-center sm:w-[70%] w-[100%] m-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-tomorrow sm:text-[45px] text-[30px] font-bold pb-[10px] border-b-[1px] inline-block"
          >
            Welcome to Shree Salasar Textiles.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-tomorrow text-[18px] font-medium mt-[35px]"
          >
            SPIRIT OF FABRICS
          </motion.p>
        </div>

        <div className="mt-[80px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[55px] text-center items-center bg-black sm:p-[50px] p-[20px] rounded-lg box_shadow_black">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-[5px] visioncard lg:h-[200px] md:h-[300px] items-center justify-center"
          >
            <h1 className="text-[22px] font-tomorrow font-semibold text-white">
              Our Mission
            </h1>
            <p className="text-[16px] font-roboto text-[#a9a9a9]">
              To be the real inspiration to garment manufacturers by offering
              ahead of time materials with price effective solution.
            </p>
          </motion.div>

          <motion.div
            ref={visionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-[5px] visioncard lg:h-[200px] md:h-[300px] items-center justify-center"
          >
            <h1 className="text-[22px] font-tomorrow font-semibold text-white">
              VISION
            </h1>
            <p className="text-[16px] font-roboto text-[#a9a9a9]">
              We are committed to transform ourselves into a renowned textile
              company across the globe by establishing strong network of
              clients...
            </p>
          </motion.div>

          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-[5px] visioncard lg:h-[200px] md:h-[300px] items-center justify-center"
          >
            <h1 className="text-[22px] font-tomorrow font-semibold text-white">
              Core Values
            </h1>
            <p className="text-[16px] font-roboto text-[#a9a9a9]">
              Life long learning, Ahead of time innovation, Team work, Committed
              for work
            </p>
          </motion.div>
        </div>

        <div className="relative my-[60px] h-[220px] md:h-[600px] ">
          <LazyLoadImage
            src={aboutimg}
            alt="Active Wear"
            effect="blur"
            className="md:h-[600px] w-full object-cover"
            style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
          />
          <div className="md:h-[600px] bg-black bg-opacity-30"></div>
        </div>

        <div ref={chooseUsRef}>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={chooseUsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block"
            >
              Why Choose Us
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={chooseUsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-[50px] border-2 border-black rounded-lg"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 justify-center">
              <div className="bg-black p-[50px] lg:h-[230px] md:h-[300px] flex justify-center flex-col">
                <h1 className="text-white font-tomorrow sm:text-[35px] text-[25px] font-medium mb-[8px]">
                  OUR ATTITUDE
                </h1>
                <p className="text-white text-[18px] font-roboto">
                  We are a team of down-to-earth professionals who are not
                  interested in making a quick buck.
                </p>
              </div>

              <div className="p-[50px] lg:h-[230px] md:h-[300px]  flex justify-center flex-col bg-[#0000000f]">
                <h1 className="font-tomorrow sm:text-[35px] text-[25px] font-medium mb-[8px]">
                  OUR APPROACH
                </h1>
                <p className="text-[18px] font-roboto">
                  We encourage each other to achieve excellence in all
                  endeavours and aren”t satisfied until projects meet our own
                  personal high standards.
                </p>
              </div>

              <div className="p-[50px] lg:h-[230px] md:h-[300px]  flex justify-center flex-col bg-[#0000000f]">
                <h1 className=" font-tomorrow sm:text-[35px] text-[25px] font-medium mb-[8px]">
                  EXPERIENCE
                </h1>
                <p className="text-[18px] font-roboto">
                  We have provided top quality fabrics for many years and this
                  gives us the experience that you probably looking for.
                </p>
              </div>

              <div className="bg-black p-[50px] lg:h-[230px] md:h-[450px]  flex justify-center flex-col">
                <h1 className="text-white  font-tomorrow sm:text-[35px] text-[25px] font-medium mb-[8px]">
                  RELIABLE PRODUCTS & SERVICES
                </h1>
                <p className="text-white text-[18px] font-roboto">
                  We sell reliable and quality products for your fabric needs.
                  Tomorrow, we will be here for you. We are not a
                  flash-in-the-pan company. Our history speaks for itself.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div>
        <HomeContactUs />
      </div>
    </div>
  );
};

export default AboutUs;
