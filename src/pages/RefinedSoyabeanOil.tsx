import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RefinedSoyabeanOil = () => {
  const benefits = [
    {
      icon: "δ",
      title: "Omega Fatty Acids",
      description: "Contains Omega 6 Polyunsaturated Fatty Acid and Omega-3 Polyunsaturated Fatty Acid"
    },
    {
      icon: "💧",
      title: "Linoleic Acid",
      description: "Rich in Linoleic Acid that helps maintain normal blood cholesterol levels"
    },
    {
      icon: "🔗",
      title: "Alpha Linoleic Acid",
      description: "Contains Alpha Linoleic Acid that contributes to the maintenance of normal blood cholesterol levels"
    },
    {
      icon: "🍊",
      title: "Natural Antioxidants",
      description: "Contains Tocopherols i.e. are natural antioxidants"
    }
  ];

  const packagingOptions = [
    {
      type: "Pouch",
      image: "pouch-icon",
      sizes: ["400gm", "425gm", "445gm", "800gm", "850gm", "895gm", "910gm"]
    },
    {
      type: "Bottle",
      image: "bottle-icon",
      sizes: ["170gm", "180gm", "400gm", "425gm", "445gm", "800gm", "850gm", "895gm"]
    },
    {
      type: "Large Container",
      image: "container-icon",
      sizes: ["4Kg", "4.25Kg", "4.475Kg", "5Ltr", "13Kg", "15Kg", "15Ltr"]
    },
    {
      type: "Bulk Container",
      image: "bulk-icon",
      sizes: ["13Kg", "15Kg", "15Ltr"]
    }
  ];

  const retailers = [
    { name: "bigbasket", logo: "🛒" },
    { name: "Flipkart", logo: "📦" },
    { name: "METRO Cash & Carry", logo: "🏪" },
    { name: "spencer's", logo: "🛍️" },
    { name: "blinkit", logo: "⚡" }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl border-b border-orange-200/30 relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-lg">CHOICE®</span>
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  MY CHOICE
                </h1>
                <p className="text-sm text-gray-600 font-medium">Premium Quality Since 1995</p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/products" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-orange-300/30"
              >
                ← Back to Products
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left - Product Info */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  🌟 Premium Quality
                </span>
              </div>
              <h1 className="text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  REFINED
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  SOYA BEAN OIL
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Add a touch of health to every meal with <span className="font-semibold text-orange-600">MY CHOICE</span> Refined Soybean Oil—your perfect cooking companion! 
                Packed with Vitamins A, D, and E, this oil doesn't just enhance the flavor of your dishes but also brings 
                natural antioxidants to the table. It helps maintain normal blood cholesterol levels, making it a smart choice 
                for your kitchen. With so many benefits in every drop, it's time to elevate your cooking and embrace the 
                goodness of soybean oil at your dining table!
              </p>
            </motion.div>

            {/* Retailers */}
            <motion.div 
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-orange-200/30"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                  🏪
                </span>
                Available at:
              </h3>
              <div className="flex flex-wrap gap-4">
                {retailers.map((retailer, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-3 rounded-xl border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-2xl">{retailer.logo}</span>
                    <span className="font-semibold text-gray-700">{retailer.name}</span>
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
              {/* Main Soybean Oil Image */}
              <motion.div 
                className="relative w-[28rem] h-[28rem] mx-auto mb-8"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-[3rem] blur-xl"></div>
                <img 
                  src="/soybean-oil-soybean-food-beverage-products-food-nutrition-concept.jpg" 
                  alt="Premium Soybean Oil Being Poured with Soybeans Scattered Around" 
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10"
                  style={{
                    boxShadow: "0 35px 70px -15px rgba(245, 158, 11, 0.4), 0 0 0 1px rgba(251, 191, 36, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                />
                
                {/* Premium Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-[3rem] z-20"></div>
                
                {/* Floating Soybean Elements */}
                <motion.div 
                  className="absolute top-8 left-8 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl z-30"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 12px 35px rgba(245, 158, 11, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                  }}
                />
                
                <motion.div 
                  className="absolute top-20 right-16 w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full shadow-2xl z-30"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 8px 25px rgba(251, 146, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-20 left-20 w-3.5 h-3.5 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-2xl z-30"
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.25, 1]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 15px 40px rgba(245, 158, 11, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                />
              </motion.div>
              
              {/* Product Badge */}
              <motion.div 
                className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-3xl p-6 text-white text-center shadow-2xl mx-auto max-w-sm border border-orange-300/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{
                  boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(251, 191, 36, 0.2)"
                }}
              >
                <div className="text-lg font-bold mb-2">MY CHOICE®</div>
                <div className="text-sm opacity-90 mb-4">Refined Soybean Oil</div>
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-white text-sm">🌱</span>
                  </div>
                  <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-white text-sm">💧</span>
                  </div>
                  <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-white text-sm">🌟</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 12px 35px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              />
              <motion.div 
                className="absolute top-24 right-24 w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full shadow-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 8px 25px rgba(251, 146, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              />
              <motion.div 
                className="absolute bottom-24 left-24 w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 0.7,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 15px 40px rgba(245, 158, 11, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              />
              <motion.div 
                className="absolute bottom-12 right-12 w-4 h-4 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full shadow-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: 1.2,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 12px 35px rgba(251, 146, 60, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.section 
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Health Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the natural goodness packed in every drop of our premium refined soybean oil
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white text-3xl font-bold">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Packaging Options */}
        <motion.section 
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Available Packaging & Sizes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of packaging options to suit your needs
            </p>
          </div>
          <div className="space-y-8">
            {packagingOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-8 text-white shadow-2xl border border-orange-300/30"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                      <span className="text-3xl">📦</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{option.type}</h3>
                      <div className="flex flex-wrap gap-3">
                        {option.sizes.map((size, sizeIndex) => (
                          <span 
                            key={sizeIndex}
                            className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold border border-white/30 shadow-lg"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our premium refined soybean oil
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What makes MY CHOICE Refined Soybean Oil different from other brands?",
                answer: "Our oil is carefully refined using advanced technology, ensuring high purity while preserving essential nutrients. We maintain strict quality standards and source only the finest soybean seeds."
              },
              {
                question: "Is this oil suitable for high-temperature cooking?",
                answer: "Yes, our refined soybean oil has a high smoke point, making it perfect for frying, sautéing, and other high-temperature cooking methods."
              },
              {
                question: "What are the health benefits of soybean oil?",
                answer: "Soybean oil is rich in polyunsaturated fats, particularly omega-6 fatty acids, and contains natural antioxidants. It helps maintain normal blood cholesterol levels and supports heart health."
              },
              {
                question: "How should I store the oil?",
                answer: "Store in a cool, dry place away from direct sunlight. Once opened, keep the container tightly sealed and use within the recommended timeframe for best quality."
              },
              {
                question: "Is this oil suitable for people with dietary restrictions?",
                answer: "Our soybean oil is 100% vegetarian and contains no animal products. However, if you have specific allergies or dietary concerns, please consult with your healthcare provider."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-orange-200/30 hover:shadow-3xl transition-all duration-300"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-4 text-white text-sm font-bold">
                    ?
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
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
          <motion.button 
            className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white px-12 py-5 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border border-orange-300/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RefinedSoyabeanOil;
