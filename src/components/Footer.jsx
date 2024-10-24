import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMarker } from "react-icons/fa6";
import Logo from "../assets/logo/logo6.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-8 text-primary">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Fashion School Details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <img src={Logo} alt="Fashion School Logo" className="max-w-[100px] " />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +254 798148395
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMarker /> Nairobi, Kenya
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Explore</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Courses</li>
                  <li>About Us</li>
                  <li>Admissions</li>
                  <li>Gallery</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Testimonials</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>

          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          &copy; 2024 Fashion Design School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
