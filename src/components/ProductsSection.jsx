import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Zap, Shield, Award, ArrowRight, Filter } from 'lucide-react';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Premium Refrigerators',
      category: 'refrigerators',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      price: 'Starting from NPR 45,000',
      features: ['Energy Efficient', 'Smart Cooling', 'Large Capacity'],
      rating: 4.8,
      bestseller: true,
      description: 'Advanced cooling technology with smart features for modern homes.'
    },
    {
      id: 2,
      name: 'Front Load Washing Machines',
      category: 'washing',
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop',
      price: 'Starting from NPR 35,000',
      features: ['Quick Wash', 'Energy Star', 'Silent Operation'],
      rating: 4.7,
      bestseller: false,
      description: 'Efficient washing with gentle care for all fabric types.'
    },
    {
      id: 3,
      name: 'Convection Microwaves',
      category: 'microwaves',
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop',
      price: 'Starting from NPR 15,000',
      features: ['Auto Cook', 'Grill Function', 'Child Lock'],
      rating: 4.6,
      bestseller: false,
      description: 'Multi-function cooking with precise temperature control.'
    },
    {
      id: 4,
      name: 'Split Air Conditioners',
      category: 'cooling',
      image: 'https://images.unsplash.com/photo-1631545806449-c0f5e4bfe8c3?w=400&h=300&fit=crop',
      price: 'Starting from NPR 55,000',
      features: ['Inverter Technology', 'Wi-Fi Control', 'Fast Cooling'],
      rating: 4.9,
      bestseller: true,
      description: 'Smart cooling solutions with energy-efficient inverter technology.'
    },
    {
      id: 5,
      name: 'Induction Cooktops',
      category: 'cooking',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: 'Starting from NPR 8,000',
      features: ['Touch Control', 'Safety Features', 'Fast Heating'],
      rating: 4.5,
      bestseller: false,
      description: 'Modern cooking technology with precise temperature control.'
    },
    {
      id: 6,
      name: 'Water Purifiers',
      category: 'water',
      image: 'https://images.unsplash.com/photo-1563379091919-158d0d20e7ef?w=400&h=300&fit=crop',
      price: 'Starting from NPR 12,000',
      features: ['RO Technology', 'UV Sterilization', 'Smart Indicators'],
      rating: 4.7,
      bestseller: false,
      description: 'Advanced water purification for safe and healthy drinking water.'
    },
    {
      id: 7,
      name: 'Electric Geysers',
      category: 'water',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      price: 'Starting from NPR 18,000',
      features: ['Instant Heating', 'Temperature Control', 'Safety Valve'],
      rating: 4.4,
      bestseller: false,
      description: 'Efficient water heating solutions for comfortable living.'
    },
    {
      id: 8,
      name: 'Smart TVs',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
      price: 'Starting from NPR 25,000',
      features: ['4K Display', 'Smart OS', 'Voice Control'],
      rating: 4.8,
      bestseller: true,
      description: 'Premium entertainment experience with smart connectivity.'
    },
    {
      id: 9,
      name: 'Vacuum Cleaners',
      category: 'cleaning',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      price: 'Starting from NPR 6,000',
      features: ['HEPA Filter', 'Cordless', 'Multi-Surface'],
      rating: 4.3,
      bestseller: false,
      description: 'Powerful cleaning solutions for spotless homes.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏠' },
    { id: 'refrigerators', name: 'Refrigerators', icon: '❄️' },
    { id: 'washing', name: 'Washing', icon: '🧺' },
    { id: 'microwaves', name: 'Microwaves', icon: '🍽️' },
    { id: 'cooling', name: 'Cooling', icon: '🌬️' },
    { id: 'cooking', name: 'Cooking', icon: '🍳' },
    { id: 'water', name: 'Water', icon: '💧' },
    { id: 'electronics', name: 'Electronics', icon: '📺' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award size={16} />
            Premium Quality Appliances
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Product</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of home appliances designed to make your life easier, 
            more comfortable, and more efficient. Quality you can trust, prices you'll love.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter size={20} className="text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🏆 Bestseller
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={20} className="text-gray-600" />
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium flex items-center gap-2 transform hover:scale-105 transition-transform">
                    <ShoppingCart size={18} />
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-red-600">{product.price}</div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                    <ShoppingCart size={16} />
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600">All products come with comprehensive warranty and quality guarantee</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Energy Efficient</h4>
            <p className="text-gray-600">Save on electricity bills with our energy-efficient appliances</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h4>
            <p className="text-gray-600">Professional installation and after-sales service support</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Upgrade Your Home?</h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
              Browse our complete catalogue with detailed specifications, pricing, and exclusive offers. 
              Find the perfect appliances for your home today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                <Eye size={20} />
                View Full Catalogue
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowRight size={20} />
                Visit Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;