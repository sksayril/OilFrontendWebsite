import React from 'react';

const DilKiChoice = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 relative overflow-hidden">
      {/* Oil Pouring Animation */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <div className="relative h-full">
          {/* Oil Bottle */}
          <div className="absolute top-1/4 left-1/4 transform rotate-45">
            <div className="w-32 h-64 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-800 rounded-full"></div>
              <div className="absolute top-8 left-4 right-4 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Animated Oil Drop */}
          <div className="absolute top-1/2 left-1/2 animate-bounce">
            <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg"></div>
          </div>
          
          {/* Oil Stream */}
          <div className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-b from-yellow-400 to-yellow-600 opacity-80"></div>
          
          {/* Bottom Oil Drop */}
          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="lg:pl-8">
              <div className="mb-8">
                <h1 className="text-6xl lg:text-8xl font-bold text-orange-600 mb-4">
                  DIL KI
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold text-orange-600 mb-8">
                  CHOICE
                </h1>
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="lg:pr-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Home-cooked meals are the Dil Ki Choice of every household and we help bring those long-lost recipes to life with our range of affordable edible cooking oils. Join us for a journey into delicious, wholesome cooking where a rollercoaster of flavors meets the har ghar ka Masterchef.
              </p>
              
              {/* Know More Button */}
              <div className="relative inline-block">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
                  Know More
                </button>
                {/* Button Drip Effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-b-full"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products Section Header */}
      <div className="absolute bottom-0 w-full bg-white py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            OUR <span className="text-yellow-600">PRODUCTS</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default DilKiChoice;