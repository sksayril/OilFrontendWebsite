import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productTypes = [
    'Soybean Oil',
    'Sunflower Oil', 
    'Mustard Oil',
    'Rice Bran Oil'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Left Navigation Links */}
          <div className="absolute left-0 hidden md:flex items-center space-x-8">
            <a href="/about" className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base">
              About Us
            </a>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base flex items-center space-x-1">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  {productTypes.map((product, index) => (
                    <a
                      key={index}
                      href={`/products/${product.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {product}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="/community" className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base">
              Community Center
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                <img 
                  src="/src/public/doctorlogo.png" 
                  alt="Doctor's Choice Logo" 
                  className="w-12 h-10 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Navigation Links */}
          <div className="absolute right-0 hidden md:flex items-center space-x-8">
            <a href="/recipes" className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base">
              Recipes
            </a>
            <a href="/csr" className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base">
              CSR
            </a>
            <a href="/blogs" className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base">
              Blogs
            </a>
            <a href="/contact" className="text-black hover:text-yellow-600 transition-all duration-300 font-medium text-base">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;