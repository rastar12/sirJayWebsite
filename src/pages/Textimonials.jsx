import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Logo from '../assets/logo.jpeg'

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Eugene Chanzu",
    role: "Fashion Design Student",
    feedback: "The fashion design program helped me develop my skills and build my confidence. I feel prepared to enter the industry!",
    duration: "2023",
    logo: Logo, 
  },
  {
    id: 2,
    name: "Eugene Chanzu",
    role: "Client",
    feedback: "The designs were incredible! The team understood my vision perfectly and brought it to life.",
    duration: "2023",
    logo: Logo, // Replace with the actual path to the image/logo
  },
  {
    id: 3,
    name: "Eugene Chanzu",
    role: "Fashion Design Student",
    feedback: "I loved every moment of the course! The instructors are passionate and really care about student success.",
    duration: "2023",
    logo: Logo,
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className='testimonials bg-white w-screen text-black pt-4 pt-16 overflow-x-hidden' id='testimonials'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light text-primary'>WHAT PEOPLE ARE SAYING.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Testimonials.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {testimonials.map((testimonial) => (
          <VerticalTimelineElement
            key={testimonial.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f8f8f8", color: "#000", border: "1px solid #d1a10d" }}
            contentArrowStyle={{ borderRight: "7px solid  #f8f8f8" }}
            date={testimonial.duration}
            iconStyle={{ background: '#d1a10d', color: '#fff' }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={testimonial.logo}
                  alt={testimonial.name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
          >
            <div>
              <h3 className='text-black text-[24px] font-bold'>{testimonial.name}</h3>
              <p className='text-gold text-[16px] font-semibold' style={{ margin: 0 }}>
                {testimonial.role}
              </p>
              <p className='text-black text-[16px]'>{testimonial.feedback}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
     
    </div>
  )
}

export default Testimonials;
