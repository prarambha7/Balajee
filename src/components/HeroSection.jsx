import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center text-center px-4">
     <img 
  src="./src/assets/lp.jpg" 
  alt="Modern kitchen appliances" 
  className="absolute inset-0 w-full h-full object-cover opacity-30" 
/>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Quality Appliances for Every Home</h1>
        <p className="text-lg md:text-xl mb-6">Discover a wide range of products that combine efficiency, design, and innovation.</p>
        <Link to="/products">
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold transition-colors cursor-pointer">
      
          Explore Now
          
        </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
