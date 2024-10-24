
import React from 'react';
import logo from '../assets/logo/logo2.png'; 
import './Loading.css'; // Optional: Custom styles for loading

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
      <p className='text-2xl font-bold text-primary'>Loading...</p>
    </div>
  );
};

export default Loading;
