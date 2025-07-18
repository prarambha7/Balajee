// src/pages/ContactPage.jsx
import React from 'react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
