// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Balajee Home Appliances</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Balajee, we believe in enhancing everyday living through reliable, innovative, and affordable home appliances. With over 10 years of experience, we’ve built a reputation for delivering quality products and excellent service throughout Nepal.
        </p>
        <p className="text-lg text-gray-700">
          Whether it’s kitchen essentials or comfort appliances, we ensure that our products meet the evolving needs of our customers. Join the thousands of happy families who trust Balajee.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
