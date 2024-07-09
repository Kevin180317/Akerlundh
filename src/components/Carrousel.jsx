import React, { useState, useEffect } from "react";

function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../../public/MUEBLERIA_PROYECTOS_TERMINADOS_5.jpg",
    "../../public/MUEBLERIA_PROYECTOS_TERMINADOS_6.jpg",
    "../../public/MUEBLERIA_PROYECTOS_TERMINADOS_7.jpg",
  ];
  const textos = ["hola mundo", "bienvenidos", "a nuestro carrousel"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000); // Cambia imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <img
        className="object-cover w-full h-full object-center rounded-lg shadow-lg border-4"
        src={images[currentImage]}
        alt=""
      />
      <h1 className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center z-10 text-7xl text-white uppercase bg-[#4f5d69] bg-opacity-50">
        {textos[currentImage]}
      </h1>
    </div>
  );
}

export default Carrousel;
