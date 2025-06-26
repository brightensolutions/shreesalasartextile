import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  category1,
  category2,
  category3,
  category4,
  category5,
  ourmostpopuproduct1,
  ourmostpopuproduct2,
  ourmostpopuproduct3,
  ourmostpopuproduct4,
} from "../Images/Images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const products = [
  {
    id: 1,
    title: "Sportswear Fabrics",
    image: category1,
  },
  {
    id: 2,
    title: "Comfort Wear Fabrics",
    image: category2,
  },
  {
    id: 3,
    title: "Knitted Jacquard",
    image: category3,
  },
  {
    id: 4,
    title: "Woven Fabrics",
    image: category4,
  },
  {
    id: 5,
    title: "T-Shirt",
    image: category5,
  },
];

const OurProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="lg:max-w-[1440px] px-[20px] m-auto py-[50px]">
        <div className="text-center">
          <h1 className="font-tomorrow text-[45px] font-bold pb-[10px] border-b-[1px] inline-block">
            Our Products
          </h1>
          <p className="font-roboto text-[15px] text-center max-w-[800px] m-auto my-[10px]">
            We follow the principle of “1 Inch Wide, 1 Feet Deep”, which helps
            us focus and become the best in the work we do. We have a wide range
            of fabrics in the following categories:
          </p>
        </div>

        <div className="mt-[50px]">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[25px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: product.id * 0.2 }}
      className="border-[1px] rounded-sm flex flex-col hover:shadow-lg hover:scale-[1.05] transition-transform duration-300"
    >
      <div
        className="bg-slate-400 h-[500px] bg-cover bg-center rounded-t-sm"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="p-[10px] flex flex-col justify-between bg-slate-200 h-[100px]">
        <h1 className="text-[14px] font-tomorrow font-medium">
          {product.title}
        </h1>
        <Link className="bg-black text-white inline-block text-center p-[5px] mt-[10px]">
          Enquire Now{" "}
          <span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default OurProducts;
