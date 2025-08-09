import React from 'react';

const SunflowerSection = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 overflow-hidden">
      {/* Sky with Clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-24 h-16 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-16 right-32 w-32 h-20 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-8 left-1/2 w-28 h-18 bg-white rounded-full opacity-75"></div>
      </div>

      {/* Sunflower on the left */}
      <div className="absolute left-8 bottom-0 transform rotate-12">
        <div className="relative">
          {/* Stem */}
          <div className="w-2 h-32 bg-green-600"></div>
          {/* Flower Head */}
          <div className="absolute -top-16 -left-6 w-12 h-12 bg-yellow-400 rounded-full border-4 border-orange-400">
            <div className="absolute inset-2 bg-brown-600 rounded-full"></div>
          </div>
          {/* Petals */}
          {Array.from({length: 8}).map((_, i) => (
            <div 
              key={i} 
              className="absolute -top-16 -left-6 w-3 h-6 bg-yellow-300 rounded-full origin-bottom"
              style={{
                transform: `rotate(${i * 45}deg) translate(6px, -8px)`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Oil Bottles floating */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 space-x-4 flex">
        <div className="w-12 h-20 bg-white rounded-lg shadow-lg animate-float">
          <div className="w-full h-4 bg-yellow-400 rounded-t-lg"></div>
          <div className="w-full h-2 bg-red-500 mt-2"></div>
        </div>
        <div className="w-12 h-20 bg-white rounded-lg shadow-lg animate-float delay-500">
          <div className="w-full h-4 bg-yellow-400 rounded-t-lg"></div>
          <div className="w-full h-2 bg-red-500 mt-2"></div>
        </div>
      </div>

      {/* Yellow Flowers scattered */}
      <div className="absolute bottom-20 right-1/4">
        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-1/3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-24 right-1/3">
        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default SunflowerSection;