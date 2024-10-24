import React, { useState } from "react";

export default function Contact({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to API)
    console.log("Form submitted:", formData);
    // Close the modal after submission
    closeModal();
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="space-y-4">
        {/* Name Input */}
        <div className="flex flex-col">
          <label className="text-black mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent border-b border-primary w-full py-2 px-3 text-black focus:outline-none"
            required
          />
        </div>


        {/* Phone Input */}
        <div className="flex flex-col">
          <label className="text-black mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent border-b border-primary w-full py-2 px-3 text-black focus:outline-none"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label className="text-black mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b border-primary w-full py-2 px-3 text-black focus:outline-none"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col">
          <label className="text-black mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-b border-primary w-full py-2 px-3 text-black focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-black px-6 py-2 rounded hover:bg-opacity-80 font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
