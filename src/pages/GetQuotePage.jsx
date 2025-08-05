import React from 'react';
import Header from '../components/Header';
import GetQuoteComponent from '../components/GetQuote';
import Footer from '../components/Footer';

const GetQuotePage = () => {
  return (
    <div>
      <Header />
      <main>
        <GetQuoteComponent
         />
      </main>
      <Footer />
    </div>
  );
};

export default GetQuotePage;
