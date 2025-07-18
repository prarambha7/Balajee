import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
