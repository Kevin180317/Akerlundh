import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Services({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const visibleCards = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleCards.push(cards[(currentIndex + i) % cards.length]);
  }

  return (
    <div className="md:h-screen md:w-[80%] mx-auto px-6">
      <div className="flex md:justify-between py-8">
        <h1 className="text-4xl font-bold mb-8">Our Expertnesses</h1>
        <a
          href="/services"
          className="text-4xl hidden md:block font-bold mb-8 hover:text-amber-500 hover:underline transition-colors duration-300
        "
        >
          All of our services
        </a>
      </div>
      <div className="flex justify-between items-center md:gap-8">
        <AnimatePresence mode="popLayout">
          {visibleCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="flex md:justify-between items-center flex-col border border-black shadow-gray-400 shadow-xl rounded-lg mb-4"
            >
              <div className="relative group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="
              w-96
              h-[450px]
              md:h-[600px]
              object-cover

              
              "
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                >
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                  <p className="mt-2">{card.description}</p>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-lg mt-4">
                    <a href={card.link} className="text-white">
                      Learn More
                    </a>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="block md:hidden mb-8">
        <div className="flex justify-center"></div>
        {Array(Math.ceil(cards.length / visibleCount))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-lg ${
                currentIndex === index
                  ? "bg-amber-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
      <a
        href="/services"
        className="text-4xl md:hidden block font-bold mb-8 hover:text-amber-500 hover:underline transition-colors duration-300
        "
      >
        All of our services
      </a>
    </div>
  );
}

export default Services;
