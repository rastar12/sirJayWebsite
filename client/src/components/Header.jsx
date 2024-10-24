import React, { useState } from "react";
import Logo from "../assets/logo/logo8.png"
import { MdMenu, MdClose } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Courses",
    link: "/Courses",
  },
  {
    id: 3,
    title: "testimonials",
    link: "/Testimonials",
  },
  {
    id: 4,
    title: "About",
    link: "/About",
  },
  {
    id: 5,
    title: "Admissions",
    link: "/Admissions",

  },
  {
    id: 5,
    title: "Contact Us",
    link: "/ContactUs",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-primary bg-[#171616] opacity-80 py-3 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="Logo" className="max-w-[100px] invert" />
          <p className="font-extrabold text-2xl">Sir Jay Fashion School</p>
        </div>
        {/* Menu section for desktop */}

        
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                  <Link to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  
                  </Link>

                
              </li>
            ))}
          </ul>
        </div>
        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-4xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-primary text-black py-4"
        >
          <ul className="space-y-4 text-center">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="block text-base font-semibold">
                  {item.title}
                </a>
              </li>
            ))}

          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
