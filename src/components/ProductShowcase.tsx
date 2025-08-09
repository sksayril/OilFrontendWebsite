import React from 'react';

const ProductShowcase = () => {
  return (
    <section className="min-h-screen bg-white relative">
      {/* Heart Shape with Mustard Oil */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Heart Shape Background */}
          <div className="w-96 h-96 relative">
            <svg viewBox="0 0 100 90" className="w-full h-full">
              <path 
                d="M50,85 C50,85 15,55 15,35 C15,20 25,10 40,15 C45,10 55,10 60,15 C75,10 85,20 85,35 C85,55 50,85 50,85 Z"
                fill="url(#heartGradient)"
                className="drop-shadow-2xl"
              />
              <defs>
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#87CEEB', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#FFF8DC', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#9ACD32', stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </svg>

            {/* Mustard Oil Product Inside Heart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Product Package */}
                <div className="w-32 h-40 bg-red-500 rounded-lg shadow-xl relative mx-auto mb-4">
                  <div className="absolute top-2 left-2 right-2 bg-white rounded-full p-2">
                    <div className="text-xs font-bold text-center">DOCTORS' CHOICE</div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mt-1"></div>
                  </div>
                  <div className="absolute bottom-4 left-2 right-2 text-white text-xs font-bold text-center">
                    KACHI GHANI<br/>MUSTARD OIL
                  </div>
                </div>

                {/* Mustard Flowers */}
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>

                {/* Mustard Seeds */}
                <div className="flex justify-center space-x-1">
                  {Array.from({length: 8}).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Oil Drops */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
    </section>
  );
};

export default ProductShowcase;