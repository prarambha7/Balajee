// src/pages/AboutUsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">

  </div>


        
        <div className="relative max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  <span className="text-white">About</span>{' '}
  <span className="text-red-600">Us</span>
</h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transforming homes across Nepal with quality appliances and exceptional service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 px-6 bg-gray-50">
        {/* Company Story */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to <span className="font-semibold text-gray-800">Balajee Home Appliances</span>, 
                a leading provider of quality home appliances in Nepal. Our mission is to bring reliable, 
                innovative, and affordable solutions to your household needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong presence in the market for over a decade, we've been committed to 
                offering exceptional customer service, top-rated appliances, and a dedication to 
                sustainable practices.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br bg-gray-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-700 leading-relaxed">
                  We ensure every appliance meets the highest standards of quality and durability.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our dedicated team provides exceptional support before, during, and after purchase.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We constantly seek innovative solutions to improve your everyday living experience.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We take pride in being a trusted name in the industry, always striving to exceed 
                expectations and improve everyday living through reliable, innovative, and sustainable 
                home appliance solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Product Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;