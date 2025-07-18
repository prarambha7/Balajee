
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-2">Balajee Home Appliances</h4>
          <p>Delivering trusted home appliances across Nepal with top-notch service and variety.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
          <Link  to="/"> <li><button className="hover:text-red-400">Home</button></li></Link> 
           <Link  to="/products"> <li><button  className="hover:text-red-400">Products</button></li></Link>
           <Link  to="/about"><li><button  className="hover:text-red-400">About Us</button></li></Link>
            <Link  to="/contact"><li><button  className="hover:text-red-400">Contact</button></li></Link>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Contact Info</h4>
          <p>Address: Rato Pul, Kathmandu, Nepal</p>
          <p>Phone: +977-9800000000</p>
          <p>Email: info@balajeeappliances.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Balajee Home Appliances. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
