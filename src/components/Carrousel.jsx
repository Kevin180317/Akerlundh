import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "../../public/MUEBLERIA_PROYECTOS_TERMINADOS_5.jpg",
    text: "Texto para la primera imagen",
  },
  {
    image: "../../public/MUEBLERIA_PROYECTOS_TERMINADOS_6.jpg",
    text: "Texto para la segunda imagen",
  },
  {
    image: "../../public/MUEBLERIA_PROYECTOS_TERMINADOS_7.jpg",
    text: "Texto para la tercera imagen",
  },
];

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen md:h-screen">
      <img
        src={slides[currentIndex].image}
        alt="Carrousel"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <h1 className="text-white text-2xl md:text-4xl">
          {slides[currentIndex].text}
        </h1>
      </div>
    </div>
  );
};

export default Carrousel;
