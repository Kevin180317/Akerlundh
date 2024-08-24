import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = ({ urlActual }) => {
  // Accede a la URL a través de los props
  let date = new Date().getFullYear();
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
      className=" top-0 left-0 w-full bg-white shadow-md z-50  fixed"
    >
      {" "}
      <nav className="flex justify-between items-center px-4">
        <div className="flex gap-8 items-center">
          <a href="/">
            <img src="/logo.png" className="w-10 h-10" alt="LOGO" />
          </a>
          <h1 className="hover:text-yellow-500 text-2xl uppercase">
            Akerlundh
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <a
            className="text-xl font-semibold
          hover:text-amber-600 cursor-pointer
          "
            href="https://wa.me/+18583167656"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>{" "}
          </a>
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
        </div>
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
              className="fixed top-0 right-0 md:h-full h-screen md:w-96 bg-white shadow-xl z-20 flex flex-row"
            >
              <nav className="mb-8 p-16">
                <ul className="flex flex-col space-y-12">
                  <li
                    className={`text-4xl ${
                      esUrlActiva("/")
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    } cursor-pointer`}
                  >
                    <a href="/">Home</a>
                  </li>
                  <li
                    className={`text-4xl ${
                      esUrlActiva("/project")
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    } cursor-pointer`}
                  >
                    <a href="/project">Projects</a>
                  </li>
                  <li
                    className={`text-4xl ${
                      esUrlActiva("/services")
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    } cursor-pointer`}
                  >
                    <a href="/services">Services</a>
                  </li>
                  <li
                    className={`text-4xl ${
                      esUrlActiva("/about")
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    } cursor-pointer`}
                  >
                    <a href="/about">About</a>
                  </li>
                  <li
                    className={`text-4xl ${
                      esUrlActiva("/contact")
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    } cursor-pointer`}
                  >
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <div className="py-24">
                  <a
                    href="https://wa.me/+18583167656"
                    className="font-bold text-xl mb-4 hover:text-amber-600 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +1 (858) 316-7656{" "}
                  </a>
                  <a
                    href="mailto:hfcustomdesign@gmail.com?subject=Consulta&body=Hola, me gustaría obtener más información."
                    className="font-bold text-xl mb-4 hover:text-amber-600 cursor-pointer"
                  >
                    hfcustomdesign@gmail.com{" "}
                  </a>
                  <p className="font-bold text-xl mb-4 hover:text-amber-600 cursor-pointer">
                    San Diego, California
                  </p>
                </div>
                <div className="absolute md:bottom-10">
                  <p className="text-2xl text-gray-400">
                    © {date}{" "}
                    <a
                      href="/"
                      className="text-black font-bold hover:text-amber-600 hover:underline"
                    >
                      Akerlundh.
                    </a>{" "}
                    All rights reserved
                  </p>
                </div>
              </nav>
              <div className="absolute right-0 top-0">
                <button onClick={toggleMenu} className="p-4">
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
                    class="icon icon-tabler icons-tabler-outline icon-tabler-x hover:text-amber-600"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
