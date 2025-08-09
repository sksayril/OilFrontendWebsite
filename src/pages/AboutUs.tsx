import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">About Us</h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Doctor's Choice has been a trusted name in edible oils for over two decades. We believe that 
              every home-cooked meal deserves the finest ingredients, and our range of premium cooking oils 
              helps bring families together around delicious, wholesome food.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From our state-of-the-art facilities to your kitchen, we ensure that every drop of oil meets 
              the highest standards of quality and purity. Our commitment to excellence has made us the 
              preferred choice for millions of households across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide affordable, high-quality edible oils that enable every household to create 
                nutritious and delicious meals while preserving traditional cooking methods and flavors.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted brand in edible oils, known for our commitment to quality, 
                sustainability, and supporting the culinary traditions that bring families together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;