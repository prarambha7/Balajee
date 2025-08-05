import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
    
          <div className="flex items-center space-x-2">
            <Link to="/">      
              <img 
              src="./src/assets/Product/balajeelogo.png" 
              alt="Logo" 
              className="h-8 w-8 object-contain" 
              />
            </Link> 
  <span className="text-xl font-bold">Balajee Home Appliances</span>
  </div>
  </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-red-500 transition-colors">Products</Link>
          <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          <Link to="/getquote"><button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors cursor-pointer">Get a Quote</button></Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 hover:text-red-500">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 hover:text-red-500">Products</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 hover:text-red-500">About Us</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 hover:text-red-500">Contact</Link>
          <Link to="/getquote" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 hover:text-red-500">Get Quote</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
