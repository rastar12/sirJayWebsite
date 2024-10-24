import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";
import picture4 from "../assets/picture4.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [counter, setCounter] = useState({ courses: 0, students: 0 });

  useEffect(() => {
    const courseInterval = setInterval(() => {
      setCounter(prev => ({ ...prev, courses: prev.courses < 50 ? prev.courses + 1 :300  }));
    }, 200);

    const studentInterval = setInterval(() => {
      setCounter(prev => ({ ...prev, students: prev.students < 300 ? prev.students + 10 : 300 }));
    }, 200);

    return () => {
      clearInterval(courseInterval);
      clearInterval(studentInterval);
    };
  }, []);

  return (
    <div className="landing-page bg-white text-gold">
      {/* Hero Section */}
      <section className="hero h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${picture1})` }}>
        <motion.div
          className="absolute text-center bg-white bg-opacity-70 p-8 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-black">Welcome to Sir Jay Fashion School</h1>
          <p className="text-lg mt-4 text-gray-800">Shape your future with style and creativity at Sir Jay, where artistry meets education.</p>
          <p className="text-md mt-2 text-gray-800">Our esteemed institution offers a diverse range of courses designed to nurture the talents of aspiring designers and fashion enthusiasts.</p>
          <Link to={"/Courses"}>
          <motion.button
            className="bg-primary text-black px-8 py-3 font-semibold uppercase mt-8"
            whileHover={{ scale: 1.1 }}
          >
            Enroll Now
          </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Counter Section */}
      <section className="counter-section py-12 bg-gray-100">
        <div className="container mx-auto flex justify-around">
          <div className="text-center">
            <FontAwesomeIcon icon={faPaintBrush} className="text-primary text-4xl mb-4" />
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {counter.courses}+
            </motion.h2>
            <p className="text-lg">Courses Offered</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faGraduationCap} className="text-primary text-4xl mb-4" />
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {counter.students}+
            </motion.h2>
            <p className="text-lg">Students Enrolled</p>
          </div>
        </div>
      </section>

      {/* Image Section for showcasing school activities */}
      <section className="image-section py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Fashion School</h2>
          <p className="text-lg mb-8">Where creativity meets excellence</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <img src={picture3} alt="Fashion School" className="rounded-lg shadow-lg h-48 object-cover w-full" />
              <p className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-black p-2">Fashion School Activities</p>
            </div>
            <div className="relative">
              <img src={picture2} alt="Design Class" className="rounded-lg shadow-lg h-48 object-cover w-full" />
              <p className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-black p-2">Design Class in Action</p>
            </div>
            <div className="relative">
              <img src={picture4} alt="Student Work" className="rounded-lg shadow-lg h-48 object-cover w-full" />
              <p className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-black p-2">Showcasing Student Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="timeline-section py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Journey</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f5f5f5', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #f5f5f5' }}
            date="2021 - Present"
            iconStyle={{ background: '#f9c74f', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Established Sir Jay Fashion School</h3>
            <p>We began our journey in fashion education, aiming to create future designers and innovators.</p>
          </VerticalTimelineElement>

          {/*  more timeline elements here */}
        </VerticalTimeline>
      </section>


    </div>
  );
}
