import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import FAQ from "../components/Faq";
import Contact from "../components/Contact"; // Ensure you import the Contact component

const courses = [
  {
    id: 1,
    title: "Fashion Design",
    description: "Learn the art of fashion design, from concept to creation.",
    icon: faPaintBrush,
  },
  {
    id: 2,
    title: "Fashion Illustration",
    description: "Master the techniques of fashion illustration to bring your designs to life.",
    icon: faPaintBrush,
  },
  {
    id: 3,
    title: "Pattern Making",
    description: "Understand the fundamentals of pattern making and garment construction.",
    icon: faDraftingCompass,
  },
  // Add more courses as needed
];

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyNow = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white text-gold py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Courses Being Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 border border-gold rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={course.icon} className="text-gold text-3xl mr-3" />
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                className="bg-primary text-black px-4 py-2 rounded hover:bg-opacity-80 font-semibold transition duration-300"
                onClick={handleApplyNow} // Trigger modal opening
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <Contact closeModal={closeModal} /> {/* Pass closeModal function as a prop */}
            <button
              onClick={closeModal}
              className="mt-4 bg-primary text-black px-4 py-2 rounded hover:bg-opacity-80 font-semibold transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <FAQ />
    </div>
  );
}
