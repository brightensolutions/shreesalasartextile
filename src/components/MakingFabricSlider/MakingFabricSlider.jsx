import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { slider1, slider2, slider3, slider4, slider5 } from "../Images/Images"

const sliderData = [
  { id: 1, image: slider1, alt: "Fabric Slider 1" },
  { id: 2, image: slider2, alt: "Fabric Slider 2" },
  { id: 3, image: slider3, alt: "Fabric Slider 3" },
  { id: 4, image: slider4, alt: "Fabric Slider 4" },
  { id: 5, image: slider5, alt: "Fabric Slider 5" },
]

const MakingFabricSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  const animationVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const direction = 1

  return (
    <div className="relative w-full overflow-hidden bg-[#1F1F1F]">
      {/* Responsive height container */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {" "}
        {/* 16:9 Aspect Ratio */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <LazyLoadImage
                src={sliderData[currentSlide].image}
                alt={sliderData[currentSlide].alt}
                effect="blur"
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Optional: Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default MakingFabricSlider

