import React from 'react';

const Products = () => {
  const products = [
    {
      name: 'Refined Sunflower Oil',
      description: 'Light and healthy oil perfect for everyday cooking with high vitamin E content.',
      features: ['High Smoke Point', 'Rich in Vitamin E', 'Light Flavor', 'Heart Healthy'],
      color: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Refined Soyabean Oil',
      description: 'Versatile cooking oil with balanced fatty acids for all your culinary needs.',
      features: ['Neutral Taste', 'Versatile Usage', 'Rich in Omega-6', 'Cost Effective'],
      color: 'from-blue-400 to-teal-500'
    },
    {
      name: 'Kachi Ghani Mustard Oil',
      description: 'Traditional cold-pressed oil with authentic flavor and natural goodness.',
      features: ['Cold Pressed', 'Authentic Flavor', 'Natural Antioxidants', 'Traditional Method'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Physically Refined Rice Bran Oil',
      description: 'Premium oil with natural antioxidants and excellent cooking properties.',
      features: ['High Oryzanol', 'Natural Antioxidants', 'Excellent Stability', 'Premium Quality'],
      color: 'from-amber-600 to-yellow-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className={`h-48 bg-gradient-to-br ${product.color} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;