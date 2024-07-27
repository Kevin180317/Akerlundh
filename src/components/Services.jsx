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
      <div className="text-start py-8">
        <h1 className="text-4xl font-bold mb-8">Our Expertnesses</h1>
      </div>
      <div className="flex justify-between items-center md:gap-8">
        <button
          className="hidden md:block"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </button>
        <AnimatePresence>
          {visibleCards.map((card, index) => (
            <motion.div
              key={card.title}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index === 1 ? -300 : 300 }}
              transition={{ duration: 0.5 }}
              className="flex md:justify-between items-center h-[500px] w-[400px] mb-8 md:h-[600px] md:w-[400px] flex-col border bg-gray-500 text-white p-4 rounded-lg"
            >
              <img src={card.img} alt={card.title} className="bg-gray-600" />
              <h2 className="text-2xl font-bold mt-4">{card.title}</h2>
              <p className="text-center mt-2">{card.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          className="hidden md:block"
          onClick={() => setCurrentIndex((currentIndex + 1) % cards.length)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
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
    </div>
  );
}

export default Services;
