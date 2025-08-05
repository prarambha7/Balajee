import React, { useState } from 'react';
import { Calculator, Phone, Mail, MapPin, Clock, CheckCircle, Star, Zap, Shield, ArrowRight, User, MessageSquare } from 'lucide-react';

const GetQuoteComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    productCategory: '',
    specificProduct: '',
    budget: '',
    installationNeeded: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        productCategory: '',
        specificProduct: '',
        budget: '',
        installationNeeded: '',
        message: ''
      });
      setCurrentStep(1);
    }, 3000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const productCategories = [
    { value: 'refrigerators', label: 'Refrigerators', icon: '❄️' },
    { value: 'washing-machines', label: 'Washing Machines', icon: '🧺' },
    { value: 'air-conditioners', label: 'Air Conditioners', icon: '🌬️' },
    { value: 'microwaves', label: 'Microwaves', icon: '🍽️' },
    { value: 'tvs', label: 'Smart TVs', icon: '📺' },
    { value: 'water-purifiers', label: 'Water Purifiers', icon: '💧' },
    { value: 'cooking-appliances', label: 'Cooking Appliances', icon: '🍳' },
    { value: 'cleaning-appliances', label: 'Cleaning Appliances', icon: '🧹' },
    { value: 'multiple', label: 'Multiple Products', icon: '🏠' }
  ];

  const budgetRanges = [
    { value: 'under-20k', label: 'Under NPR 20,000' },
    { value: '20k-50k', label: 'NPR 20,000 - 50,000' },
    { value: '50k-100k', label: 'NPR 50,000 - 1,00,000' },
    { value: '100k-200k', label: 'NPR 1,00,000 - 2,00,000' },
    { value: 'above-200k', label: 'Above NPR 2,00,000' },
    { value: 'flexible', label: 'Flexible Budget' }
  ];

  if (isSubmitted) {
    return (
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Quote Request Submitted!</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Thank you for your interest! Our team will review your requirements and get back to you 
              within 2 hours with a personalized quote.
            </p>
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-green-800 font-medium text-sm sm:text-base">📞 Need immediate assistance? Call us at +977-9800000000</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Calculator size={14} className="sm:w-4 sm:h-4" />
            Free Quote Service
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Get Your <span className="text-red-600">Custom</span> Quote
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            Tell us about your requirements and get a personalized quote with the best prices, 
            installation options, and warranty details tailored just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-gray-50 p-4 sm:p-6 border-b">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Quote Request Form</h3>
                  <span className="text-xs sm:text-sm text-gray-600">Step {currentStep} of 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <User className="text-red-600" size={20} />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Personal Information</h4>
                      <p className="text-sm sm:text-base text-gray-600">Let's start with your basic details</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base"
                          placeholder="+977-9800000000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Your complete address in Kathmandu"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Product Requirements */}
                {currentStep === 2 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Calculator className="text-red-600" size={20} />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Product Requirements</h4>
                      <p className="text-sm sm:text-base text-gray-600">Tell us what you're looking for</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">Product Category *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                        {productCategories.map((category) => (
                          <button
                            key={category.value}
                            type="button"
                            onClick={() => setFormData({...formData, productCategory: category.value})}
                            className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1 sm:gap-2 ${
                              formData.productCategory === category.value
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <span className="text-lg sm:text-2xl">{category.icon}</span>
                            <span className="text-xs sm:text-sm font-medium text-center leading-tight">{category.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specific Product/Model</label>
                      <input
                        type="text"
                        name="specificProduct"
                        value={formData.specificProduct}
                        onChange={handleChange}
                        className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm sm:text-base"
                        placeholder="e.g., Samsung 253L Double Door Refrigerator"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">Budget Range</label>
                      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                        {budgetRanges.map((budget) => (
                          <button
                            key={budget.value}
                            type="button"
                            onClick={() => setFormData({...formData, budget: budget.value})}
                            className={`p-3 rounded-lg border-2 transition-all duration-200 text-left text-sm sm:text-base ${
                              formData.budget === budget.value
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {budget.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">Installation Required?</label>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        {['yes', 'no', 'not-sure'].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData({...formData, installationNeeded: option})}
                            className={`px-4 sm:px-6 py-3 rounded-lg border-2 transition-all duration-200 capitalize text-sm sm:text-base ${
                              formData.installationNeeded === option
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {option === 'not-sure' ? 'Not Sure' : option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <MessageSquare className="text-red-600" size={20} />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Additional Details</h4>
                      <p className="text-sm sm:text-base text-gray-600">Any specific requirements or questions?</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 resize-none text-sm sm:text-base"
                        placeholder="Tell us about any specific requirements, preferred brands, delivery timeline, or any questions you have..."
                      ></textarea>
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <h5 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Quote Summary:</h5>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <p><span className="font-medium">Name:</span> {formData.name || 'Not provided'}</p>
                        <p><span className="font-medium">Product Category:</span> {
                          productCategories.find(cat => cat.value === formData.productCategory)?.label || 'Not selected'
                        }</p>
                        <p><span className="font-medium">Budget:</span> {
                          budgetRanges.find(budget => budget.value === formData.budget)?.label || 'Not specified'
                        }</p>
                        <p><span className="font-medium">Installation:</span> {formData.installationNeeded || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 gap-3 sm:gap-0">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base order-2 sm:order-1 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>

                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      className="px-4 sm:px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base order-1 sm:order-2"
                    >
                      Next Step
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-6 sm:px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base order-1 sm:order-2"
                    >
                      <Calculator size={16} />
                      Get My Quote
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Why Choose Us */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Get a Quote?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Best Price Guarantee</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Get the most competitive prices in the market</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="text-red-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Quick Response</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Get your personalized quote within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Complete Package</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Includes product, installation & warranty details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Need Immediate Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-red-200" size={18} />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Call us now</p>
                    <p className="text-red-200 text-sm">+977-9800000000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-red-200" size={18} />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email us</p>
                    <p className="text-red-200 text-xs sm:text-sm break-all">support@balajeeappliances.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-red-200" size={18} />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Business Hours</p>
                    <p className="text-red-200 text-sm">Mon-Sat: 9AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8">
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                "Got an amazing quote for my kitchen appliances. The team was very helpful and the prices were unbeatable!"
              </p>
              <p className="font-medium text-gray-900 text-sm sm:text-base">- Rajesh K., Kathmandu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteComponent;