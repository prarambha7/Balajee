// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-10">
          Have questions or need help with a product? We're here to assist you.
        </p>

        <form className="grid gap-6 md:grid-cols-2 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded w-full md:col-span-2"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded md:col-span-2"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-gray-600">
          <p>Phone: +977-9800000000</p>
          <p>Email: support@balajeeappliances.com</p>
          <p>Address: Rato Pul, Kathmandu , Nepal</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
