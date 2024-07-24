import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = ({ urlActual }) => {
  // Accede a la URL a través de los props
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const esUrlActiva = (ruta) => {
    // Asegúrate de normalizar tanto la URL actual como la ruta antes de comparar
    const urlFormateada = urlActual.endsWith("/")
      ? urlActual.slice(0, -1)
      : urlActual; // Elimina el slash final si existe
    const rutaFormateada = ruta.endsWith("/") ? ruta.slice(0, -1) : ruta; // Elimina el slash final si existe
    return urlFormateada === window.location.origin + rutaFormateada;
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className=" top-0 left-0 w-full bg-white shadow-md z-50 border border-black fixed"
    >
      {" "}
      <nav className="flex  justify-between items-center px-4">
        <div className="flex gap-8 items-center">
          <a href="/">
            <img src="/logo.jpg" className="w-10 h-10" alt="LOGO" />
          </a>
          <a>Numero telefonico</a>
        </div>
        <button onClick={toggleMenu} className="text-xl font-bold p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
              onClick={toggleMenu}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-20 flex flex-row"
            >
              <div className="flex py-8 px-4">
                <div>
                  <ul className="space-y-8">
                    <li
                      className={`text-2xl ${
                        esUrlActiva("/")
                          ? "text-amber-600"
                          : "hover:text-amber-600"
                      } cursor-pointer`}
                    >
                      <a href="/">Home</a>
                    </li>
                    <li
                      className={`text-2xl ${
                        esUrlActiva("/services")
                          ? "text-amber-600"
                          : "hover:text-amber-600"
                      } cursor-pointer`}
                    >
                      <a href="/project">Projects</a>
                    </li>
                    <li
                      className={`text-2xl ${
                        esUrlActiva("/contact")
                          ? "text-amber-600"
                          : "hover:text-amber-600"
                      } cursor-pointer`}
                    >
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 py-8 px-8">
                  <button onClick={toggleMenu} className="text-3xl">
                    X
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
