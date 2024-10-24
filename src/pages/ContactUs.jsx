import React from "react";

export default function Contact() {
  const Contacts = [
    { id: 1, title: "Address", text: "123 Main Street, Nairobi" },
    { id: 2, title: "Phone", text: "+254798148395" },
    { id: 3, title: "Email", text: "eugenechanzu@gmail.com" },
  ];

  function submitHandler(e) {
    e.preventDefault();
    // Handle form submission logic
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            Contact Us
          </h2>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-gray-400 mx-auto">
            Are you ready to start your journey in fashion design? Contact us for more information on our courses, enrollment process, or any other queries. We’re here to help!
          </p>
        </div>

        {/* Container for Contact details and Contact Form */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-6">
            {Contacts.map((contact) => (
              <div className="mt-6" key={contact.id}>
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-gray-400">{contact.text}</div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 sm:w-[30rem] w-full px-6 text-center py-6 shadow-lg shadow-black">
            <h3 className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
              Contact Form
            </h3>
            <form onSubmit={submitHandler}>
              <div className="flex items-center border-b border-gray-300 py-2 mb-8">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-primary font-bold  mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2 mb-8">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-primary font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2 mb-8">
                <input
                  type="email"
                  className="appearance-none bg-transparent border-none w-full text-primary font-bold  mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2 mb-8">
                <textarea
                  className="appearance-none bg-transparent border-none w-full text-primary font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Message"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-10 px-8 py-4 bg-primary text-black  font-semibold uppercase text-sm cursor-pointer shadow-lg shadow-gold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
