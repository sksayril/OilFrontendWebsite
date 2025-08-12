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
              <h1 className="text-2xl font-bold text-gray-800">MY CHOICE</h1>
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
                Discover the premium quality of MY CHOICE Physically Refined Rice Bran Oil, a superior 
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
              {/* Main Rice Oil Image */}
              <motion.div 
                className="relative w-96 h-96 mx-auto mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/rice oil.jpg" 
                  alt="Premium Rice Oil in Glass Pitcher with Rice Grains and Stalks" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.3), 0 0 0 1px rgba(251, 191, 36, 0.1)"
                  }}
                />
                
                {/* Premium Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating Rice Elements */}
                <motion.div 
                  className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 8px 25px rgba(245, 158, 11, 0.4)"
                  }}
                />
                
                <motion.div 
                  className="absolute top-16 right-12 w-2 h-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 6px 20px rgba(251, 191, 36, 0.3)"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-16 left-16 w-2.5 h-2.5 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full shadow-lg"
                  animate={{
                    y: [0, -18, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.35)"
                  }}
                />
              </motion.div>
              
              {/* Product Badge */}
              <motion.div 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-4 text-white text-center shadow-xl mx-auto max-w-xs"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{
                  boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              >
                <div className="text-sm font-bold mb-1">MY CHOICE®</div>
                <div className="text-xs opacity-90">Physically Refined Rice Bran Oil</div>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌾</span>
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌟</span>
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">💎</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)"
                }}
              />
              <motion.div 
                className="absolute top-20 right-20 w-2 h-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 6px 20px rgba(251, 191, 36, 0.3)"
                }}
              />
              <motion.div 
                className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.7,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)"
                }}
              />
              <motion.div 
                className="absolute bottom-10 right-10 w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: 1.2,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 8px 25px rgba(251, 191, 36, 0.35)"
                }}
              />
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
