import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options (optional)
  }, []);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const imageHoverVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <section className="py-8 bg-base-100 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4 mt-10">Our Featured Products</h2>
        <p className="mb-10">
          <button className="btn loading">
            Comming Soon in Earlier Years.....
          </button>
        </p>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex flex-wrap justify-center">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={imageHoverVariants}
              whileHover="hover"
              className="m-4 flex flex-col items-center">
              <motion.img
                src={product.src}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                className="w-48 h-48 rounded-full"
              />
              <span className="text-center text-success mt-2">
                {product.name}
              </span>
              <span className="text-center mt-2">{product.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
