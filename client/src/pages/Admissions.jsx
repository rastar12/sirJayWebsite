import React from "react";
import { motion } from "framer-motion";
import picture5 from "../assets/picture1.jpg"
import { Link } from "react-router-dom";

const AdmissionsPage = () => {
  return (
    <div className="admissions-page bg-white text-gold">
      {/* Hero Section with Background Image */}
      <section className="hero h-64 flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${picture5})` }}>
        <motion.div
          className="absolute text-center bg-white bg-opacity-80 p-4 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-extrabold text-black">Admissions</h1>
          <p className="text-md mt-2 text-black">Join us to start your journey in fashion education!</p>
        </motion.div>
      </section>

      {/* Admissions Information Section */}
      <section className="admissions-info py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
          <p className="text-lg mb-4">Follow these simple steps to apply:</p>
          <ul className="list-disc list-inside mb-8">
            <li>1. Fill out the online application form.</li>
            <li>2. Submit the required documents.</li>
            <li>4. Await acceptance notification.</li>
          </ul>
          <Link to={"/Courses"}>
          <motion.button
            className="bg-primary text-black px-6 py-2 font-semibold uppercase mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Start Your Application
          </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
