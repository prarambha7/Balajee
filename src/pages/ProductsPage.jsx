// src/pages/ProductsPage.jsx
import React from 'react';
import Header from '../components/Header';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
