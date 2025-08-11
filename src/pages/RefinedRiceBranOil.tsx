import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RefinedRiceBranOil = () => {
  const benefits = [
    {
      icon: "🌟",
      title: "High Oryzanol",
      description: "Rich in Oryzanol (10,000+ ppm) that helps maintain normal blood cholesterol levels"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Physically refined using advanced technology for superior purity and stability"
    },
    {
      icon: "🛡️",
      title: "Natural Antioxidants",
      description: "Contains natural antioxidants including Vitamin E for enhanced shelf life"
    },
    {
      icon: "🔥",
      title: "Excellent Stability",
      description: "High smoke point and excellent oxidative stability for all cooking methods"
    }
  ];

  const features = [
    "100% Pure Rice Bran",
    "Physically Refined Process",
    "Rich in Vitamin A, D & E",
    "10,000+ ppm Oryzanol",
    "No Trans Fats",
    "Heart Healthy Choice"
  ];

  const packagingOptions = [
    {
      type: "Pouch",
      sizes: ["200ml", "500ml", "1L", "2L", "5L"]
    },
    {
      type: "Bottle",
      sizes: ["200ml", "500ml", "1L", "2L"]
    },
    {
      type: "Bulk Container",
      sizes: ["5L", "10L", "15L", "20L"]
    }
  ];

  const nutritionalInfo = [
    "Monounsaturated Fat: 39%",
    "Polyunsaturated Fat: 35%",
    "Saturated Fat: 20%",
    "Vitamin E: 32mg/100g",
    "Oryzanol: 10,000+ ppm",
    "Omega-6: 34%"
  ];

  const cookingUses = [
    "Deep frying and shallow frying",
    "Stir-frying and sautéing",
    "Baking and roasting",
    "Salad dressings and marinades",
    "High-temperature cooking",
    "Commercial food preparation"
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">CHOICE®</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Doctors' Choice</h1>
            </div>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left - Product Info */}
          <div>
            <motion.div 
              className="mb-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-amber-600">PHYSICALLY REFINED</span>
                <br />
                <span className="text-yellow-700">RICE BRAN OIL</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover the premium quality of Doctors' Choice Physically Refined Rice Bran Oil, a superior 
                cooking oil that combines health benefits with exceptional cooking performance. Rich in Oryzanol 
                (10,000+ ppm) and natural antioxidants, this oil is extracted using advanced physical refining 
                technology. It offers excellent stability, high smoke point, and is perfect for all types of 
                cooking while supporting heart health and maintaining normal cholesterol levels.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Product Image */}
          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Main Product Pouch */}
              <div className="w-64 h-80 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg relative mx-auto mb-4">
                <div className="absolute inset-0 bg-white rounded-lg m-2 p-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-amber-600 mb-2">DOCTORS' CHOICE</div>
                    <div className="text-xs text-gray-600 mb-2">PHYSICALLY REFINED RICE BRAN OIL</div>
                    <div className="flex justify-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-green-500 text-white text-xs flex items-center justify-center rounded">
                        A,D&E
                      </div>
                      <div className="w-8 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded">
                        10K+ ppm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Rice Grains */}
              <div className="flex justify-center space-x-4">
                <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-center text-amber-800">🌾</span>
                </div>
                <div className="w-20 h-16 bg-yellow-300 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-center text-yellow-800">🌱</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-3 h-3 bg-amber-400 rounded-full"></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Health Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nutritional Information */}
        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nutritional Profile</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionalInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">{info}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cooking Uses */}
        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cookingUses.map((use, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🍳</span>
                </div>
                <p className="text-gray-700 font-medium">{use}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Packaging Options */}
        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Available Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagingOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg p-6 text-white text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{option.type}</h3>
                <div className="space-y-2">
                  {option.sizes.map((size, sizeIndex) => (
                    <div 
                      key={sizeIndex}
                      className="bg-white bg-opacity-20 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-amber-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RefinedRiceBranOil;
