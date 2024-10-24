import React from "react";

const faqData = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a variety of courses including fashion design, pattern making, textile design, and garment construction.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Our courses vary in length, from 6-month certificate programs to 2-year diploma programs.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer both online and in-person classes to cater to different learning preferences.",
  },
  {
    question: "What is the admission process?",
    answer:
      "You can apply online through our website or visit the school in person. Our admissions team will guide you through the process.",
  },
];

const FAQ = () => {
  const [active, setActive] = React.useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8 text-gold">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gold/50">
          <div
            className="flex justify-between items-center cursor-pointer py-4 text-gold"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold">{item.question}</h3>
            <span className="text-gold">{active === index ? "-" : "+"}</span>
          </div>

          {active === index && (
            <p className="text-gray-400 mt-2">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
