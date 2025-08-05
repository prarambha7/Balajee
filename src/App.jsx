import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'; 
import GetQuotePage from './pages/GetQuotePage';




const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/getquote" element={<GetQuotePage/>}/>
        <Route path="*" element={<div className="text-center mt-20 text-2xl">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
