import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Refrigerators',
      image: './public/refff.jpg',
    },
    {
      name: 'Washing Machines',
      image: './public/wm.jpg',
    },
    {
      name: 'Microwaves',
      image: './public/mv.jpg',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
        <p className="text-gray-700 mb-10 text-lg">
          We provide a wide range of home appliances to fit every need and budget.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-45 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">
                High-quality {product.name.toLowerCase()} for every household. Efficient, durable, and stylish.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Browse Our Catalogue</h2>
          <p className="mb-4">
            Click below to explore our full list of products with specifications and pricing.
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold"
          >
            View Catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;