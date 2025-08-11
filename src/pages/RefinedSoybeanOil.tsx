import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RefinedSoybeanOil = () => {
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
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50"
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
                <span className="text-orange-400">REFINED</span>
                <br />
                <span className="text-orange-600">SOY BEAN OIL</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Add a touch of health to every meal with Doctors' Choice Refined Soybean Oil—your perfect cooking companion! 
                Packed with Vitamins A, D, and E, this oil doesn't just enhance the flavor of your dishes but also brings 
                natural antioxidants to the table. It helps maintain normal blood cholesterol levels, making it a smart choice 
                for your kitchen. With so many benefits in every drop, it's time to elevate your cooking and embrace the 
                goodness of soybean oil at your dining table!
              </p>
            </motion.div>

            {/* Retailers */}
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Available at:</h3>
              <div className="flex flex-wrap gap-4">
                {retailers.map((retailer, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-2xl">{retailer.logo}</span>
                    <span className="font-medium text-gray-700">{retailer.name}</span>
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
              {/* Main Product Container */}
              <div className="w-64 h-80 bg-blue-500 rounded-lg relative mx-auto mb-4">
                <div className="absolute inset-0 bg-white rounded-lg m-2 p-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-600 mb-2">DOCTORS' CHOICE</div>
                    <div className="text-xs text-gray-600 mb-2">REFINED SOYBEAN OIL</div>
                    <div className="w-8 h-8 bg-green-500 text-white text-xs flex items-center justify-center rounded absolute top-2 left-2">
                      100% Veg
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Smaller Products */}
              <div className="flex justify-center space-x-4">
                <div className="w-16 h-24 bg-transparent border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-center">1L</div>
                </div>
                <div className="w-20 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-center">Pouch</div>
                </div>
              </div>
            </div>
            
            {/* Soybeans scattered around */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-3 h-3 bg-yellow-600 rounded-full"></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-600 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-600 rounded-full"></div>
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
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Packaging Options */}
        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Available Packaging & Sizes</h2>
          <div className="space-y-6">
            {packagingOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg p-6 text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{option.type}</h3>
                      <div className="flex flex-wrap gap-2">
                        {option.sizes.map((size, sizeIndex) => (
                          <span 
                            key={sizeIndex}
                            className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium"
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
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions on Refined Soybean Oil</h2>
          <div className="space-y-6">
            {[
              {
                question: "What makes Doctors' Choice Refined Soybean Oil different from other brands?",
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
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RefinedSoybeanOil;
