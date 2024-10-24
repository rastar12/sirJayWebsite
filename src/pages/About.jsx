import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faHeart } from '@fortawesome/free-solid-svg-icons';
import picture1 from "../assets/picture1.jpg"
import logo from "../assets/logo/logo5.png"
const AboutPage = () => {
  return (
    <div className="about-page bg-white text-gold">
      {/* Hero Section with Logo */}
      <section className="hero h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${picture1})` }}>
        <motion.div
          className="absolute text-center bg-white bg-opacity-80 p-8 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo Placeholder */}
          <div className="mb-4">
            <img src={logo} alt="Sir Jay Logo" className="w-32 mx-auto" />
          </div>
          <h1 className="text-5xl font-extrabold text-black">About Us</h1>
          <p className="text-lg mt-4 text-black">Discover our mission, vision, and values.</p>
        </motion.div>
      </section>

      <section className="mission-vision py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg mb-8">We aim to inspire and educate the next generation of fashion leaders.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="border p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">Mission</h3>
              <p>To provide high-quality education and foster creativity in a supportive environment.</p>
            </motion.div>
            <motion.div
              className="border p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">Vision</h3>
              <p>To be a leader in fashion education, producing skilled and innovative professionals.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="our-values py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg mb-8">At Sir Jay, we uphold the highest standards of excellence.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="border p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faHeart} className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-bold">Passion</h3>
              <p>We are passionate about fashion and education.</p>
            </motion.div>
            <motion.div
              className="border p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faHistory} className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-bold">Integrity</h3>
              <p>We operate with honesty and transparency.</p>
            </motion.div>
            {/* Add more values as needed */}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
