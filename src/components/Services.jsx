import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Services({ cards }) {
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const [direction, setDirection] = useState(0); // 0 para inicial, 1 para siguiente, -1 para anterior

  const nextCard = () => {
    setVisibleCards(visibleCards.map((index) => (index + 3) % cards.length));
    setDirection(1); // Establece la dirección a siguiente
  };

  const prevCard = () => {
    setVisibleCards(
      visibleCards.map((index) => (index - 3 + cards.length) % cards.length)
    );
    setDirection(-1); // Establece la dirección a anterior
  };

  return (
    <div className="flex flex-col items-center md:w-[80%] mx-auto justify-center md:h-screen">
      <div className="text-start w-full px-14">
        <h1 className="text-4xl font-bold mb-8">Our Expertnesses</h1>
      </div>{" "}
      <div className="flex justify-center items-center flex-col md:flex-row">
        <AnimatePresence>
          {visibleCards.map((index) => (
            <motion.div
              key={cards[index].title}
              initial={{ opacity: 0, x: direction === 1 ? 300 : -300 }} // Ajusta basado en la dirección
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -300 : 300 }} // Ajusta basado en la dirección
              transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 m-2"
            >
              <img
                src={cards[index].image}
                alt={cards[index].title}
                className="md:w-[500px] md:h-[600px] object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-2xl font-bold">{cards[index].title}</h2>
              <p className="text-lg text-center">{cards[index].description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="absolute flex justify-between w-full px-4">
        <button onClick={nextCard} className="mt-4">
          Anterior
        </button>
        <button onClick={prevCard} className="mt-4">
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Services;
